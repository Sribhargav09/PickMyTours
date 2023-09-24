import Aos from "aos";
import { useEffect, useState } from "react";
import SrollTop from "../components/common/ScrollTop";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "aos/dist/aos.css";
import "../styles/index.scss";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Spinner from "../components/common/Spinner";


if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {

  useEffect(() => {
    setTimeout(() => {
        //showLoader(false);
    }, 1200)
  }, []);

  return (
    <main>
      <Provider store={store}>
        <Component {...pageProps} />
        <SrollTop />
        <Spinner />
      </Provider>
    </main>
  );
}
