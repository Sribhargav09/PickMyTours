const express = require("express");
const mailer = require('nodemailer');
const userExpressRoute = express.Router();
let uuidv4 = require('uuid/v4'),
  multer = require('multer'),
  router = express.Router();

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
      console.log(user)
      if (user) {
        return res.status(400).json({
          email: 'Email already exists'
        });
      }
      else {
        UserSchema.create(req.body)
          .then((result) => {
            console.log(result);
            res.json({
              data: result,
              message: "Data successfully added.",
              status: 200,
            });

            smtpProtocol = mailer.createTransport({
              service: "Gmail",
              auth: {
                  user: "Admin@pickmytours.com",
                  pass: "TravelStories@9"
              }
          });
          
          var mailoption = {
              from: "Admin@pickmytours.com",
              to: req.body.email,
              subject: "Veriy your Email Address - PickMyTours",
              html: '<body style="background-color:grey"><p>The verificaiton code to verify your emil address to complete registraiton is as below</p><div><strong>'+req.body.code+'</strong></div></body>'
          }
          
          smtpProtocol.sendMail(mailoption, function(err, response){
              if(err) {
                  console.log(err);
              } 
              console.log('Message Sent' + response);
              smtpProtocol.close();
          });


          //   smtpProtocol = mailer.createTransport({
          //     service: "Gmail",
          //     auth: {
          //         user: "Admin@pickmytours.com",
          //         pass: "TravelStories@9"
          //     }
          // });
          
          // var mailoption = {
          //     from: "Admin@pickmytours.com",
          //     to: req.body.email,
          //     subject: "PickMyTours - Registration Completed",
          //     html: '<body style="background-color:grey"><table align="center" border="0" cellpadding="0" cellspacing="0" width="550" bgcolor="white" style="border:2px solid black"><tbody><tr><td align="center"><br />Your Login Details are <br/><strong>Email</strong>:'+req.body.email+'<br/><strong>Password</strong>:'+req.body.password+'</td></tr></tbody></table></body>'
          // }
          
          // smtpProtocol.sendMail(mailoption, function(err, response){
          //     if(err) {
          //         console.log(err);
          //     } 
          //     console.log('Message Sent' + response);
          //     smtpProtocol.close();
          // });
           })
          .catch((err) => {
            console.log(req.body);
            return next(err);
          });


      }
  });
});

userExpressRoute.post("/login", (req, res) => {
  console.log(req.body)
  UserSchema.findOne({
    email: req.body.email,
  }).then((user) => {
      console.log(user);
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
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
  upload.fields([{ name: 'featurePhoto', maxCount: 1 }, { name: 'gallery', maxCount: 8 }, { name: 'itineraryImages', maxCount: 8 }]);
  await UserSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body,
  })
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
module.exports = userExpressRoute;