const express = require("express");
const https = require("http");
const hostname = 'pickmytours.com';        
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const passport = require('passport');
const mailer = require('nodemailer');
const fs = require("fs");


// Connecting MongoDB
async function mongoDbConnection() {
  await mongoose.connect(
    "mongodb://127.0.0.1:27017/pickmytours",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    6000
  );
}
mongoDbConnection().then(() => {
  console.log("MongoDB successfully connected.");
}),
  (error) => {
    console.log("Could not connected to database : " + err);
  };
const tourRoute = require("./routes/tour.route");
const locationRoute = require("./routes/location.route");
const tourTypeRoute = require("./routes/tour-type.route");
const offerRoute = require("./routes/offer.route");
const userRoute = require("./routes/user.route");
const reviewRoute = require("./routes/review.route");
const testinomialRoute = require("./routes/testinomial.route");
const enquieryRoute = require("./routes/enquiery.route");
const razropayRoute = require("./routes/razropay.route");
const ordersRoute = require("./routes/orders.route");
const wishlistRoute = require("./routes/wishlist.route");



const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
  bodyParser.json()
);

// CORS
app.use(cors());
// RESTful API root
app.use("/", tourRoute);
app.use("/", locationRoute);
app.use("/", tourTypeRoute);
app.use("/", offerRoute);
app.use("/", userRoute);
app.use("/", reviewRoute);
app.use("/", testinomialRoute);
app.use("/", razropayRoute);
app.use("/", enquieryRoute);
app.use("/", ordersRoute);
app.use("/", wishlistRoute);


app.use(express.static(__dirname +'/public'));
// PORT
const port = process.env.PORT || 8080;
// app.listen(port, () => {
//   console.log("PORT Connected on: " + port);
// });
// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

const options = {
  // key: fs.readFileSync("certs/server.key"),                  //Change Private Key Path here
  // cert: fs.readFileSync("certs/certificate.crt"),            //Change Main Certificate Path here
  // ca: fs.readFileSync('certs/intermediate.crt'),             //Change Intermediate Certificate Path here
  };
  
  https.createServer(options, app)
  .listen(8080, function (req, res) {                        //Change Port Number here (if required, 443 is the standard port for https)
  console.log("Server started at port 3000");                //and here 
  });