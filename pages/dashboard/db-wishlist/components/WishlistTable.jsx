import { useState, useEffect } from "react";
import Pagination from "../../common/Pagination";
import Properties from "./Properties";
import wishlistService from "../../../../services/wishlist.service";
import tourService from "../../../../services/tour.service";
import { useSelector, useDispatch } from "react-redux";



const WishlistTable = () => {
  const [activeTab, setActiveTab] = useState(0);

  
  const selectedCurrency = useSelector((state) => state.currency.selectedCurrency);
  const [currency, setCurrency] = useState(selectedCurrency);

  useEffect(() => {
    setCurrency(selectedCurrency);
  }, [selectedCurrency])


  
  const [bookingTours, setBookingTours] = useState([]);
  const [bookings, setBookings] = useState([]);


  
  const [loginUser, setLoginUser] = useState(null);
  const [userToken, setUserToken] = useState("");

  //const loginUser = useSelector((state) => state.user.loginUser);
  //const userToken = useSelector((state) => state.user.token);

  useEffect(() => {
    setLoginUser(JSON.parse(sessionStorage.getItem("loginUser")));
    setUserToken(sessionStorage.getItem("token"));
  }, []);

  useEffect(() => {
    if(bookings){
    tourService.getAll()
      .then(response => {
       const bts = [];
       response.data.data.forEach((t) => {
          bookings.map((bt) => { 
            if(bt.tourId === t._id){
              t.wishListId = bt._id;
              bts.push(t);
            }
          });
        });
        console.log(bts)
        setBookingTours(bts);
      })
      .catch(e => {
        console.log(e);
      });
    }
  }, [bookings])

  useEffect(() => {
    if(loginUser){
      
      wishlistService.getByUserId(loginUser._id)
      .then(response => {
        console.log(response.data.data)
        setBookings(response.data.data);
        
      })
      .catch(e => {
        console.log(e);
      });
    }
  }, [loginUser])

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabItems = [
    "Tour",
    "Hotel",
    "Activity",
    "Holiday Rental",
    "Cars",
    "Cruiser",
  ];

  return (
    <>
      <div className="tabs -underline-2 js-tabs">
        <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls">
          {tabItems.map((item, index) => (
            <div className="col-auto" key={index}>
              <button
                className={`tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button ${
                  activeTab === index ? "is-tab-el-active" : ""
                }`}
                onClick={() => handleTabClick(index)}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
        {/* End tabs */}

        <div className="tabs__content pt-30 js-tabs-content">
          <div className="tabs__pane -tab-item-1 is-tab-el-active">
            <div className="row y-gap-20">
              <Properties tours={bookingTours}/>
            </div>
          </div>
        </div>
      </div>
      {/* <Pagination /> */}
    </>
  );
};

export default WishlistTable;
