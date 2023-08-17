import MainFilterSearchBox from "./MainFilterSearchBox";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";

import { useEffect, useState, useRef } from "react";
import TourDataService from "../../services/tour.service";


const index = () => {
  const { tabs, currentTab } = useSelector((state) => state.hero) || {};
  const delay = 3000;

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

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === 2 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);


  return (
    <section className="masthead -type-3 z-5">
      <div className="masthead__bg" style={{background: 'none'}}>

        {/* {tours && tours.data && tours.data.length > 0 && tours.data[tours.data.length-1] && tours.data[tours.data.length-1]?.gallery && <img alt="image" src={tours.data[tours.data.length-1]['gallery'][0] ?? ''} className="js-lazy" />} */}
        <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {tours && tours?.data?.slice(0, 3).map((tour, index) => {
              if (tour && tour.gallery) {
                return <div
                  onClick={() => Router.push(`tour/tour-single/${tour._id}`)}
                  className="slide"
                  key={index}
                  style={{
                    backgroundImage: `url(${tour.gallery[0]})`,
                    backgroundRepeat: "no-repeat",
                    cursor: 'pointer',
                    backgroundSize: "cover", backgroundRepeat: 'no',
                    backgroundColor: 'transparent',
                  }}>
                  <div className="row justify-center mt-50" >
                    <div className="col-auto">
                      <div className="text-center">
                        <h2
                          style={{ color: 'white' }}
                          className="text-50 mt-80 lg:text-40 md:text-30 text-white"
                          data-aos="fade-up"
                        >
                          {tour.name}
                        </h2>

                        <p
                          className="text-white mt-50 md:mt-10"
                        >
                          {tour.price} - {tour.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                //  <img alt="image" src={currentTab == 'Tours' ? photo : `/img/banners/${currentTab == 'Holyday Rentals' ? 'rental' : currentTab.toLowerCase()}.png`} className="js-lazy" />

              }
            }
            )}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-center">
          <div className="col-auto">
            <div className="text-center">

            </div>

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
