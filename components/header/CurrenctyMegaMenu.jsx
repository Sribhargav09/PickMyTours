import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { changeCurrency } from '../../app/features/currency/currencySlice';
import axios from "axios";

const CurrenctyMegaMenu = ({ textClass }) => {
  const selectedCurrencyValue = useSelector((state) => state.currency.selectedCurrency);
  const dispatch = useDispatch()
  const [click, setClick] = useState(false);
  const handleCurrency = () => setClick((prevState) => !prevState);

  const currencyContent = useSelector((state) => state.currency.currencies);

  const [selectedCurrency, setSelectedCurrency] = useState(selectedCurrencyValue);

  const handleItemClick = (currencyItem) => {
    setClick(false);
    const to = (currencyItem.currency)?.toLowerCase();
    const from = 'inr';
    axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
            .then((res) => {
              console.log(res)
              const rates = res.data[from];
              //currencyItem.rate = JSON.stringify(rates[to]);
              const updateCurrencyItem = {...currencyItem, rate:rates[to]};
              dispatch(changeCurrency(updateCurrencyItem));
            })
  };

  useEffect(() => {
    setSelectedCurrency(selectedCurrencyValue);
}, [selectedCurrencyValue]);

  // useEffect(() => {
  //   const to =  'inr';
  //   const from = 'inr';

  //   axios.get(
  //     `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
  //           .then((res) => {
  //             console.log(res)
  //             const rates = res.data[from];
  //             const updateCurrencyItem = {...selectedCurrency, rate:rates[to]};
  //             dispatch(changeCurrency(updateCurrencyItem));
  //           })
  // }, []);



  return (
    <>
      {/* Start currencty dropdown wrapper */}
      <div className="col-auto">
        <button
          className={`d-flex items-center text-14 ${textClass}`}
          onClick={handleCurrency}
        >
          <span className="js-currencyMenu-mainTitle">
            {selectedCurrency?.currency} 
          </span>
          <i className="icon-chevron-sm-down text-7 ml-10" />
        </button>
      </div>
      {/* End currencty dropdown wrapper */}

      <div
        className={`currencyMenu js-currencyMenu ${click ? "" : "is-hidden"}`}
      >
        <div className="currencyMenu__bg" onClick={handleCurrency}></div>
        <div className="currencyMenu__content bg-white rounded-4">
          <div className="d-flex items-center justify-between px-30 py-20 sm:px-15 border-bottom-light">
            <div className="text-20 fw-500 lh-15">Select your currency</div>
            {/* End Title */}

            <button className="pointer" onClick={handleCurrency}>
              <i className="icon-close" />
            </button>
            {/* End colse button */}
          </div>
          {/* End flex wrapper */}
          <ul className="modalGrid px-30 py-30 sm:px-15 sm:py-15">
            {currencyContent.map((item) => (
              <li
                className={`modalGrid__item js-item ${
                  selectedCurrency?.currency === item.currency ? "active" : ""
                }`}
                key={item.id}
                onClick={() => handleItemClick(item)}
              >
                <div className="py-10 px-15 sm:px-5 sm:py-5">
                  <div className="text-15 lh-15 fw-500 text-dark-1">
                    {item.name}
                  </div>
                  <div className="text-14 lh-15 mt-5">
                    <span className="js-title">{item.currency}</span>-{" "}
                    {item.symbol}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CurrenctyMegaMenu;
