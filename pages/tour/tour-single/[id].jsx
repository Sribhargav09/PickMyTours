import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ModalVideo from "react-modal-video";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import toursData from "../../../data/tours";
import Seo from "../../../components/common/Seo";
import Header11 from "../../../components/header/header-11";
import Overview from "../../../components/tour-single/Overview";
import TourSnapShot from "../../../components/tour-single/TourSnapShot";
import TopBreadCrumb from "../../../components/tour-single/TopBreadCrumb";
import SidebarRight from "../../../components/tour-single/SidebarRight";
import ReviewProgress2 from "../../../components/tour-single/guest-reviews/ReviewProgress2";
import DetailsReview2 from "../../../components/tour-single/guest-reviews/DetailsReview2";
import ReplyForm from "../../../components/tour-single/ReplyForm";
import ReplyFormReview2 from "../../../components/tour-single/ReplyFormReview2";
import CallToActions from "../../../components/common/CallToActions";
import DefaultFooter from "../../../components/footer/default";
import Tours from "../../../components/tours/Tours";
import Faq from "../../../components/faq/Faq";
import Link from "next/link";
import Itinerary from "../../../components/tour-single/itinerary";
import ImportantInfo from "../../../components/tour-single/ImportantInfo";
import Image from "next/image";
import TourDataService from "../../../services/tour.service";
import Header from "../../../components/header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Share from "../../dashboard/common/Share";



