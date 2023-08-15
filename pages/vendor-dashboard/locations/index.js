import Seo from "../../../components/common/Seo";
import Sidebar from "../common/Sidebar";
import Header from "../../../components/header/dashboard-header";
import Footer from "../common/Footer";
import Link from "next/link";

import { useState, useEffect } from "react";
import LocationDataService from "../../../services/location.service";
import LocationsTable from "./components/LocationsTable";

const index = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    LocationDataService.getAll()
      .then(response => {
       setLocations(response.data);
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
                <h1 className="text-30 lh-14 fw-600">All Locations</h1>
                <div className="text-15 text-light-1">
                  All locations infomration here.
                </div>
              </div>
              {/* End .col-auto */}

              <div className="col-auto">
                <Link
                  href="/vendor-dashboard/add-location"
                  className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                >
                  Add Location <div className="icon-arrow-top-right ml-15"></div>
                </Link>
              </div>
            </div>
            {/* End .row */}

            <div className="py-30 px-30 rounded-4 bg-white shadow-3">
              {/* table here */}
              <LocationsTable locationsData={locations.data} />
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
