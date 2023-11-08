const express = require("express");
const mailer = require('nodemailer');

const ordersExpressRoute = express.Router();
let uuidv4 = require('uuid/v4'),
multer = require('multer'),
    router = express.Router();

const DIR = './public/orders/';

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


let orderschema = require("../model/orders.model");
let TourSchema = require("../model/tour.model");

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

// Create user
ordersExpressRoute.post("/create-order",  (req, res, next) => {


      console.log(req.body);
      smtpProtocol = mailer.createTransport({
        service: "Outlook",
        auth: {
          user: "admin@pickmytours.com",
          pass: "TravelStories@9"
        }
      });

      let ItinearyTxt = '';

      const itinerary = req.body.itinerary;
      req.body.itinerary = '';

    
      itinerary.forEach((element, index) => {
        ItinearyTxt += '<p><h1>Day '+index+'</h1><h3>'+element.name+'</h3><p>'+element.details+'</p><div><strong>Duration:-</strong>'+element.duration+'</div></p>';
      });

      const emailTemplatePath = path.join(__dirname, 'itinerary-email-template.html');
    const emailTemplate = fs.readFileSync(emailTemplatePath, 'utf8');

  const htmlEmail = emailTemplate
    .replace('{name}', req.body.firstName+" "+req.body.lastName)
    .replace('{tourDetails}', ItinearyTxt);

      //console.log(ItinearyTxt);

      var mailoption = {
        from: "admin@pickmytours.com",
        to: req.body.email,
        subject: "Your Tour Confirmed",
        html: htmlEmail
      }
    
      smtpProtocol.sendMail(mailoption, function (err, response) {
        if (err) {
          console.log(err);
        }
        //console.log('Message Sent' + response);
        smtpProtocol.close();
      });
    
  
  
   orderschema.create(req.body)
    .then((result) => {
      console.log(result);
      res.json({
        data: result,
        message: "Data successfully added.",
        status: 200,
      });
    })
    .catch((err) => {
        console.log(req.body);
      return next(err);
    });
});
// // Get single user
// ordersExpressRoute.route("/location/:id").get(async (req, res, next) => {
//   await orderschema.findById(req.params.id, req.body)
//     .then((result) => {
//       res.json({
//         data: result,
//         message: "Data successfully retrieved.",
//         status: 200,
//       });
//     })
//     .catch((err) => {
//       return next(err);
//     });
// });
// // Update user
// ordersExpressRoute.route("/update-location/:id").put(async (req, res, next) => {
//   await orderschema.findByIdAndUpdate(req.params.id, {
//     $set: req.body,
//   })
//     .then((result) => {
//       res.json({
//         data: result,
//         msg: "Data successfully updated.",
//       });
//     })
//     .catch((err) => {
//       return next(err);
//     });
// });
// // Delete student
// ordersExpressRoute.route("/remove-location/:id").delete(async (req, res) => {
//   await orderschema.findByIdAndRemove(req.params.id)
//     .then(() => {
//       res.json({
//         msg: "Data successfully updated.",
//       });
//     })
//     .catch((err) => {
//       return next(err);
//     });
// });
module.exports = ordersExpressRoute;