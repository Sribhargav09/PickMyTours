import Link from "next/link";
import { useEffect, useState } from "react";
import locationService from "../../services/location.service";


const TopDestinations = () => {
  
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
      {locations && locations.data && locations.data.slice(0, 7).map((item) => (
        <div
          className='col-3'
          key={item._id}
          data-aos="fade"
          data-aos-delay={100}
        >
          <Link
            href="/tour/tour-list-v3"
            className="citiesCard -type-3 d-block h-full rounded-4 "
          >
            <div className="citiesCard__image ratio ratio-1:1">
              <img className="col-12 js-lazy" src={item.photo} alt="image" />
            </div>
            <div className="citiesCard__content px-30 py-30">
              <h4 className="text-26 fw-600 text-white text-capitalize">
                {item.name}
              </h4>
              <div className="text-15 text-white">
                {10} properties
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default TopDestinations;
