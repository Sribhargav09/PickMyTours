import React, { useState } from 'react';
import { CardElement, useStripe, useElements, PaymentElement,
    LinkAuthenticationElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import './CheckoutForm.css';

const CheckoutForm = ({ placeOrder, tourId, amount, currency, name, email, address1, address2, city, state, country, zipcode }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    

    const [billingDetials, setBillingDetials] = useState({
        name,
        email,
        address: {
            line1: address1 + ", " + address2,
            postal_code: zipcode,
            city,
            state,
            country,
        }
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setLoading(true);

        try {

            const { error, paymentIntent } = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: `http://localhost:3000/tour/${tourId}`,
                },
                redirect: 'if_required' 

              });

              console.log(error);
              console.log(paymentIntent);
          
              // This point will only be reached if there is an immediate error when
              // confirming the payment. Otherwise, your customer will be redirected to
              // your `return_url`. For some payment methods like iDEAL, your customer will
              // be redirected to an intermediate site first to authorize the payment, then
              // redirected to the `return_url`.
             
              if (error && error.type === "card_error" || error && error.type === "validation_error") {
                setErrorMessage(error.message);
              }else if (paymentIntent && paymentIntent.status === "succeeded") {
                setMessage("Payment succeeded");
                // handleSuccess();
                
                    placeOrder({id:paymentIntent.id});
              } else {
                setErrorMessage("Payment failed");
                // handleOther();
              }
              setLoading(false);

            
          


            // // Create a PaymentMethod
            // const { paymentMethod, error } = await stripe.createPaymentMethod({
            //     type: 'card',
            //     card: elements.getElement(CardElement),
            //     billing_details: {
            //         name,
            //         email,
            //         postal_code: zipcode
            //     }
            // });

            // if (error) {
            //     console.error(error);
            //     setLoading(false);
            //     return;
            // }

            // // Send the PaymentMethod ID to your server
            // const response = await axios.post('http://localhost:8080/create-payment-intent', {
            //     name,
            //     amount: ~~amount,
            //     currency: currency.toLowerCase(),
            //     payment_method: paymentMethod.id,
            //     description: "Tour booking - PickMyTours",
            //     shipping: {
            //         name: name,
            //         address: {
            //             line1: address1 + ", " + address2,
            //             postal_code: zipcode,
            //             city,
            //             state,
            //             country,
            //         },
            //     },
            // });

            // // Confirm the payment on the client side with EMI option
            // const result = await stripe.confirmCardPayment(response.data.clientSecret, {
            //     payment_method: paymentMethod.id,


            // });

            // if (result.error) {
            //     console.error(result.error);
            // } else {
            //     console.log(result);
            // }
        } catch (error) {
            console.error(error);
            
        setLoading(false);
        }

    };



    return (
        <form  id="payment-form" className="checkout-form" onSubmit={handleSubmit}>

            {/* <CardElement className="card-element" /> */}

            <LinkAuthenticationElement id="link-authentication-element"
        // Access the email value like so:
        // onChange={(event) => {
        //  setEmail(event.value.email);
        // }}
        //
        // Prefill the email field like so:
        // options={{defaultValues: {email: 'foo@bar.com'}}}
        />
      <PaymentElement id="payment-element" />
      <button disabled={loading || !stripe || !elements} id="submit" className="pay-button">
        <span id="button-text">
          {loading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="message">{message}</div>}
      {errorMessage && <div id="payment-message" class="error">{message}</div>}

            {/* <div className="row x-gap-20 y-gap-20 pt-20">
                <div className="col-6">
                    <div className="form-input ">
                        <input type="text" value={name} readOnly disabled required />
                        <label className="lh-1 text-16 text-light-1">Name</label>
                    </div>
                </div>


                <div className="col-md-6">
                    <div className="form-input ">
                        <input type="text" value={email} readOnly disabled required />
                        <label className="lh-1 text-16 text-light-1">Email</label>
                    </div>
                </div>

                <div className="col-12">
                    <div className="form-input ">
                        <input type="text" required value={address1+","+address2} readOnly disabled  />
                        <label className="lh-1 text-16 text-light-1">
                            Address 
                        </label>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-input ">
                        <input type="text" required value={state} readOnly disabled />
                        <label className="lh-1 text-16 text-light-1">
                            State
                        </label>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-input ">
                        <input type="text" required value={city} readOnly disabled />
                        <label className="lh-1 text-16 text-light-1">
                            City
                        </label>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-input ">
                        <input type="text" required value={zipcode} readOnly disabled />
                        <label className="lh-1 text-16 text-light-1">
                            ZIP code/Postal code
                        </label>
                    </div>
                </div>

                <div className="col-12">
                    <div className="form-input ">
                        <input type="text" required value={country} readOnly disabled />
                        <label className="lh-1 text-16 text-light-1">
                            Country
                        </label>
                    </div>
                </div>
            </div>

            <button type="submit" disabled={loading} className="pay-button">
                {loading ? 'Processing...' : 'Pay'}
            </button> */}



        </form>
    );
};

export default CheckoutForm;