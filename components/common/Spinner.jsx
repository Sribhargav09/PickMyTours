import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import Loader from "react-loader-spinner";
import "../common/spinner.css";

const Spinner = () => {

  const loader = useSelector((state) => state.hero.loader);

  return (<>
    {loader && (
      <div className="spinner">
        <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
      </div>
    )}
  </>)
}

export default Spinner;

