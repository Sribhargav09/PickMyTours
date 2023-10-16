import { useEffect, useState } from "react";
import locationService from "../../services/location.service";
import {  useRouter } from "next/router";
import Router from "next/router";
import AutoComplete from "../../common/autocomplete";


const LocationSearch = ({ setValue}) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [focus, setFocus] = useState(false);

  const [locations, setLocations] = useState([]);
  
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
      locationService.getAll()
      .then(response => {
        const locs = [];
        response.data.data.map((item) => {
          locs.push(item.name);
        });
        setLocations(locs);
      })
      .catch(e => {
        console.log(e);
      });
  }, [])



  return (
    <>
      <div className="searchMenu-loc px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch">
        <div>
          <h4 className="text-15 fw-500 ls-2 lh-16">Location</h4>
          <div className="text-15 text-light-1 ls-2 lh-16">
          <AutoComplete setLocation={setValue} data={locations} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationSearch;
