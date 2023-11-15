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
import Router from "next/router";

import { Hourglass } from "react-loader-spinner";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



const index = () => {
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  
  const router = useRouter();
  const location = router.query.location ?? '';
  const type = router.query.type ?? '';

  const handleDelete = () => {

  }

  const generateQueryString = (afilters) => {
    console.log(afilters);
    const queryString = Object.entries(afilters)
      .map((values) => {
        console.log(values);
        return values[1].map((value) => `${values[0]}=${value}`).join('&')
      }).join('&');
      console.log(queryString);
    const query =  queryString.length > 0 ? `?${queryString}` : '';
    Router.push("/tour/tour-list-v1/"+query);
  };


  const [filters, setFilters] = useState({
    location: [],
    type: [],
  });

  const [appliedFilters, setAppliedFilters] = useState([]);

  const handleFilterChange = (filterName, value) => {
    setFilters({
      ...filters,
      [filterName]: value,
    });

    if (!filters[filterName]) {
      setAppliedFilters([...appliedFilters, filters]);
    } else {
      const updatedFilters = appliedFilters.filter((filter) => filter !== filterName);
      setAppliedFilters(updatedFilters);
    }

  };

  const applyFilters = (name, value) => {
    console.log(value);
    handleFilterChange(name, value);
    generateQueryString({...filters, [name]: value});
  }

  const removeFilter = (name, value) => {
    console.log(filters);
        const places = filters[name].filter((place) => (place).toLowerCase() !== value.toLowerCase());
        console.log(places);
        applyFilters(name, places);
  }
  
  const clearAllFilters = () => {
    setFilters({
      location: [],
      type: [],
    });
    setAppliedFilters([]);
  };

  useEffect(() => {
    if(location){
      if(Array.isArray(location)){
        const lts = location.map(v => v.toLowerCase());
        handleFilterChange('location', lts);
      }else{
        handleFilterChange('location', [location.toLowerCase()]);
      }
    }

    if(type){
      if(Array.isArray(type)){
        handleFilterChange('type', type);
      }else{
        handleFilterChange('type', [type]);
      }
    }
  }, [location, type])

  useEffect(() => {
    if(filters){
      setLoader(true);
      let toursData = [];

      console.log(filters);

      if(filters["type"]){
        toursData = tours?.filter((t) => filters["type"].includes((t.type).toLowerCase())); 
      }

      if(filters["location"]){
        toursData = tours?.filter((t) => filters["location"].includes((t.location).toLowerCase())); 
      }

      console.log(toursData);

      setFilteredTours(toursData);

        setTimeout(() => {
          setLoader(false);
        window.scrollTo({ top: 100, behavior: "smooth" });

        }, 1000);
    }
  }, [filters])



  useEffect(() => {
    setLoader(true);
    TourDataService.getAll()
      .then(response => {
        let toursData = response.data;
        // console.log(toursData);
        // const tdata = [];
        
       setTours(toursData.data);
        console.log(toursData.data);
        setLoader(false);
      })
      .catch(e => {
        console.log(e);
        setLoader(false);
      })
  }, [])

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
                <Sidebar filters={filters} handleFilterChange={applyFilters}/>
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
              <TopHeaderFilter count={filteredTours?.data?.length ?? 0} />
              <div className="mt-30"></div>
              {/* End mt--30 */}
              <div className="row y-gap-30">
              

                <div>
        <div>
          Applied Filters:
          <div className='d-flex'>
          {filters['location'].map((value, index) => {
            return (<>
               {index ===  0 && <div><strong style={{marginLeft: '10px'}}>Location</strong></div>}
               {value && <Stack direction="row" spacing={1} style={{marginLeft: '10px'}}>
                  <Chip label={(value.charAt(0)).toUpperCase() + value.slice(1)}  variant="outlined" onDelete={() => removeFilter('location', value)} />
                </Stack>}
              <br/>
              </>);
            })}
          </div>

          <div className='mt-20 d-flex'>
          {filters['type'].map((value, index) => {
            return (<>
               {index ===  0 && <div><strong style={{marginLeft: '10px'}}>{'Type'}</strong></div>}
               {value && <Stack direction="row" spacing={1} style={{marginLeft: '10px'}}>
                  <Chip label={(value.charAt(0)).toUpperCase() + value.slice(1)}  variant="outlined" onDelete={() => removeFilter('type', value)} />
                </Stack>}
              <br/>
              </>);
            })}
          </div>
        </div>
        <button onClick={clearAllFilters}>Clear All Filters</button>
      </div>
                {filteredTours && filteredTours.length > 0 && <TourProperties toursData={filteredTours} />}
                {(!filteredTours || filteredTours.length == 0) && <Noresults />}
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

      
<Dialog
        open={loader}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"

      >
        <DialogTitle id="alert-dialog-title">
          
        </DialogTitle>
        <DialogContent style={{ width: '100%', textAlign:'center' }}>
        <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      />
        </DialogContent>
      </Dialog>

    </>
  );
};

export default index;
