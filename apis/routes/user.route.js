const express = require("express");
const mailer = require('nodemailer');
const userExpressRoute = express.Router();
let uuidv4 = require('uuid/v4'),
  multer = require('multer'),
  router = express.Router();
const TWILIO_PHONE_NUMBER = '+17698889434';
const TWILIO_ACCOUNT_SID = 'AC0ebe3760ab0fa3443eaf9ffcdf5ef308';
const TWILIO_AUTH_TOKEN = 'e503ba86046a4cd2946c07fbe698bc73';
const client = require('twilio')(
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN
);
const fs = require('fs');
const path = require('path');

const DIR = './public/users/';

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = uuidv4() + '-' + file.originalname.toLowerCase().split(' ').join('-')

    cb(null, fileName)
  }
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});
const cors = require("cors");




let UserSchema = require("../model/user.model");

let SubscribtionSchema = require("../model/subscribtion.model");
// CORS OPTIONS
var whitelist = ["http://localhost:8100", "http://localhost:4000"];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = {
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    };
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions);
};
// Get users
userExpressRoute
  .route("/users", cors(corsOptionsDelegate))
  .get(async (req, res, next) => {
    await UserSchema.find()
      .then((result) => {
        res.json({
          data: result,
          message: "Data successfully fetched!",
          status: 200,
        });
      })
      .catch((err) => {
        return next(err);
      });
  });



// Create user
userExpressRoute.post("/create-user", upload.fields([{ name: 'photo', maxCount: 1 }]), (req, res, next) => {

  const url = req.protocol + '://' + req.get('host');

  if (req.files && req.files['photo']) {
    req.body.photo = url + '/users/' + req.files['photo'][0].filename;
  } else {
    req.body.photo = 'avatar.png';
  }

  req.body.password = bcrypt.hashSync(req.body.password, 8),

    req.body.active = false;
  req.body.code = Math.floor(1000 + Math.random() * 9000);

  UserSchema.findOne({
    email: req.body.email
  }).then(user => {
    if (user) {
      return res.status(400).json({
        email: 'Email already exists'
      });
    }
    else {
      UserSchema.create(req.body)
        .then((result) => {
          res.json({
            data: result,
            message: "Data successfully added.",
            status: 200,
          });

          smtpProtocol = mailer.createTransport({
            service: "Outlook",
            auth: {
              user: "admin@pickmytours.com",
              pass: "TravelStories@9"
            }
          });

          var otp = req.body.code;

          var mailoption = {
            from: "admin@pickmytours.com",
            to: req.body.email,
            subject: "Veriy your Email Address - PickMyTours",
            html: '<body style="background-color:grey"><p>The verificaiton code to verify your emil address to complete registraiton is as below</p><div><strong>' + req.body.code + '</strong></div></body>'
          }

          smtpProtocol.sendMail(mailoption, function (err, response) {
            if (err) {
              console.log(err);
            }
            //console.log('Message Sent' + response);
            smtpProtocol.close();
          });

          client.messages
            .create({
              from: process.env.TWILIO_PHONE_NUMBER,
              from: TWILIO_PHONE_NUMBER,
              to: req.body.phone,
              body: "Your verfication code is " + otp
            })
            .then(() => {
              res.send(JSON.stringify({ success: true }));
            })
            .catch(err => {
              res.send(JSON.stringify({ success: false }));
            });



        })
        .catch((err) => {
          console.log(req.body);
          return next(err);
        });


    }
  });
});

