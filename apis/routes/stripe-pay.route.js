const express = require("express");
const stripeRoute = express.Router();
//const Stripe = require('stripe');
//const stripe = Stripe('sk_test_51NkBsQSJdkMUOQFiLq89s92z6GMWIeHywIsOn7oalmVErp3gkqCbM0QazKzndKDUcZVjszZWuqoGUEE8dFwXWLmM00NcbzEZnO');
//const stripe = require('stripe')('sk_test_51OEqT5SHKAp1IV0B1R3LaBmjuF0TDifEGXcBSvSZUNoGSMPfE2o9nbT6TqBCobb2VRdP8i3Ke8Fp2paRZMTZ7qSy00UdV5trEU');
const bodyParser = require('body-parser');
const cors = require("cors");

process.env.STRIPE_PUBLISHABLE_KEY = 'pk_test_51OEqT5SHKAp1IV0B10FWgzCOFDryZqGYyxVHKEpJbCChoNvv0pIV6kBGBPHkFBAsaYjmgxUgDGdWXHKMq54My5zk00ZVz7aOEi';
process.env.STRIPE_SECRET_KEY = 'sk_test_51OEqT5SHKAp1IV0B1R3LaBmjuF0TDifEGXcBSvSZUNoGSMPfE2o9nbT6TqBCobb2VRdP8i3Ke8Fp2paRZMTZ7qSy00UdV5trEU';
process.env.STATIC_DIR = '../../client/react-cra/public';
process.env.STRIPE_WEBHOOK_SECRET = 'whsec_a4702a395697898ee91624fcc74203de6e94ee6c3c0a49ef0bd08af3c84ea69d';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
  appInfo: { // For sample support and debugging, not required for production:
    name: "stripe-samples/accept-a-payment/payment-element",
    version: "0.0.2",
    url: "https://github.com/stripe-samples"
  }
});



stripeRoute.post('/create-payment-intent', async (req, res) => {
  
  const { amount, description, shipping, currency, payment_method } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      //description,
      //shipping,
      amount,
      currency,
      //payment_method,
      automatic_payment_methods: { enabled: true },
       //payment_method_types: ['card', 'google_pay'],
      // payment_method_options: {
      //   card: {
      //     mandate_options: {
      //       interval: 'month', // or 'interest_free', depending on your needs
      //       interval_count: '1',
      //       reference: '22061987',
      //       amount_type: 'fixed',
      //       amount,
      //       start_date: Math.floor(Date.now() / 1000),
      //       supported_types: ['india']

      //     },
      //   },
      // },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error creating payment intent' });
  }
});

