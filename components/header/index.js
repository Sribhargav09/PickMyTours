import Link from "next/link";
import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import CurrenctyMegaMenu from "./CurrenctyMegaMenu";
import LanguageMegaMenu from "./LanguageMegaMenu";
import HeaderSearch from "./HeaderSearch";
import MobileMenu from "./MobileMenu";

import Router from "next/router";
import { useSelector, useDispatch } from 'react-redux'
import { setUser, setToken } from '../../app/features/user/userSlice';



const Header = () => {
  const [navbar, setNavbar] = useState(false);

  
  const loginUser = useSelector((state) => state.user.loginUser);
  const userToken = useSelector((state) => state.user.token);
  const dispatch = useDispatch()
console.log(loginUser);



  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const logOut = () => {
    dispatch(setToken(''));
    dispatch(setUser(null));
    Router.push("/others-pages/login");
  } 

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <>
      <header className={`header bg-white ${navbar ? "is-sticky" : ""}`}>
        <div className="header__container px-30 sm:px-20">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center">
                <Link href="/" className="header-logo mr-20">
                <img src="/img/general/logo.png" alt="logo icon" />
                  {/* <img src="/img/general/logo-dark.svg" alt="logo icon" />
                  <img src="/img/general/logo-dark.svg" alt="logo icon" /> */}
                </Link>
                {/* End logo */}

                {/* <HeaderSearch /> */}
                {/* End logo */}

                <div className="header-menu">
                  <div className="header-menu__content">
                    <MainMenu style="text-dark-1" />
                  </div>
                </div>
                {/* End header-menu */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col */}

            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="row x-gap-20 items-center">
                  <CurrenctyMegaMenu textClass="text-dark-1" />
                  {/* End Megamenu for Currencty */}

                  {/* Start vertical devider*/}
                  <div className="col-auto">
                    <div className="w-1 h-20 bg-white-20" />
                  </div>
                  {/* End vertical devider*/}

                  <LanguageMegaMenu textClass="text-dark-1" />
                  {/* End Megamenu for Language */}
                </div>
                {/* End language and currency selector */}

                {/* Start btn-group */}
                {!userToken &&<div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none">
                <Link
                    href="/others-pages/become-expert"
                    className="button px-30 fw-400 text-14 -blue-1 bg-blue-1 h-50 text-white"
                  >
                    Become An Expert
                  </Link> 
                  
                  <Link
                    href="/others-pages/signup"
                    className="button px-30 fw-400 text-14 -outline-blue-1 h-50 text-blue-1 ml-20"
                  >
                    Sign In / Register
                  </Link>
                </div>}

                {userToken && <div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none">
                  <img
                    width={50}
                    height={50}
                    src={`${loginUser.photo}`}
                    alt="image"
                    className="size-50 rounded-22 object-cover"
                  />
                  <h5>{loginUser.name}</h5>
                  <button
                    onClick={logOut}
                    className="button px-30 fw-400 text-14 -outline-blue-1 h-50 text-blue-1 ml-20"
                  >
                    Logout
                  </button>
                </div>}
                {/* End btn-group */}

                {/* Start mobile menu icon */}
                <div className="d-none xl:d-flex x-gap-20 items-center pl-30 text-dark-1">
                  <div>
                    <Link
                      href="#"
                      onClick={logOut}
                      className="d-flex items-center icon-user text-inherit text-22"
                    />
                  </div>
                  <div>
                    <button
                      className="d-flex items-center icon-menu text-inherit text-20"
                      data-bs-toggle="offcanvas"
                      aria-controls="mobile-sidebar_menu"
                      data-bs-target="#mobile-sidebar_menu"
                    />

                    <div
                      className="offcanvas offcanvas-start  mobile_menu-contnet"
                      tabIndex="-1"
                      id="mobile-sidebar_menu"
                      aria-labelledby="offcanvasMenuLabel"
                      data-bs-scroll="true"
                    >
                      <MobileMenu />
                      {/* End MobileMenu */}
                    </div>
                  </div>
                </div>
                {/* End mobile menu icon */}
              </div>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
      {/* End Header */}
    </>
  );
};

export default Header;
