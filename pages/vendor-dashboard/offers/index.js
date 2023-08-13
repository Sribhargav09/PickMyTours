import Seo from "../../../components/common/Seo";
import Sidebar from "../common/Sidebar";
import Header from "../../../components/header/dashboard-header";
import Footer from "../common/Footer";
import BookingTable from "./components/ToursTable";
import Link from "next/link";

import ToursTable from "./components/ToursTable";
import { useState, useEffect } from "react";
import TourDataService from "../../../services/tour.service";

const index = () => {
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
    <>
      <Seo pageTitle="Vendor Hotels" />
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
              <div className="col-auto">
                <h1 className="text-30 lh-14 fw-600">All Offers</h1>
                <div className="text-15 text-light-1">
                  All offers infomration here.
                </div>
              </div>
              {/* End .col-auto */}

              <div className="col-auto">
                <Link
                  href="/vendor-dashboard/add-offer"
                  className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                >
                  Add Offer <div className="icon-arrow-top-right ml-15"></div>
                </Link>
              </div>
            </div>
            {/* End .row */}

            <div className="py-30 px-30 rounded-4 bg-white shadow-3">
              {/* table here */}
              {/* <ToursTable toursData={tours.data} /> */}
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