stripeRoute.post('/webhook', async (req, res) => {
  let data, eventType;

  // Check if webhook signing is configured.
  if (process.env.STRIPE_WEBHOOK_SECRET) {
    // Retrieve the event by verifying the signature using the raw body and secret.
    let event;
    let signature = req.headers['stripe-signature'];
    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`);
      return res.sendStatus(400);
    }
    data = event.data;
    eventType = event.type;
  } else {
    // Webhook signing is recommended, but if the secret is not configured in `config.js`,
    // we can retrieve the event data directly from the request body.
    data = req.body.data;
    eventType = req.body.type;
  }

  if (eventType === 'payment_intent.succeeded') {
    // Funds have been captured
    // Fulfill any orders, e-mail receipts, etc
    // To cancel the payment after capture you will need to issue a Refund (https://stripe.com/docs/api/refunds)
    console.log('💰 Payment captured!');
  } else if (eventType === 'payment_intent.payment_failed') {
    console.log('❌ Payment failed.');
  }
  res.sendStatus(200);
});


stripeRoute.post("/createStripCustomer", async (req, res) => {
  const { email, name, password, phone } = req.body;

  /*  Add this user in your database and store stripe's customer id against the user   */
  try {
    const customer = await createStripeCustomer({ email, name, password, phone });
    res.status(200).json({ data: customer, message: "Customer created" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "An error occured" });
  }
});

/* Util function to create stripe customer*/
async function createStripeCustomer({ name, email, phone }) {
  return new Promise(async (resolve, reject) => {
    try {
      const Customer = await stripe.customers.create({
        name: name,
        email: email,
        phone: phone,
      });

      resolve(Customer);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
}

stripeRoute.post("/payment/method/attach", async (req, res) => {

  //const { paymentMethod } = req.body;

  /* Before Edit */
  const { customerId, cardNumber, expMonth, expYear, name, address } = req.body;
  const card = {
    number: cardNumber,
    exp_month: parseInt(expMonth),
    exp_year: parseInt(expYear),
  };
  console.log(address);
  const billingDetails = {
    name: name,
    address: {
      country: 'IN',
      state: address.state,
      city: address.city,
      line1: address.line,
      postal_code: address.postalCode,
    },
  };


  /* Fetch the Customer Id of current logged in user from the database */
  //const customerId = "cus_Lh8BpVkOo5akHN";

  try {
    const method = await attachMethod({ card, billingDetails, customerId });
    res.status(200).json({ message: "Payment method attached succesully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Could not attach method" });
  }
});

//   function attachMethod({ paymentMethod, customerId }) {
//     return new Promise(async (resolve, reject) => {
//       try {
//         const paymentMethodAttach = await stripe.paymentMethods.attach(paymentMethod.id, {
//           customer: customerId,
//         });
//         resolve(paymentMethodAttach);
//       } catch (err) {
//         reject(err);
//       }
//     });
//   }


/* Before Edit */
async function attachMethod({ card, billingDetails, customerId }) {
  return new Promise(async (resolve, reject) => {
    try {
      const paymentMethod = await stripe.paymentMethods.create({
        type: "card",
        billing_details: billingDetails,
        card,
      });
      const paymentMethodAttach = await stripe.paymentMethods.attach(paymentMethod.id, {
        customer: customerId,
      });
      resolve(paymentMethodAttach);
    } catch (err) {
      reject(err);
    }
  });
}

stripeRoute.get("/payment/methods", async (req, res) => {
  /* Query database to fetch Stripe Customer Id of current logged in user */
  const customerId = "cus_Lh8BpVkOo5akHN";

  try {
    const paymentMethods = await listCustomerPayMethods(customerId);
    res.status(200).json(paymentMethods);
  } catch (err) {
    console.log(err);
    res.status(500).json("Could not get payment methods");
  }
});

/* Util to list the payment methods */
async function listCustomerPayMethods(customerId) {
  return new Promise(async (resolve, reject) => {
    try {
      const paymentMethods = await stripe.customers.listPaymentMethods(customerId, {
        type: "card",
      });
      resolve(paymentMethods);
    } catch (err) {
      reject(err);
    }
  });
}

stripeRoute.post("/payment/create", async (req, res) => {
  const { paymentMethod, customerId, amount } = req.body;

  /* Query database for getting the payment amount and customer id of the current logged in user */

  const currency = "INR";
  const userCustomerId = customerId;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
      customer: userCustomerId,
      payment_method: paymentMethod,
      //confirmation_method: "manual", // For 3D Security
      description: "Buy Product",
      automatic_payment_methods: { enabled: true, allow_redirects: "never" },
      payment_method_options: {
        card: {
          installment: {
            plans: [
              { installment_plan: 'standard', interval: 'monthly' },
            ],
          },
        },
      },
    });

    /* Add the payment intent record to your datbase if required */
    res.status(200).json(paymentIntent);
  } catch (err) {
    console.log(err);
    res.status(500).json("Could not create payment");
  }
});

stripeRoute.post("/payment/confirm", async (req, res) => {
  const { paymentIntent, paymentMethod } = req.body;
  try {
    const intent = await stripe.paymentIntents.confirm(paymentIntent, {
      payment_method: paymentMethod,
    });

    /* Update the status of the payment to indicate confirmation */
    res.status(200).json(intent);
  } catch (err) {
    console.error(err);
    res.status(500).json("Could not confirm payment");
  }
});

module.exports = stripeRoute;