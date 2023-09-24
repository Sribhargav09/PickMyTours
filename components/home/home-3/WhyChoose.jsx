import Image from "next/image";
import { useEffect, useState } from "react";
import locationService from "../../../services/location.service";


const WhyChoose = () => {

  const expertContent = [
    {
      id: 1,
      icon: "/img/featureIcons/1/1.svg",
      title: "Best Price Guarantee",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      id: 2,
      icon: "/img/featureIcons/1/2.svg",
      title: "Easy & Quick Booking",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      id: 3,
      icon: "/img/featureIcons/1/3.svg",
      title: "Customer Care 24/7",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
  ];


  const [locations, setLocations] = useState([]);

  useEffect(() => {
    locationService.getAll()
      .then(response => {
        setLocations(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, [])
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/3/1.svg",
      title: "Best Price Guarantee",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnimation: "100",
    },
    {
      id: 2,
      icon: "/img/featureIcons/3/2.svg",
      title: "Easy & Quick Booking",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnimation: "200",
    },
    {
      id: 3,
      icon: "/img/featureIcons/3/3.svg",
      title: "Customer Care 24/7",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnimation: "300",
    },
  ];
  return (
    <>
      <div className="row why-us">
        <div class="column">
          <img src="/img/banners/tour.png" />
        </div>
        <div class="column pt-40 pl-40 pr-40">
          <h2>Why Choose Us?</h2>
          <p class="text pt-20">At PickMyTour, we understand that travel is not just about reaching a destination; it's about the journey itself. 
          That's why we are passionate about curating unforgettable experiences that leave a lasting imprint on your heart and soul. 
          Our passion is to transform your wanderlust into meticulously planned journeys that leave you with memories to treasure. 
          With our team of seasoned travel experts, we offer a level of expertise and personalization that sets us apart. 
          We understand that your travels are as unique as you are, and that's why we go the extra mile to curate experiences that match your interests, whether it's exploring ancient ruins, savoring exotic cuisine, or simply unwinding on a pristine beach. 
          Our commitment to safety, competitive pricing, and round-the-clock support ensure that your journey is not just extraordinary but hassle-free. 
          Choose PickMyTour and embark on a voyage where your dreams are our destination.</p>
          <p class="text">We first gained recognition by <b>StartUp India</b> back in 2019, followed by being awarded the <b>Travelers choice award</b> in 2020 by <b>Trip Advisor.</b> In 2021, we were awarded the <b>Best Enterprise in Travel and Tourism 2021 by MSME business India awards.</b></p>
          <p class="text">All the milestones that we have achieved are because of the constant support and positive feedback of our travelers.</p>
        </div>

      </div>
    </>
  );
};

export default WhyChoose;
