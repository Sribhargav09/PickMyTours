import { useState, useEffect } from "react";
import locationService from "../../../services/location.service";


const Locations = ({filteredLocations, handleFilterChange}) => {
  // const categories = [
  //   { name: "Tours", count: 92 },
  //   { name: "Attractions", count: 45 },
  //   { name: "Day Trips", count: 21 },
  //   { name: "Outdoor Activities", count: 78 },
  //   { name: "Concerts & Shows", count: 679 },
  // ];

  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const checkplace = (value) => {
    return filteredPlaces.some((p) => p.toLowerCase() === value.toLowerCase());
  }
  
  useEffect(() => {
    locationService.getAll()
    .then(response => {
      const locs = [];
      response.data.data.map((item) => {
        locs.push(item);
      });
      setPlaces(locs);
      //console.log(locs);
    })
    .catch(e => {
      console.log(e);
    });
}, [])

  useEffect(() => {
    if(filteredLocations){
      setFilteredPlaces(filteredLocations);
    }
  }, [filteredLocations])

  const applyFilters = (checked, value) => {
    //console.log(checked);
    //console.log(value);
      if(checked){
        console.log([...filteredPlaces, value]);
        handleFilterChange('location', [...filteredPlaces, value]);
      }else{
        const places = filteredPlaces.filter((place) => (place).toLowerCase() !== value.toLowerCase());
        console.log(places);
        handleFilterChange('location', places);
      }
  }

  return (
    <>
      {places.map((place) => (
        <div
          className="row y-gap-10 items-center justify-between"
          key={place.name}
        >
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input onChange={(event) => applyFilters(event.target.checked, place.name)} type="checkbox" checked={checkplace(place.name)} />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{place.name}</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-15 text-light-1">{place?.count ?? 0}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Locations;
