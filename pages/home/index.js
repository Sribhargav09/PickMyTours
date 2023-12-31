import dynamic from "next/dynamic";
import { useSelector, useDispatch } from "react-redux";
import Seo from "../../components/common/Seo";
import Header3 from "../../components/header/header-3";
import Hero from "../../components/hero";
import TopDestinations from "../../components/destinations/TopDestinations";
import Hotels from "../../components/hotels/Hotels2";
import Link from "next/link";
import Tours from "../../components/tours/Tours";
import Activity from "../../components/activity/Activity";
import Rentals from "../../components/rentals/Rentals";
import Cars from "../../components/cars/Cars";
import Cruise from "../../components/cruise/Cruise";
import Flights from "../../components/flight/Flights";
import Footer3 from "../../components/footer/footer-3";
import AddBanner from "../../components/home/home-3/AddBanner";
import WhyChoose from "../../components/home/home-3/WhyChoose";
import Header from "../../components/header";
import TourCategories from "../../components/home/home-6/TourCategories";
import Testimonial from "../../components/testimonial/Testimonial";



const home = () => {
  const { tabs, currentTab } = useSelector((state) => state.hero) || {};


  return (
    <>
      <Seo pageTitle="Home" />
      {/* End Page Title */}

      <Header />

      <Hero />
      {/* End Hero 3 */}


      {currentTab == 'Tour' && <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Most Popular Tours</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href={`/tour/tour-list-v1`}
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Tours />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>}
      {/* End Tours Sections */}

      {currentTab == 'Tour' && <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Choose Your Tour
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-20 sm:pt-20 item_gap-x30">
            <TourCategories />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>}
      {/* Adventure and activity */}

      {currentTab == 'Tour' && <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Special Offers</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  The popular Offers
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}
          <div className="row y-gap-10 pt-20">
            <AddBanner />
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>}
      {/* End AddBanner Section */}


      {currentTab == 'Tour' && <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Why Choose Us</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                 
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-20 mt-20">
            <WhyChoose />
          </div>
          {/* End row */}
        </div>
        {/* End .container */}
      </section>}
      {/* End Why choose Section */}

      {currentTab == 'Tour' && <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Top Destinations</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-20 sm:pt-20">
            <TopDestinations />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>}
      {/* End Top Destinations Section */}

      {currentTab == 'Tour' && <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Testimonial</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular testimonials from clients
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}
          <div className="row y-gap-20 rounded-4 mt-20 pt-40 pl-40">
            <div class="col-6  bg-blue-2">
              <h3>Most Trusted Travel Community</h3>
              <ul className='tst-list' style={{marginLeft: 10}}>
                <li>A stellar rating of 5 on Trip Advisor.</li>
                <li>An exceptional rating of 4.9 stars on Google.</li>
                <li>50,000+ satisfied travelers.</li>
                <li>4,000+ successful trips.</li>
                <li>More than 2500+ reviews and recommendations across all platforms.</li>
              </ul>
            </div>
            <div class="col-6 bg-white">
              <Testimonial />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>}
      {/* End Testinomial Section */}

      {currentTab == 'Hotel' && <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Recommended Hotels</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Hotels />
          </div>
          {/* End relative */}
        </div>
      </section>}
      {/* End  Hotel sections */}


      {currentTab == 'Activity' && <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Trending Activity</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Activity />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>}
      {/* Trending Activity Sections */}

      {currentTab == 'Holyday Rentals' && <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Featured Holiday Rentals
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Rentals />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>}
      {/* Featured Rentals Sections */}

      {currentTab == 'Car' && <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Popular Car Hire</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Cars />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>}
      {/* Popular Car Hire Sections */}

      {currentTab == 'Cruise' && <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Featured Cruise Deals</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Cruise />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>}
      {/* Features Cruise Deals Sections */}

      {currentTab == 'Flights' && <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Popular Routes</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="#"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20">
            <Flights />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>}
      {/* Popular Routes Sections */}

      <Footer3 />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(home), { ssr: false });
