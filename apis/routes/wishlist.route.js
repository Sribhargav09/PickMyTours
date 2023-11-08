const express = require("express");
const mailer = require('nodemailer');
const wishlistExpressRoute = express.Router();
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

const DIR = './public/wishlist/';

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




let wishListSchema = require("../model/wishlist.model");
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
wishlistExpressRoute
  .route("/getWishList/:id")
  .get(async (req, res, next) => {
    await wishListSchema.find({"tourId": req.params.id})
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
wishlistExpressRoute.post("/addtowishlist",  (req, res, next) => {
  wishListSchema.create(req.body)
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


module.exports = wishlistExpressRoute;