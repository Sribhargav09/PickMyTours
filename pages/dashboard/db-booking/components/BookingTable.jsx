import { useState, useEffect } from "react";
import Pagination from "../../common/Pagination";
import ActionsButton from "../components/ActionsButton";
import orderService from "../../../../services/order.service";
import tourService from "../../../../services/tour.service";
import { useSelector, useDispatch } from "react-redux";


const BookingTable = () => {
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

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    if(bookings){
    tourService.getAll()
      .then(response => {
       const bts = [];
       response.data.data.forEach((t) => {
            const bnks = bookings.filter((bt) => bt.tourId === t._id);
            if(bnks && bnks.length > 0){
              bts.push(t);
            }
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
    orderService.getBookings(loginUser._id)
      .then(response => {
        console.log(response.data.data)
        setBookings(response.data.data);
        
      })
      .catch(e => {
        console.log(e);
      });
    }
  }, [loginUser])

  const tabItems = [
    "All Bookings",
    // "Completed",
    // "Processing",
    // "Confirmed",
    // "Cancelled",
    // "Paid",
    // "Unpaid",
    // "Partial Payment",
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
            <div className="overflow-scroll scroll-bar-1">
              <table className="table-3 -border-bottom col-12">
                <thead className="bg-light-2">
                  <tr>
                    <th>Type</th>
                    <th>Title</th>
                    <th>Order Date</th>
                    <th>Execution Time</th>
                    <th>Total</th>
                    <th>Paid</th>
                    <th>Remain</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {bookingTours && bookingTours.map((bt) => {
                  return <tr>
                    <td>{bt.type}</td>
                    <td>{bt.name}</td>
                    <td>** 04/04/2022</td>
                    <td className="lh-16">
                      Check in : 05/14/2022
                      <br />
                      Check out : 05/29/2022
                    </td>
                    <td className="fw-500">{currency.symbol}{(bt?.price * currency.rate).toFixed(2)}
</td>
                    <td>Yes</td>
                    <td>$35</td>
                    <td>
                      <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">
                        Pending
                      </span>
                    </td>
                    <td>
                      <ActionsButton />
                    </td>
                  </tr>
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default BookingTable;
