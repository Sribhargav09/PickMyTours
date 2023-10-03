import Link from "next/link";
import { useEffect, useState } from "react";
import locationService from "../../services/location.service";
import Slider from "react-slick";



const TopDestinations = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  
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
  
  return (
    <>
    <Slider {...settings} arrows={false}>
    {locations && locations.data && locations.data.map((item) => (
        <div
          className="px-20 col-xl col-md-4 col-sm-6"
          key={item.id}
        >
          <Link
            href={`/tour/tour-list-v1?type=${item.name}`}
            className="tourTypeCard -type-1 d-block rounded-4 bg-blue-1-05 rounded-4"
          >
            <div className="tourTypeCard__content text-center pt-60 pb-24 px-30">
              <img width="200" height="200" src={item.photo} className={`text-60 sm:text-40 text-blue-1`} />
              <h4 className="text-dark-1 text-16 fw-500 mt-50 md:mt-30">
                {item.name}
              </h4>
              <p className="text-light-1 lh-14 text-14 mt-5">
                {'10'} properties
              </p>
            </div>
          </Link>
        </div>
      ))}
    </Slider>

    </>
  );
};

export default TopDestinations;
