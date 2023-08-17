import Image from "next/image";
import { useEffect, useState } from "react";
import locationService from "../../../services/location.service";


const WhyChoose = () => {

  
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
      {locations && locations.data && locations.data.map((item) => (
        <div
          className="col-lg-3 col-sm-6"
          key={item._id}
          data-aos="fade"
          data-aos-delay={100}
        >
          <div className="featureIcon -type-1 ">
            <div className="d-flex justify-center">
              <Image
                width={70}
                height={70}
                src={item.photo}
                alt="image"
                className="js-lazy"
              />
            </div>
            <div className="text-center mt-30">
              <h4 className="text-18 fw-500">{item.name}</h4>
              <p className="text-15 mt-10">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;
