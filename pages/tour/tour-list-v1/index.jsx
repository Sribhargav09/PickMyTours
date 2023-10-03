import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import CallToActions from "../../../components/common/CallToActions";
import Seo from "../../../components/common/Seo";
import DefaultFooter from "../../../components/footer/default";
import TopHeaderFilter from "../../../components/tour-list/tour-list-v1/TopHeaderFilter";
import TourProperties from "../../../components/tour-list/tour-list-v1/TourProperties";
// import Pagination from "../../../components/tour-list/common/Pagination";
import Sidebar from "../../../components/tour-list/tour-list-v1/Sidebar";
import { useState, useEffect } from "react";
import TourDataService from "../../../services/tour.service";
import { useSearchParams } from "react-router-dom";
import { useRouter } from "next/router";
import MainFilterSearchBox from "../../../components/hero/MainFilterSearchBox";
import Noresults from "../../../components/tour-list/tour-list-v1/NoResults";
import Header from '../../../components/header';
import { useDispatch } from 'react-redux';
import { setLoader } from '../../../app/features/hero/findPlaceSlice';


const index = () => {
  const [tours, setTours] = useState([]);
  const dispatch = useDispatch();
  
  const router = useRouter();
  console.log(router.query);
  const location = router.query.location ?? '';
  const type = router.query.type ?? '';

  const handleDelete = () => {

  }

  useEffect(() => {
    dispatch(setLoader(true));
    TourDataService.getAll()
      .then(response => {
        let toursData = response.data;
        // console.log(toursData);
        // const tdata = [];
        if(type){
          toursData = toursData.data?.filter((t) => (t.type).toLowerCase() === type.toLowerCase()); 
        }

        if(location){
          toursData = toursData.data?.filter((t) => t.location.toLowerCase() === location.toLowerCase()); 
        }
       setTours(toursData);
        console.log(toursData);
        dispatch(setLoader(false));
      })
      .catch(e => {
        console.log(e);
        dispatch(setLoader(false));
      })
  }, [location, type])

  return (
    <>
      <Seo pageTitle="Tour List v1" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header />
      {/* End Header 1 */}

      <section className="pt-40 pb-40 bg-light-1">
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
      {/* Top SearchBanner */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-3">
              <aside className="sidebar y-gap-40 xl:d-none">
                <Sidebar />
              </aside>
              {/* End sidebar for desktop */}

              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="listingSidebar"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasLabel">
                    Filter Tours
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                {/* End offcanvas header */}

                <div className="offcanvas-body">
                  <aside className="sidebar y-gap-40  xl:d-block">
                    <Sidebar />
                  </aside>
                </div>
                {/* End offcanvas body */}
              </div>
              {/* End mobile menu sidebar */}
            </div>
            {/* End col */}

            <div className="col-xl-9 ">
              <TopHeaderFilter count={tours?.data?.length ?? 0} />
              <div className="mt-30"></div>
              {/* End mt--30 */}
              <div className="row y-gap-30">
              {/* <Stack direction="row" spacing={1}>
                  <Chip label="Deletable" onDelete={handleDelete} />
                  <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
                </Stack> */}
                {tours && tours.length > 0 && <TourProperties toursData={tours} />}
                {(!tours || tours.length == 0) && <Noresults />}
              </div>
              {/* End .row */}
              {/* <Pagination /> */}
            </div>
            {/* End .col for right content */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End layout for listing sidebar and content */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default index;