userExpressRoute.post("/verify", (req, res) => {
  UserSchema.find({
    code: req.body.code,
    _id: req.body.id
  }).then((user) => {
    if (!user || user.length == 0) {
      return res.status(404).send({ message: "Invalid code found." });
    }
    console.log(user);
    user[0].active = true;

    UserSchema.findByIdAndUpdate(user[0]._id, user[0], { useFindAndModify: false })
      .then((result) => {
        res.json({
          data: result,
          msg: "Data successfully updated.",
        });

        const emailTemplatePath = path.join(__dirname, 'signup-email-template.html');
        const emailTemplate = fs.readFileSync(emailTemplatePath, 'utf8');

        const htmlEmail = emailTemplate
          .replace('{name}', req.body.name)
          .replace('{email}', req.body.email)
          .replace('{password}', req.body.password);


        smtpProtocol = mailer.createTransport({
          service: "Outlook",
          auth: {
            user: "admin@pickmytours.com",
            pass: "TravelStories@9"
          }
        });

        var otp = req.body.code;

        var mailoption = {
          from: "admin@pickmytours.com",
          to: req.body.email,
          subject: "Veriy your Email Address - PickMyTours",
          html: htmlEmail
        }

        smtpProtocol.sendMail(mailoption, function (err, response) {
          if (err) {
            console.log(err);
          }
          //console.log('Message Sent' + response);
          smtpProtocol.close();
        });

      })
      .catch((err) => {
        console.log(err);
        return next(err);
      });

  });
});

userExpressRoute.post("/login", (req, res) => {
  console.log('req', req.body);

  const check = {}
  if (req.body.email) {
    check.email = req.body.email;
  } else if (req.body.phone) {
    check.phone = req.body.phone;
  }

  UserSchema.findOne(check).then((user) => {
    console.log('user', user);
    if (!user) {
      return res.status(404).send({ message: "User Not found.ddddd" });
    }

    if (user && !user.active) {
      return res.status(404).send({ message: "Your account is not verified." });
    }

    var passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({ message: "Invalid Password!" });
    }

    // const token = jwt.sign({ id: user._id },
    //   config.secret,
    //   {
    //     algorithm: 'HS256',
    //     allowInsecureKeySizes: true,
    //     expiresIn: 86400, // 24 hours
    //   });
    let token = user._id;
    // var authorities = [];

    // for (let i = 0; i < user.roles.length; i++) {
    //   authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
    // }

    //req.session.token = token;

    res.status(200).send({
      id: user._id,
      user: user,
      email: user.email,
      token: token
    });
  });
});

// Get single user
userExpressRoute.route("/user/:id").get(async (req, res, next) => {
  await UserSchema.findById(req.params.id, req.body)
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully retrieved.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

// Update user
userExpressRoute.route("/update-user/:id").put(async (req, res, next) => {
  await UserSchema.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
    .then((result) => {
      res.json({
        data: result,
        msg: "Data successfully updated.",
      });
    })
    .catch((err) => {
      return next(err);
    });
});

// userExpressRoute.route("/update-user/:id")
//   .get((req, res) => {
//     studentSchema.findById(
//       req.params.id, (error, data) => {
//         if (error) {
//           return next(error);
//         } else {
//           res.json(data);
//         }
//       });
//   })

//   .put(async (req, res, next) => {
//     //upload.fields([{ name: 'featurePhoto', maxCount: 1 }]);
//     await UserSchema.findByIdAndUpdate(req.params.id, {
//       $set: req.body,
//     })
//       .then((result) => {
//         res.json({
//           data: result,
//           msg: "Data successfully updated.",
//         });
//       })
//       .catch((err) => {
//         return next(err);
//       });
//   });


// Delete student
userExpressRoute.route("/remove-user/:id").delete(async (req, res) => {
  await UserSchema.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        msg: "Data successfully updated.",
      });
    })
    .catch((err) => {
      return next(err);
    });
});

userExpressRoute.route("/subscribe").post(async (req, res) => {
  //console.log(req); return;
  const email = req.body.email;
  console.log(email);
  const existingSubscriber = await SubscribtionSchema.findOne({ email });
  console.log('existingSubscriber', existingSubscriber);
  if (existingSubscriber) {
    res.json({ msg: "alreadySubscribed" });
  } else {
    let userId = null;
    const existingUser = await UserSchema.findOne({ email });

    // If the user exists, retrieve userId and update Subscriber
    if (existingUser) {
      userId = existingUser._id;
    }
    const newSubscriber = new SubscribtionSchema({ email, userId });
    const result = await newSubscriber.save();

    console.log(`User subscribed with email: ${email}`);
    console.log(`Inserted document id: ${result._id}`);
    res.json({ msg: "subscribed" });
  }

});
module.exports = userExpressRoute;