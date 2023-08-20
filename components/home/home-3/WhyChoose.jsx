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
          <h2>WHY PickMyTour?</h2>
          <p class="text pt-20">Travel communities have been flourishing for a long time in our country and with so many options for travelers to choose from, a question that every traveler asks themselves is why they should put their faith in us. <b>As a travel community</b> of more than <b>50,000+ members,</b>
            PickMyTour has completed more than <b>5000+ trips</b> successfully. Out of which <b>40+ trips</b> have been <b>all-girls trips led by female trip captains.</b></p>
          <p class="text">We first gained recognition by <b>StartUp India</b> back in 2019, followed by being awarded the <b>Travelers choice award</b> in 2020 by <b>Trip Advisor.</b> In 2021, we were awarded the <b>Best Enterprise in Travel and Tourism 2021 by MSME business India awards.</b></p>
          <p class="text">All the milestones that we have achieved are because of the constant support and positive feedback of our travelers.</p>
        </div>

      </div>
    </>
  );
};

export default WhyChoose;
