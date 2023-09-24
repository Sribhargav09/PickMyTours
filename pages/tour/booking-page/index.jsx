import CallToActions from "../../../components/common/CallToActions";
import Seo from "../../../components/common/Seo";
import Header11 from "../../../components/header/header-11";
import DefaultFooter from "../../../components/footer/default";
import StepperBooking from "../../../components/booking-page/stepper-booking";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TourDataService from "../../../services/tour.service";

import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51NkBsQSJdkMUOQFiKU8NA8n5rUvwJekjW62PymxbAQfs3F1V5lJhFNcs03KAh9kRnS8kt03HUJlNA6prPMTVzhGj00CMNxdMV4');

const index = () => {
  const router = useRouter();
  
  const id = router.query.id;
  const [tour, setTour] = useState({});

  const options = {
    // passing the client secret obtained from the server
    clientSecret: 'sk_test_51NkBsQSJdkMUOQFiLq89s92z6GMWIeHywIsOn7oalmVErp3gkqCbM0QazKzndKDUcZVjszZWuqoGUEE8dFwXWLmM00NcbzEZnO',
  };


  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else {
      TourDataService.get(id)
        .then(response => {


          setTour(response.data.data);
          //       setTour(toursData.find((item) => item.id == id));

          console.log(tour);
        })
        .catch(e => {
          console.log(e);
        });
    }
  
    return () => { };
  }, [id]);


  return (
    // <Elements stripe={stripePromise} options={options}>
    //   <CheckoutForm />
    // </Elements>
    <>
      <Seo pageTitle="Tour Booking Page" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header11 />
      {/* End Header 1 */}

      <section className="pt-40 layout-pb-md">
        <div className="container">
          <StepperBooking tour={tour} />
        </div>
        {/* End container */}
      </section>
      {/* End stepper */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default index;
