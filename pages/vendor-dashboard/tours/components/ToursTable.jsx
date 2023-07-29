import { use, useEffect, useState } from "react";
import Pagination from "../../common/Pagination";
import ActionsButton from "./ActionsButton";
import { useRouter } from "next/router";



const ToursTable = ({toursData}) => {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();

  console.log(toursData);
  
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabItems = [
    "All Booking",
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
              <table className="table-4 -border-bottom col-12">
                <thead className="bg-light-2">
                  <tr>
                    <th>
                      <div className="d-flex items-center">
                        <div className="form-checkbox ">
                          <input type="checkbox" name="name" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check" />
                          </div>
                        </div>
                      </div>
                    </th>
                    <th>Name</th>
                    <th>Photo</th>
                    <th>Location</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* End theade */}
                <tbody>
                  {toursData && toursData.map((data) => { 
                  return <tr>
                    <td>
                      <div className="d-flex items-center">
                        <div className="form-checkbox ">
                          <input type="checkbox" name="name" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check" />
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="text-blue-1 fw-500">{data.name}</td>

                    <td><img src={data.featurePhoto[0]} /></td>

                    <td>{data.location}</td>

                    <td>{data.price}</td>

                    <td><button onClick={() => Router.push(`add-tour/${data?._id}`)}>Edit</button> </td>

                    
                  </tr>
                  })}
                  {/* End tr */}
                </tbody>
                {/* End tbody */}
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <Pagination /> */}
    </>
  );
};

export default ToursTable;
