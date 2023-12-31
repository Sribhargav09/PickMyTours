import Seo from "../../../components/common/Seo";
import Sidebar from "../common/Sidebar";
import Header from "../../../components/header";
import Footer from "../common/Footer";
import BookingTable from "./components/BookingTable";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import { useSelector, useDispatch } from 'react-redux'
import { setUser, setToken } from '../../../app/features/user/userSlice';


const index = () => {
 
  const [loginUser, setLoginUser] = useState(null);
  const [userToken, setUserToken] = useState("");

  //const loginUser = useSelector((state) => state.user.loginUser);
  //const userToken = useSelector((state) => state.user.token);

  useEffect(() => {
    setLoginUser(JSON.parse(sessionStorage.getItem("loginUser")));
    setUserToken(sessionStorage.getItem("token"));
    // if(!userToken){
    //   Router.push("/others-pages/login");
    // }
  }, []);

  const dispatch = useDispatch()

  const router = useRouter();

  // useEffect(() => {
  //   console.log("hii123");
  //   if(!userToken){
  //     Router.push("/others-pages/login");
  //   }
  // })

  return (
    <>
      <Seo pageTitle="Booking History" />
      {/* End Page Title */}

      <div className="header-margin"></div>

      <Header />
      {/* End dashboard-header */}

      <div className="dashboard">
        <div className="dashboard__sidebar bg-white scroll-bar-1">
          <Sidebar />
          {/* End sidebar */}
        </div>
        {/* End dashboard__sidebar */}

        <div className="dashboard__main">
          <div className="dashboard__content bg-light-2">
            <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
              <div className="col-12">
                <h1 className="text-30 lh-14 fw-600">Booking History</h1>
                <div className="text-15 text-light-1">
                  All your Tours Informaiton
                </div>
              </div>
              {/* End .col-12 */}
            </div>
            {/* End .row */}

            <div className="py-30 px-30 rounded-4 bg-white shadow-3">
              <BookingTable />
              {/* End tabs */}
            </div>

            <Footer />
          </div>
          {/* End .dashboard__content */}
        </div>
        {/* End dashbaord content */}
      </div>
      {/* End dashbaord content */}
    </>
  );
};

export default index;
