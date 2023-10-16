import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
//import toursData from "../../../data/tours";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";


const TourProperties = ({toursData}) => {

  const selectedCurrency = useSelector((state) => state.currency.selectedCurrency);
  const [currency, setCurrency] = useState(selectedCurrency);

  useEffect(() => {
    setCurrency(selectedCurrency);
  }, [selectedCurrency])


  useEffect(() => {
    console.log(toursData);
  }, [toursData]);

  const [featureImage, setFeatureImage] = useState("");
  
  const getPhoto = (url) => {
    
    axios.get(url).then((res)=>{
        //setFeatureImage(res.data);
      console.log(data);
        const name = res.data.name;

        const blob = new Blob([Int8Array.from(data.img.data.data)], {type: data.img.contentType });

        const image = window.URL.createObjectURL(blob);
        console.log(image)
        return image;
    }).catch(err=>console.log(err));
  }

  return (
    <>
      {toursData && toursData.length> 0 && toursData.map((item) => (
        <div
          className="col-12"
          key={item?._id}
          ata-aos="fade"
          ata-aos-delay={10}
        >
          <div className="border-top-light pt-30">
            <div className="row x-gap-20 y-gap-20">
              <div className="col-md-auto">
                <div className="cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4">
                  <div className="cardImage__content custom_inside-slider">
                  {/* {item && item.featurePhoto && <img width="300" height="300" src={item.featurePhoto[0]}></img>}
                           */}
                    <Swiper
                      className="mySwiper"
                      modules={[Pagination, Navigation]}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                    >
                      <img loading="lazy" width="300" style={{height:'300px',color:'transporant'}} decoding="async" data-nimg="1" class="rounded-4 col-12 js-lazy" src={item.featurePhoto[0]}></img>
                      {/* {item?.gallery?.map((slide, i) => (
                        
                        <SwiperSlide key={i}>
                         <img loading="lazy" width="300" height="300" decoding="async" data-nimg="1" class="rounded-4 col-12 js-lazy" src={slide}></img>
                        </SwiperSlide>
                      ))} */}
                    </Swiper>
                  </div>
                  {/* End .cardImage__content */}

                  <div className="cardImage__wishlist">
                    <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                      <i className="icon-heart text-12" />
                    </button>
                  </div>
                  {/* End .cardImage__wishlist */}
                </div>
                {/* End cartImage */}
              </div>
              {/* End .col-auto */}

              <div className="col-md">
                <div className="row x-gap-10 items-center">
                  <div className="col-auto">
                    <p className="text-14 lh-14 mb-5">
                      {item?.duration ?? 5}+ hours
                    </p>
                  </div>
                  {/* End col-auto */}

                  <div className="col-auto">
                    <div className="size-3 rounded-full bg-light-1 mb-5"></div>
                  </div>
                  {/* End col-auto */}

                  <div className="col-auto">
                    <p className="text-14 lh-14 mb-5">{item?.type ?? 'Full days'}</p>
                  </div>
                  {/* End col-auto */}
                </div>
                {/* End .row */}
                <h3 className="text-18 lh-16 fw-500">
                  {item?.name} <br />
                  {item?.place}
                </h3>
                <p className="text-14 lh-14 mt-5">{item?.location}</p>
                <div className="text-14 lh-15 fw-500 mt-20">
                  Taking safety measures
                </div>
                <div className="text-14 text-green-2 fw-500 lh-15 mt-5">
                  Free cancellation
                </div>
              </div>
              {/* End col-md */}

              <div className="col-md-auto text-right md:text-left">
                <div className="d-flex x-gap-5 items-center justify-end md:justify-start">
                  <i className="icon-star text-10 text-yellow-1"></i>
                  <i className="icon-star text-10 text-yellow-1"></i>
                  <i className="icon-star text-10 text-yellow-1"></i>
                  <i className="icon-star text-10 text-yellow-1"></i>
                  <i className="icon-star text-10 text-yellow-1"></i>
                </div>

                <div className="text-14 lh-14 text-light-1 mt-10">
                  {item?.rating} reviews
                </div>

                <div className="text-14 text-light-1 mt-50 md:mt-20">From</div>
                <div className="text-22 lh-12 fw-600 mt-5">
                  US${item?.price}
                  {currency.symbol}{(item?.price * currency.rate).toFixed(2)}

                </div>
                <div className="text-14 text-light-1 mt-5">per adult</div>

                <Link
                  href={`/tour/tour-single/${item._id}`}
                  className="button -md -dark-1 bg-blue-1 text-white mt-24"
                >
                  View Detail <div className="icon-arrow-top-right ml-15"></div>
                </Link>
              </div>
              {/* End col-md */}
            </div>
            {/* End .row */}
          </div>
          {/* End border-top */}
        </div>
      ))}
    </>
  );
};

export default TourProperties;
