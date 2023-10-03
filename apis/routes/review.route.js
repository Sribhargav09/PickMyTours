const express = require("express");
const reviewExpressRoute = express.Router();
let uuidv4 = require('uuid/v4'),
multer = require('multer'),
    router = express.Router();

const DIR = './public/reviews/';

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




let ReviewSchema = require("../model/review.model");
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
reviewExpressRoute
  .route("/reviews", cors(corsOptionsDelegate))
  .get(async (req, res, next) => {
    await ReviewSchema.find()
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
reviewExpressRoute.post("/create-review", upload.fields([{ name: 'photo', maxCount: 1 }]), (req, res, next) => {
    
    const url = req.protocol + '://' + req.get('host')

    if (req.files && req.files['photo']) {
      req.body.photo = url + '/reviews/' + req.files['photo'][0].filename;
    } else {
      req.body.photo = 'avatar.png';
    }

    req.body.date =  new Date(Date.now()).toISOString();

   ReviewSchema.create(req.body)
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
reviewExpressRoute.route("/review/:id").get(async (req, res, next) => {
  await ReviewSchema.findById(req.params.id, req.body)
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
// Get single user
reviewExpressRoute.route("/tour-reviews/:id").get(async (req, res, next) => {
  console.log(req.params.id)
  await ReviewSchema.find({"tourId": req.params.id})
    .then((result) => {
      console.log(result)
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
reviewExpressRoute.route("/update-review/:id").put(async (req, res, next) => {
  await ReviewSchema.findByIdAndUpdate(req.params.id, {
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
reviewExpressRoute.route("/remove-review/:id").delete(async (req, res) => {
  await ReviewSchema.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        msg: "Data successfully updated.",
      });
    })
    .catch((err) => {
      return next(err);
    });
});
module.exports = reviewExpressRoute;