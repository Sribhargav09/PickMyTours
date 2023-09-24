import Image from "next/image";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { changeLanguage } from '../../app/features/language/languageSlice';
import axios from "axios";


const LanguageMegaMenu = ({ textClass }) => {
  const selectedLanguageValue = useSelector((state) => state.language.selectedLanguage);
  const dispatch = useDispatch()

  const [click, setClick] = useState(false);
  const handleCurrency = () => setClick((prevState) => !prevState);

  const languageContent = useSelector((state) => state.language.languagies);

  const [selectedCurrency, setSelectedCurrency] = useState(selectedLanguageValue);

  const handleItemClick = (item) => {
    setSelectedCurrency(item);
    setClick(false);
    dispatch(changeLanguage(item));
  };

  useEffect(() => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        // setState({
        //   ...state,
        //   ip: data.ip,
        //   countryName: data.country_name,
        //   countryCode: data.country_calling_code,
        //   city: data.city,
        //   timezone: data.timezone
        // });
        //console.log(data.country_name);
        languageContent.map((ln) => {
           //console.log(ln)
          const ct = ln.country;
          if(ct == data.country_name){
              dispatch(changeLanguage(ln));
          }
        })
      })
      .catch((error) => {
        console.log(error);
      });
 },[]);
 

 useEffect(() => {
  setSelectedCurrency(selectedLanguageValue);
 }, [selectedLanguageValue])

  return (
    <>
      {/* Start language currency Selector */}
      <div className="col-auto">
        <button
          className={`d-flex items-center text-14 ${textClass}`}
          onClick={handleCurrency}
        >
          <Image
            width={20}
            height={20}
            src="/img/general/globe.svg"
            alt="image"
            className="rounded-full mr-10"
          />
          <span className="js-language-mainTitle">
            {" "}
            {selectedCurrency && selectedCurrency.language}
          </span>
          <i className="icon-chevron-sm-down text-7 ml-15" />
        </button>
      </div>
      {/* End language currency Selector */}

      <div className={`langMenu js-langMenu ${click ? "" : "is-hidden"}`}>
        <div className="currencyMenu__bg" onClick={handleCurrency}></div>
        <div className="langMenu__content bg-white rounded-4">
          <div className="d-flex items-center justify-between px-30 py-20 sm:px-15 border-bottom-light">
            <div className="text-20 fw-500 lh-15">Select your language</div>
            {/* End title */}
            <button className="pointer" onClick={handleCurrency}>
              <i className="icon-close" />
            </button>
            {/* End colse button */}
          </div>
          {/* Emd flex-wrapper */}
          <ul className="modalGrid px-30 py-30 sm:px-15 sm:py-15">
            {languageContent.map((item) => (
              <li
                className={`modalGrid__item js-item ${
                  selectedCurrency && selectedCurrency.country === item.country ? "active" : ""
                }`}
                key={item.id}
                onClick={() => handleItemClick(item)}
              >
                <div className="py-10 px-15 sm:px-5 sm:py-5">
                  <div className="text-15 lh-15 fw-500 text-dark-1">
                    {item.language}
                  </div>
                  <div className="text-14 lh-15 mt-5 js-title">
                    {item.country}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* End langMenu */}
      </div>
    </>
  );
};

export default LanguageMegaMenu;
