import MainFilterSearchBox from "./MainFilterSearchBox";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";

import { useEffect, useState } from "react";
import TourDataService from "../../services/tour.service";


const index = () => {
  const { tabs, currentTab } = useSelector((state) => state.hero) || {};

  const [tours, setTours] = useState([]);

  useEffect(() => {
    TourDataService.getAll()
      .then(response => {
        setTours(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, [])

  return (
    <section className="masthead -type-3 z-5">
      <div className="masthead__bg">
      {tours && tours.data && <img alt="image" src={tours.data[tours.data.length-1].gallery[0]} className="js-lazy" />}

        {/* //{tours && tours?.data?.map((tour) => {
          //return tour.gallery.slice(0, 0)?.map((photo) => {
            //return {photo}
            return <img alt="image" src={tour.gallery[0]} className="js-lazy" />

            // <img alt="image" src={currentTab == 'Tours' ? photo : `/img/banners/${currentTab == 'Holyday Rentals' ? 'rental' : currentTab.toLowerCase()}.png`} className="js-lazy" />
          //})
        //}
        )} */}
      </div>
      <div className="container">
        <div className="row justify-center">
          <div className="col-auto">
            <div className="text-center">
               {tours && tours?.data?.slice(0,1).map((tour, index) => { 
                
               return <div style={{cursor:'pointer'}} onClick={() => Router.push(`tour/tour-single/${tour._id}`)}>
                
                <h1
                  className="text-60 lg:text-40 md:text-30 text-white"
                  data-aos="fade-up"
                >
                  {tour.name}
                </h1>

                  <p
                    className="text-white mt-6 md:mt-10"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                   {tour.price} - {tour.location}
                  </p></div>
               } 
               )}


            </div>
            {/* End hero title */}





            <div
              className="masthead__tabs"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <MainFilterSearchBox />
            </div>
            {/* End tab-filter */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
