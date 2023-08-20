const express = require("express");
const testinomialExpressRoute = express.Router();
let uuidv4 = require('uuid/v4'),
multer = require('multer'),
    router = express.Router();

const DIR = './public/testinomials/';

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




let TestinomialSchema = require("../model/testinomial.model");
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
testinomialExpressRoute
  .route("/testinomials", cors(corsOptionsDelegate))
  .get(async (req, res, next) => {
    await TestinomialSchema.find()
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
testinomialExpressRoute.post("/create-testinomial", upload.fields([{ name: 'photo', maxCount: 1 }]), (req, res, next) => {
    
    const url = req.protocol + '://' + req.get('host')

    req.body.photo = url + '/testinomials/' + req.files['photo'][0].filename;

   TestinomialSchema.create(req.body)
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
// Get single user
testinomialExpressRoute.route("/testinomial/:id").get(async (req, res, next) => {
  await TestinomialSchema.findById(req.params.id, req.body)
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
testinomialExpressRoute.route("/update-testinomial/:id").put(async (req, res, next) => {
  await TestinomialSchema.findByIdAndUpdate(req.params.id, {
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
testinomialExpressRoute.route("/remove-testinomial/:id").delete(async (req, res) => {
  await TestinomialSchema.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        msg: "Data successfully updated.",
      });
    })
    .catch((err) => {
      return next(err);
    });
});
module.exports = testinomialExpressRoute;