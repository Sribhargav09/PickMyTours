import CategoryTypes from "../sidebar/CategoryTypes";
import Locations from "../sidebar/Locations";
import OthersFilter from "../sidebar/OthersFilter";
import Duration from "../sidebar/Duration";
import Languages from "../sidebar/Languages";
import PirceSlider from "../sidebar/PirceSlider";
import { useEffect, useState } from "react";

const Sidebar = ({filters, handleFilterChange}) => {

  const [types, setTypes] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    console.log(filters);
    if(filters && filters.type){
      setTypes(filters.type);
    }

    if(filters && filters.location){
      setLocations(filters.location);
    }
  }, [filters])

  return (
    <>
      <div className="sidebar__item -no-border">
        <h5 className="text-18 fw-500 mb-10">Category Types</h5>
        <div className="sidebar-checkbox">
          <CategoryTypes  handleFilterChange={handleFilterChange}  filteredTypes={types} />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End popular filter */}

      {/* <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Other</h5>
        <div className="sidebar-checkbox">
          <OthersFilter />
        </div>
      </div> */}

      <div className="sidebar__item pb-30">
        <h5 className="text-18 fw-500 mb-10">Price</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <PirceSlider />
          </div>
        </div>
      </div>
      {/* End Nightly priceslider */}

      <div className="sidebar__item pb-30">
        <h5 className="text-18 fw-500 mb-10">Price</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <Locations handleFilterChange={handleFilterChange} filteredLocations={locations} />
          </div>
        </div>
      </div>

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Duration</h5>
        <div className="sidebar-checkbox">
          <Duration />
        </div>
      </div>
      {/* End style filter */}

      
      {/* End Aminities filter */}
    </>
  );
};

export default Sidebar;
