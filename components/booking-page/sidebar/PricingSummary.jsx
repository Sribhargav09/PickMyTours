import { useState,useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'


const PricingSummary = ({tour}) => {
  const selectedCurrency = useSelector((state) => state.currency.selectedCurrency);
  const [currency, setCurrency] = useState(selectedCurrency);

  useEffect(() => {
    setCurrency(selectedCurrency);
  }, [selectedCurrency])

  return (
    <div className="px-30 py-30 border-light rounded-4 mt-30">
      <div className="text-20 fw-500 mb-20">Your price summary</div>
      <div className="row y-gap-5 justify-between">
        <div className="col-auto">
          <div className="text-15">{tour.name}</div>
        </div>
        {/* End col */}
        <div className="col-auto">
          <div className="text-15">{currency.symbol}{(tour.price * currency.rate).toFixed(2)}</div>
        </div>
        {/* End col */}
      </div>
      {/* End .row */}

      <div className="row y-gap-5 justify-between pt-5">
        <div className="col-auto">
          <div className="text-15">Taxes and fees</div>
        </div>
        <div className="col-auto">
          <div className="text-15">Rs.0</div>
        </div>
      </div>
      {/* End .row */}

      <div className="row y-gap-5 justify-between pt-5">
        <div className="col-auto">
          <div className="text-15">Booking fees</div>
        </div>
        <div className="col-auto">
          <div className="text-15">FREE</div>
        </div>
      </div>
      {/* End .row */}

      {/* <div className="px-20 py-20 bg-blue-2 rounded-4 mt-20">
        <div className="row y-gap-5 justify-between">
          <div className="col-auto">
            <div className="text-18 lh-13 fw-500">Price</div>
          </div>
          <div className="col-auto">
            <div className="text-18 lh-13 fw-500">US$4,046.81</div>
          </div>
        </div>
      </div> */}
      {/* End .row */}
    </div>
    // End px-30
  );
};

export default PricingSummary;
