import MainFilterSearchBox from "./MainFilterSearchBox";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";

import { useEffect, useState, useRef } from "react";
import TourDataService from "../../services/tour.service";


const index = () => {
  const { tabs, currentTab } = useSelector((state) => state.hero) || {};
  const delay = 3000;

  const [tours, setTours] = useState([]);
  const selectedCurrency = useSelector((state) => state.currency.selectedCurrency);
  const [currency, setCurrency] = useState(selectedCurrency);

  useEffect(() => {
    setCurrency(selectedCurrency);
  }, [selectedCurrency])

  useEffect(() => {
    TourDataService.getAll()
      .then(response => {
        setTours(response.data.data.slice(0, 3));
        console.log(response.data.data.slice(0, 3));
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
          (prevIndex + 1) === tours.length  ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const gotoTourPage = () => {
    const id = tours[index]._id;
    Router.push(`tour/tour-single/${id}`)
  }


  return (
<>
    <section className="descktopScreen masthead -type-3 z-5" style={{height: '600px'}}>
      <div className="masthead__bg" style={{ background: 'none', cursor: 'pointer', height: '200px' }}>
        
        {/* {tours && tours.data && tours.data.length > 0 && tours.data[tours.data.length-1] && tours.data[tours.data.length-1]?.gallery && <img alt="image" src={tours.data[tours.data.length-1]['gallery'][0] ?? ''} className="js-lazy" />} */}
        <div className="slideshow" >
          <div
            className="slideshowSlider"
            onClick={gotoTourPage}
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {tours && tours.map((tour, index) => {
              if (tour && tour.gallery) {
                // return <div
                //   className="slide"
                //   key={index}
                //   style={{
                //     backgroundImage: `url(${tour.gallery[0]})`,
                //     backgroundRepeat: "no-repeat",
                //     cursor: 'pointer',
                //     backgroundSize: "cover", backgroundRepeat: 'no',
                //     backgroundColor: 'transparent',
                //   }}>
                //   <div className="row justify-center mt-50" >
                //     <div className="col-auto">
                //       <div className="text-center">
                       
                //       </div>
                //     </div>
                //   </div>
                // </div>

                return <img alt="image" src={currentTab == 'Tour' ? `${tour.gallery[0]}` : `/img/banners/${currentTab == 'Holyday Rentals' ? 'rental' : currentTab.toLowerCase()}.png`}  className="slide js-lazy" />

              }
            }
            )}
          </div>
        </div>
        
      <div className="container" style={{position: 'absolute', cursor: 'pointer', left:'50px', top:'50px'}}>
        <div className="row justify-center">
          <div className="col-12" style={{width: '90%'}}>
            <div className="text-center"  onClick={gotoTourPage} >
                      <h2
                          style={{ color: 'white' }}
                          className="text-50 mt-80 lg:text-40 md:text-30 text-white"
                        >
                          {tours[index]?.name.substr(0, 30)} 
                        </h2>

                        <p
                          className="text-white mt-20 md:mt-10"
                        >
                          {currency.symbol}{(tours[index]?.price * currency.rate).toFixed(2)}  - {tours[index]?.location}
                        </p>
            </div>

            <div
              className="masthead__tabs"
            >
              <MainFilterSearchBox />

            </div>
            {/* End tab-filter */}
          </div>
        </div>
      </div>
      </div>
    </section>

    <section className="mobileScreen masthead -type-3 z-5 bg-light-1"  style={{
                     backgroundImage: `url(${tours[0]?.gallery[0]})`,
                     backgroundRepeat: "no-repeat",
                     cursor: 'pointer',
                     backgroundSize: "cover", backgroundRepeat: 'no',
                     backgroundColor: 'transparent',
                 }}>
    <div className="container">
      <div className="row">
        <div className="col-12">
        {/* End text-center */}
          <MainFilterSearchBox />
        </div>
        {/* End col-12 */}
      </div>
    </div>
    </section>
    </>
  );
};

export default index;
