const express = require("express");
var Razorpay = require('razorpay');
const mailer = require('nodemailer');


const razropayExpressRoute = express.Router();

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
let uuidv4 = require('uuid/v4'),
multer = require('multer'),
    router = express.Router();

const cors = require("cors");

const config = {
  RAZOR_PAY_KEY_ID:"rzp_test_GEkrv0JEPX9JyB",
  RAZOR_PAY_KEY_SECRET:"lDVK5vpRK4ZNDCTGpbdFyGG1"
}

const instance = new Razorpay({
    key_id: config.RAZOR_PAY_KEY_ID,
    key_secret: config.RAZOR_PAY_KEY_SECRET,
});

razropayExpressRoute
.route("/orders", cors(corsOptionsDelegate))
.post((req, res, next) => {
  console.log(req);
  try {
    const options = {
      amount: Math.round(req.body.amount), // amount == Rs 10
      currency: req.body.currency,
      receipt: "receipt#1",
      payment_capture: 0,
 // 1 for automatic capture // 0 for manual capture
    };
  instance.orders.create(options, async function (err, order) {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Something Went Wrong",
      });
    }
  return res.status(200).json(order);
 });
} catch (err) {
  console.log(err);
  return res.status(500).json({
    message: "Something Went Wrong",
  });
 }
});

razropayExpressRoute.post("/capture/:paymentId", (req, res, next) => {
  try {
    return request(
     {
     method: "POST",
     url: `https://${config.RAZOR_PAY_KEY_ID}:${config.RAZOR_PAY_KEY_SECRET}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
     form: {
        amount: 10 * 100, // amount == Rs 10 // Same As Order amount
        currency: "INR",
      },
    },
   async function (err, response, body) {
     if (err) {
      return res.status(500).json({
         message: "Something Went Wrong",
       }); 
     }


        // smtpProtocol = mailer.createTransport({
        //   service: "Outlook",
        //   auth: {
        //     user: "admin@pickmytours.com",
        //     pass: "TravelStories@9"
        //   }
        // });

        // var mailoption = {
        //   from: "admin@pickmytours.com",
        //   to: req.body.email,
        //   subject: "Your Trip Confrimed - Itineary details",
        //   html: '<body style="background-color:grey"><p>The verificaiton code to verify your emil address to complete registraiton is as below</p><div><strong>' + req.body.code + '</strong></div></body>'
        // }

        // smtpProtocol.sendMail(mailoption, function (err, response) {
        //   if (err) {
        //     console.log(err);
        //   }
        //   //console.log('Message Sent' + response);
        //   smtpProtocol.close();
        // });


      console.log("Status:", response.statusCode);
      console.log("Headers:", JSON.stringify(response.headers));
      console.log("Response:", body);
      return res.status(200).json(body);
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong",
   });
  }
});


// CORS OPTIONS

module.exports = razropayExpressRoute;