const TourSingleV1Dynamic = () => {
  const [isOpen, setOpen] = useState(false);
  const [isShare, setIsShare] = useState(false); 
  const router = useRouter();
  const [tour, setTour] = useState({});
  const [tourId, setTourId] = useState('');
  const id = router.query.id;

  const [isSticky, setIsSticky] = useState(false);
  const [currentTab, setCurrentTab] = useState('Overview');

  const handleCloseShare = () => {
    const share = isShare;
    setIsShare(!share);
  }

  const getFieldsData = (field) => {
    const fieldData = [];
    const fieldDataArray = JSON.parse(response.data.data[field]);
    fieldDataArray.forEach((h) => {
      fieldData.push(h[fieldData]);
    })
    response.data.data[field] = fieldData;

    return response;
  }

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    if (scrollPosition > 500 && scrollPosition < 1000) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else {
      TourDataService.get(id)
        .then(response => {
          setTourId(id);
          // const langs = response.data.data.languages[0].split(",");
          // langs.forEach((lang) => {
          //   console.log(JSON.parse(lang));
          // });
          console.log(response.data.data);
          const highlights = [];
          if (response.data.data.highlights) {
            const highlightsArray = JSON.parse(response.data.data.highlights);
            highlightsArray.forEach((h) => {
              highlights.push(h.highlight);
            })
          }
          response.data.data.highlights = highlights;

          const includes = [];
          if (response.data.data.includes) {

            const includesArray = JSON.parse(response.data.data.includes);
            console.log(includesArray);
            includesArray.forEach((h) => {
              includes.push(h.include);
            })
          }
          response.data.data.includes = includes;

          const notIncludes = [];

          if (response.data.data.notIncludes) {

            const notIncludesArray = JSON.parse(response.data.data.notIncludes);
            notIncludesArray.forEach((h) => {
              notIncludes.push(h.notInclude);
            })
          }
          response.data.data.notIncludes = notIncludes;


          const inclusions = [];
          if (response.data.data.inclusions) {

            const inclusionsArray = JSON.parse(response.data.data.inclusions);
            inclusionsArray.forEach((h) => {
              inclusions.push(h.Inclusion);
            })
          }
          response.data.data.inclusions = inclusions;

          const exclusions = [];
          if (response.data.data.exclusions) {

            const exclusionsArray = JSON.parse(response.data.data.exclusions);
            exclusionsArray.forEach((h) => {
              exclusions.push(h.exclusion);
            })
          }
          response.data.data.exclusions = exclusions;

          const knowThings = [];
          if (response.data.data.knowThings) {

            const knowThingsArray = JSON.parse(response.data.data.knowThings);
            knowThingsArray.forEach((h) => {
              knowThings.push(h.knowThing);
            })
          }
          response.data.data.knowThings = knowThings;

          const informations = [];
          if (response.data.data.informations) {

            const informationsArray = JSON.parse(response.data.data.informations);
            informationsArray.forEach((h) => {
              informations.push(h.information);
            })
          }
          response.data.data.informations = informations;

          const departureDetails = [];
          if (response.data.data.departureDetails) {

            const departureDetailsArray = JSON.parse(response.data.data.departureDetails);
            departureDetailsArray.forEach((h) => {
              departureDetails.push(h.departureDetail);
            })
          }
          response.data.data.departureDetails = departureDetails;

          const itinerarys = [];
          if (response.data.data.itinerarys) {

            const itinerarysArray = JSON.parse(response.data.data.itinerarys);
            itinerarysArray.forEach((h) => {
              itinerarys.push(h);
            })
          }
          response.data.data.itinerarys = itinerarys;


          setTour(response.data.data);
          //       setTour(toursData.find((item) => item.id == id));

          console.log(tour);
        })
        .catch(e => {
          console.log(e);
        });
    }

    return () => { };
  }, [id]);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="oqNZOOWF8qM"
        onClose={() => setOpen(false)}
      />

      <Seo pageTitle="Tour Single" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header />
      {/* End Header 1 */}

      <TopBreadCrumb name={tour?.name} />
      {/* End top breadcrumb */}

      <section className="pt-40">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <h1 className="text-30 fw-600">{tour?.name}</h1>
              <div className="row x-gap-20 y-gap-20 items-center pt-10">
                <div className="col-auto">
                  <div className="d-flex items-center">
                    <div className="d-flex x-gap-5 items-center">
                      <i className="icon-star text-10 text-yellow-1"></i>

                      <i className="icon-star text-10 text-yellow-1"></i>

                      <i className="icon-star text-10 text-yellow-1"></i>

                      <i className="icon-star text-10 text-yellow-1"></i>

                      <i className="icon-star text-10 text-yellow-1"></i>
                    </div>

                    <div className="text-14 text-light-1 ml-10">
                      {tour?.rating} reviews
                    </div>
                  </div>
                </div>

                <div className="col-auto">
                  <div className="row x-gap-10 items-center">
                    <div className="col-auto">
                      <div className="d-flex x-gap-5 items-center">
                        <i className="icon-placeholder text-16 text-light-1"></i>
                        <div className="text-15 text-light-1">
                          {tour?.location}
                        </div>
                      </div>
                    </div>

                    <div className="col-auto">
                      <button
                        data-x-click="mapFilter"
                        className="text-blue-1 text-15 underline"
                      >
                        Show on map
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <div className="row x-gap-10 y-gap-10">
                <div className="col-auto">
                  <button onClick={handleCloseShare} className="button px-15 py-10 -blue-1">
                    <i className="icon-share mr-10"></i>
                    Share
                  </button>
                </div>

                <div className="col-auto">
                  <button className="button px-15 py-10 -blue-1 bg-light-2">
                    <i className="icon-heart mr-10"></i>
                    Save
                  </button>
                </div>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End gallery grid wrapper */}

      <section className="pt-40 js-pin-container">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-8">
              <div className="relative d-flex justify-center overflow-hidden js-section-slider">
                <Swiper
                  modules={[Navigation]}
                  loop={true}
                  navigation={{
                    nextEl: ".js-img-next",
                    prevEl: ".js-img-prev",
                  }}
                >
                  {tour?.gallery?.map((slide, i) => (
                    <SwiperSlide key={i}>
                      <img width={451}
                        height={450}
                        priority
                        src={slide}
                        alt="image"
                        style={{ height: "301px" }}
                        className="rounded-4 col-12 cover object-cover" />
                      {/* <Image
                        width={451}
                        height={450}
                        priority
                        src={slide}
                        alt="image"
                        style={{ height: "501px" }}
                        className="rounded-4 col-12 cover object-cover"
                      /> */}
                    </SwiperSlide>
                  ))}
                </Swiper>

                <Gallery>
                  {tour?.gallery?.map((slide, i) => (
                    <div
                      className="absolute px-10 py-10 col-12 h-full d-flex justify-end items-end z-2 bottom-0 end-0"
                      key={i}
                    >
                      <Item
                        original={slide}
                        thumbnail={slide}
                        width={451}
                        height={450}
                      >
                        {({ ref, open }) => (
                          <div
                            className="button -blue-1 px-24 py-15 bg-white text-dark-1 js-gallery"
                            ref={ref}
                            onClick={open}
                            role="button"
                          >
                            See All Photos
                          </div>
                        )}
                      </Item>
                    </div>
                  ))}
                </Gallery>

                <div className="absolute h-full col-11">
                  <button className="section-slider-nav -prev flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-img-prev">
                    <i className="icon icon-chevron-left text-12" />
                  </button>
                  <button className="section-slider-nav -next flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-img-next">
                    <i className="icon icon-chevron-right text-12" />
                  </button>
                </div>
                {/* End prev nav button wrapper */}
              </div>
              {/* End relative */}

              {/* slider gallery */}

              <h3 className="text-22 fw-500 mt-40">Tour snapshot</h3>
              <TourSnapShot tourData={tour} />
              {/* End toursnapshot */}
              <div className="border-top-light mt-20 m2-40"></div>

              <div class="tourSticky"><Tabs>
                <TabList className={isSticky ? "row bg-dark-2 y-gap-20 x-gap-20 stickyTabs" : "row bg-dark-2 y-gap-20 x-gap-20"}>
                  <Tab
                    className="col-auto"
                  >
                    <button
                      className={currentTab == 'Overview' ? 'active button -dark-1 bg-blue-1 text-white px-20 py-10' : 'button -dark-1 bg-blue-1 text-white px-20 py-10'}
                      onClick={() => setCurrentTab('Overview')}
                    >
                      Overview
                    </button>
                  </Tab>

                  <Tab
                    className="col-auto"
                  >
                    <button
                      className={currentTab == 'Itinerary' ? 'active button -dark-1 bg-blue-1 text-white px-20 py-10' : 'button -dark-1 bg-blue-1 text-white px-20 py-10'}
                      onClick={() => setCurrentTab('Itinerary')}
                    >
                      Itinerary
                    </button>
                  </Tab>

                  <Tab
                    className="col-auto"
                  >
                    <button
                      className={currentTab == 'Tour Information' ? 'active button -dark-1 bg-blue-1 text-white px-20 py-10' : 'button -dark-1 bg-blue-1 text-white px-20 py-10'}
                      onClick={() => setCurrentTab('Tour Information')}
                    >
                      Tour Information
                    </button>
                  </Tab>

                  <Tab
                    className="col-auto"
                  >
                    <button
                      className={currentTab == 'Cancellation policy' ? 'active button -dark-1 bg-blue-1 text-white px-20 py-10' : 'button -dark-1 bg-blue-1 text-white px-20 py-10'}
                      onClick={() => setCurrentTab('Cancellation policy')}
                    >
                      Cancellation policy
                    </button>
                  </Tab>


                </TabList>
                {/* End tablist */}


                <TabPanel key={'Overview'}>
                  <section className="border-top-light  mt-40 pt-40">
                    <div className="container">
                      <h3 className="text-22 fw-500 mb-20">Overview</h3>
                      <Overview tourData={tour} />
                    </div>
                  </section>
                  {/* End Overview */}
                </TabPanel>


                <TabPanel key={'Itinerary'}>
                  <section className="border-top-light  mt-40 pt-40">
                    <div className="container">
                      <h3 className="text-22 fw-500 mb-20">Itinerary</h3>
                      <Itinerary tourData={tour} />
                    </div>
                  </section>
                  {/* End Itinerary */}
                </TabPanel>

                <TabPanel key={'Important information'}>
                  <section className="pt-40">
                    <div className="container">
                      <div className="pt-40 border-top-light">
                        <div className="row x-gap-40 y-gap-40">
                          <div className="col-auto">
                            <h3 className="text-22 fw-500">Important information</h3>
                          </div>
                        </div>
                        {/* End row */}
                        <ImportantInfo tourData={tour} />
                      </div>
                      {/* End pt-40 */}
                    </div>
                    {/* End .container */}
                  </section>
                  {/* End important info */}

                </TabPanel>


                <TabPanel key={'Cancellation policy'}>
                  <section className="pt-40">
                    <div className="container">
                      <div className="pt-40 border-top-light">
                        <div className="row x-gap-40 y-gap-40">
                          <div className="col-auto">
                            <h3 className="text-22 fw-500">Cancellation policy</h3>
                          </div>
                        </div>
                        {/* End row */}


                        <div className="col-md-6">
                          <h5 className="text-16 fw-500">Cancellation policy</h5>
                          <div className="text-15 mt-10">
                            {tour && tour?.cancellation}
                          </div>
                        </div>
                      </div>
                      {/* End pt-40 */}
                    </div>
                    {/* End .container */}
                  </section>
                  {/* End important info */}

                </TabPanel>

              </Tabs>
              </div>

              {/* End  Overview */}
            </div>
            {/* End .col-xl-8 */}

            <div className={isSticky ? "col-xl-4 sidebarFixed" : "col-xl-4"}>
              <SidebarRight tour={tour} />
            </div>
            {/* End .col-xl-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End single page content */}

      {/* <Faq tourData={tour} />                     */}

      {/* End Faq about sections */}

      <section className="mt-40 border-top-light pt-40">
        <div className="container">
          <div className="row y-gap-40 justify-between">
            <div className="col-xl-3">
              <h3 className="text-22 fw-500">Guest reviews</h3>
              <ReviewProgress2 tourId={tourId}  />
              {/* End review with progress */}
            </div>
            {/* End col-xl-3 */}

            <div className="col-xl-8">
              {tour && tourId && <DetailsReview2 tourId={tourId} />}
            </div>
            {/* End col-xl-8 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
        {/* End container */}
      </section>
      {/* End Review section */}

      <ReplyForm tourId={tourId} />
      {/* End Reply Comment box section */}

      <div class="py-20"></div>
      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />



      {/* <section className="layout-pt-lg layout-pb-lg mt-50 border-top-light">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Most Popular Tours</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
          </div>

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Tours />
          </div>
        </div>
      </section> */}
      {/* End Tours Sections */}


      <Dialog
        open={isShare}
        onClose={handleCloseShare}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"

      >
        <DialogTitle id="alert-dialog-title">
          <div class="d-flex justify-content-between">
          <div>{"Share With your Friends"}</div>
          <i style={{cursor: 'pointer'}} onClick={handleCloseShare} class="icon-close"></i>
          </div>
        </DialogTitle>
        <DialogContent style={{ width: '600px' }}>
          <Share title="Pick My Tours" shareUrl={'https://pickmytours.com/tour/tour-single/'+tour._id} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default dynamic(() => Promise.resolve(TourSingleV1Dynamic), {
  ssr: false,
});
