import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PricingSummary from "./sidebar/PricingSummary";
import PaymentSchedule from "./sidebar/PaymentSchedule";
import PromoCode from "./sidebar/PromoCode";
import RatingInfo from "./RatingInfo";

import stripeService from "../../services/stripe.service";
import OrderSubmittedInfo from "./OrderSubmittedInfo";


const PaymentInfo = ({ tour, firstName, lastName, email,  phone, customerId, address }) => {
  console.log(customerId)
  const [itemsTabs, setItemsTabs] = useState(1);
  const cardTabs = [
    { id: 1, name: "Credit/Debit Card" },
    // { id: 2, name: "Digital Payment" },
  ];

  const [showLoader, setShowLoader] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvv, setCvv] = useState('');

  const [errors, setErrors] = useState({ name: '', cardNumber: '', expMonth: '', expYear: '', cvv: '' })

  const addPayment = () => {
    let haveError = false;
    if (name.length == 0) {
      setErrors({ ...errors, name: 'Card holder name can not be empty' });
      haveError = true;
    } else if (cardNumber.length == 0) {
      setErrors({ ...errors, cardNumber: 'Card Number can not be empty' });
      haveError = true;
    } else if (expMonth.length == 0) {
      setErrors({ ...errors, expMonth: 'Expiry Month is required' });
      haveError = true;
    } else if (expYear.length == 0) {
      setErrors({ ...errors, expYear: 'Expiry Year is required' });
      haveError = true;
    } else if (cvv.length == 0) {
      setErrors({ ...errors, cvv: 'CVV is required' });
      haveError = true;
    }

    if (!haveError) {
      setShowLoader(true);
      // stripeService.addPaymentMethod({"customerId":customerId,"cardNumber":cardNumber,"expMonth":expMonth,"expYear":expYear,"name":name,"address":address})
      //   .then(response => {

      //     console.log(response);

      //   })
      //   .catch(e => {
      //     console.log(e);
      //   })
      // }

      stripeService.createPayment({ "customerId": customerId, "paymentMethod": 'pm_card_visa', "amount": tour.price })
        .then(response => {

          confirmPayment(response.data.id, 'pm_card_visa');

        })
        .catch(e => {
          console.log(e);
        })
    }
  }

  const confirmPayment = (paymentIntent, paymentMethod) => {
    stripeService.confirmPayment({ paymentIntent, paymentMethod })
      .then(response => {

        console.log(response);
        setShowLoader(false);
        setOrderPlaced(true);
      })
      .catch(e => {
        console.log(e);
      })
  }

  return (
    <>
     {showLoader && <div className="spinner-container">
      <div className="loading-spinner">
      </div>
    </div>}
      {!orderPlaced && <><div className="col-xl-7 col-lg-8">
        <RatingInfo />
        <div className="mt-40">
          <h3 className="text-22 fw-500 mb-20">How do you want to pay?</h3>
          <Tabs>
            <TabList className="row y-gap-20 x-gap-20">
              {cardTabs.map((item) => (
                <Tab
                  className="col-auto"
                  onClick={() => setItemsTabs(item.id)}
                  key={item.id}
                >
                  <button
                    className={
                      itemsTabs === item.id
                        ? "button -dark-1 bg-blue-1 text-white px-20 py-15"
                        : "button -blue-1 bg-light-2 px-20 py-15"
                    }
                  >
                    {item.name}
                  </button>
                </Tab>
              ))}
            </TabList>
            {/* End tablist */}

            <TabPanel>
              <div className="row x-gap-20 y-gap-20 pt-20">
                {/* <div className="col-12">
                  <div className="form-input ">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">
                      Select payment method *
                    </label>
                  </div>
                </div> */}
                {/* End col */}

                <div className="col-md-6">
                  <div className="form-input ">
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} required />
                    <label className="lh-1 text-16 text-light-1">
                      Card holder name *
                    </label>
                    <span class="error">{errors && errors.name}</span>
                  </div>

                  <div className="form-input mt-20">
                    <input type="text" value={cardNumber} onChange={(event) => setCardNumber(event.target.value)} required />
                    <label className="lh-1 text-16 text-light-1">
                      Credit/debit card number *
                    </label>
                    <span class="error">{errors && errors.cardNumber}</span>
                  </div>

                  <div className="row x-gap-20 y-gap-20 pt-20">
                    <div className="col-md-6">
                      <div className="form-input ">
                        <input type="text" value={expMonth} onChange={(event) => setExpMonth(event.target.value)} required />
                        <label className="lh-1 text-16 text-light-1">
                          Expiry Month *
                        </label>
                        <span class="error">{errors && errors.expMonth}</span>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-input ">
                        <input type="text" value={expYear} onChange={(event) => setExpYear(event.target.value)} required />
                        <label className="lh-1 text-16 text-light-1">
                          Expiry Year *
                        </label>
                        <span class="error">{errors && errors.expYear}</span>
                      </div>
                    </div>
                  </div>

                  <div className="row x-gap-20 y-gap-20 pt-20">
                    <div className="col-md-6">
                      <div className="form-input ">
                        <input type="text" value={cvv} onChange={(event) => setCvv(event.target.value)} required />
                        <label className="lh-1 text-16 text-light-1">
                          CVC/CVV *
                        </label>
                        <span class="error">{errors && errors.cvv}</span>
                      </div>
                    </div>
                  </div>
                  {/* End .row */}
                </div>
                {/* End col */}
                <div className="col-md-6">
                  <img
                    src="/img/booking-pages/card.png"
                    alt="image"
                    className="h-full"
                  />
                </div>
                {/* End col */}
              </div>
              {/* End .row */}
            </TabPanel>
            {/* credit debit info */}

            <TabPanel>
              <div className="mt-60 md:mt-32">
                <div className="mt-20">
                  <div className="form-input ">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">
                      Select payment method *
                    </label>
                  </div>
                </div>
                <div className="mt-20">
                  <ul className="list-disc y-gap-4 text-15 text-light-1">
                    <li>
                      You have chosen to pay by PayPal. You will be forwarded to
                      the PayPal website to proceed with this transaction.
                    </li>
                    <li>The total amount you will be charged is: $2,338.01</li>
                  </ul>
                </div>
              </div>
              {/* End mt60 */}
            </TabPanel>
            {/* End digital payment */}
          </Tabs>
        </div>
        {/* End mt-40 */}

        <div className="w-full h-1 bg-border mt-40 mb-40" />

        <div className="row y-gap-20 items-center justify-between">
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" name="name" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-14 lh-10 text-light-1 ml-10">
                Get access to members-only deals, just like the millions of
                other email subscribers
              </div>
            </div>
          </div>
          {/* End col-auto */}
        </div>
        {/* End terms and conditons */}
      </div>
        {/* End payment details */}

        <div className="col-xl-5 col-lg-4">
          <div className="booking-sidebar">
            <PricingSummary tour={tour}/>
            {/* <PaymentSchedule />
            <PromoCode /> */}
          </div>
        </div>

        <div className="col-12">
          <div className="row y-gap-20 items-center justify-between">
            <div className="col-auto">
              <button
                className="button h-60 px-24 -dark-1 bg-blue-1 text-white"
                // disabled={currentStep === steps.length - 1}
                onClick={addPayment}
              >
                Next <div className="icon-arrow-top-right ml-15" />
              </button>
            </div>

          </div>
        </div></>}
      {/* payment sidebar info */}

      {orderPlaced && <OrderSubmittedInfo firstName={firstName} lastName={lastName} email={email} phone={phone} address={address} amount={tour.price} />}
    </>
  );
};

export default PaymentInfo;
