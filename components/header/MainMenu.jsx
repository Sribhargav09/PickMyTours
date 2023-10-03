import Link from "next/link";

import {
  homeItems,
  blogItems,
  pageItems,
  userItems,
  dashboardItems,
} from "../../data/mainMenuData";
import CategoriesMegaMenu from "./CategoriesMegaMenu";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from 'react-redux'
import { setUser, setToken } from '../../app/features/user/userSlice';
import { useState, useEffect } from "react";


const MainMenu = ({ style = "" }) => {
  
  const [loginUser, setLoginUser] = useState(null);
  const [userToken, setUserToken] = useState("");

  //const loginUser = useSelector((state) => state.user.loginUser);
  //const userToken = useSelector((state) => state.user.token);

  useEffect(() => {
    setLoginUser(JSON.parse(sessionStorage.getItem("loginUser")));
    setUserToken(sessionStorage.getItem("token"));
  }, []);
  
  const router = useRouter();
  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li
          className={`${
            isActiveParentChaild(homeItems, router.asPath) ? "current" : ""
          }`}
        >
          <a href="/">
            <span className="mr-10">Home</span>
            {/* <i className="icon icon-chevron-sm-down" /> */}
          </a>
        </li>

        
        
          {!userToken && pageItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, router.asPath) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}

          {userToken && userItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, router.asPath) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
        {/* End home page menu */}

        {/* <li className="menu-item-has-children -has-mega-menu">
          <a href="#">
            <span className="mr-10">Categories</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <div className="mega">
            <CategoriesMegaMenu />
          </div>
        </li> */}
        {/* End categories menu items */}

        {/* <li className={router.pathname === "/destinations" ? "current" : ""}>
          <Link href="/destinations">Destinations</Link>
        </li> */}
        {/* End Destinatinos single menu */}

        {/* <li
          className={`${
            isActiveParentChaild(blogItems, router.asPath) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Blog</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {blogItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, router.asPath) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li> */}
        {/* End blogIems */}

        {/* End pages items */}

        {/* <li
          className={`${
            isActiveParentChaild(dashboardItems, router.asPath) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Dashboard</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav ">
            {dashboardItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, router.asPath) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li> */}

        {/* <li className={router.pathname === "/contact" ? "current" : ""}>
          <Link href="/contact">Contact</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default MainMenu;
