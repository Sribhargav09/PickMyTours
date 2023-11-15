import { useState, useEffect } from "react";
import tourTypeService from "../../../services/tour-type.service";


const CategoryTypes = ({filteredTypes, handleFilterChange}) => {
  // const categories = [
  //   { name: "Tours", count: 92 },
  //   { name: "Attractions", count: 45 },
  //   { name: "Day Trips", count: 21 },
  //   { name: "Outdoor Activities", count: 78 },
  //   { name: "Concerts & Shows", count: 679 },
  // ];

  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  
  useEffect(() => {
    tourTypeService.getAll()
      .then(response => {
        setCategories(response.data.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, [])

  useEffect(() => {
    if(filteredTypes){
      setFilteredCategories(filteredTypes);
    }
  }, [filteredTypes])


  const applyFilters = (checked, value) => {
    //console.log(checked);
    //console.log(value);
      if(checked){
        console.log([...filteredTypes, value]);
        handleFilterChange('type', [...filteredTypes, value]);
      }else{
        const places = filteredTypes.filter((place) => (place).toLowerCase() !== value.toLowerCase());
        console.log(places);
        handleFilterChange('type', places);
      }
  }


  return (
    <>
      {categories.map((category) => (
        <div
          className="row y-gap-10 items-center justify-between"
          key={category.name}
        >
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" onChange={(event) => applyFilters(event.target.checked, category.name)}  checked={filteredCategories.includes(category.name)} />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{category.name}</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-15 text-light-1">{category?.count ?? 0}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoryTypes;
