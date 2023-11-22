const express = require("express");
const stripeRoute = express.Router();
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51NkBsQSJdkMUOQFiLq89s92z6GMWIeHywIsOn7oalmVErp3gkqCbM0QazKzndKDUcZVjszZWuqoGUEE8dFwXWLmM00NcbzEZnO');
const cors = require("cors");


stripeRoute.post("/user/register", async (req, res) => {
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
        automatic_payment_methods: {enabled: true, allow_redirects: "never"},
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