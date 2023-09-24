import Router from "next/router";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCurrentTab } from "../../features/hero/findPlaceSlice";
import DateSearch from "./DateSearch";
import GuestSearch from "./GuestSearch";
import LocationSearch from "./LocationSearch";



const MainFilterSearchBox = () => {
  const { tabs, currentTab } = useSelector((state) => state.hero) || {};
  const dispatch = useDispatch();

  const [ location, setLocation] = useState('');
  const [ dates, setDates] = useState([]);
  const [ guestsCount, setGuestsCount] = useState(null);
  

  const Search = () => {
    Router.push(`/tour/tour-list-v1?location=${location}&fromDate=${(dates && dates[0]) ? dates[0] : ''}&toDate=${(dates && dates[1]) ? dates[1]: ''}&adults=${guestsCount ? guestsCount.Adults : ''}&children=${guestsCount ? guestsCount.Children : ''}`)
  }


  return (
    <>
      <div className="tabs -bookmark js-tabs">
        <div className="tabs__controls d-flex items-center js-tabs-controls">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              className={`tabs__button px-20 py-10 rounded-4 fw-600 text-white js-tabs-button ${
                tab?.name === currentTab ? "is-tab-el-active" : ""
              }`}
              onClick={() => dispatch(addCurrentTab(tab?.name))}
            >
              <i className={`${tab.icon} text-20 mr-10`}></i>
              {tab?.name}
            </button>
          ))}
        </div>
      </div>

      <div className="tabs__content js-tabs-content">
        <div className="mainSearch bg-white pr-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 rounded-4">
          <div className="button-grid items-center">
            <LocationSearch setValue={setLocation} />
            {/* End Location */}

            <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
              <div>
                <h4 className="text-15 fw-500 ls-2 lh-16">
                  Check in - Check out
                </h4>
                <DateSearch value={dates} setValue={setDates} />
              </div>
            </div>
            {/* End check-in-out */}

            <GuestSearch value={guestsCount} setValue={setGuestsCount} />
            {/* End guest */}

            <div className="button-item">
              <button
                className="mainSearch__submit button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white"
                onClick={Search}
              >
                <i className="icon-search text-20 mr-10" />
                Search
              </button>
            </div>
            {/* End search button_item */}
          </div>
        </div>
        {/* End .mainSearch */}
      </div>
      {/* End serarchbox tab-content */}

    </>
  );
};

export default MainFilterSearchBox;
