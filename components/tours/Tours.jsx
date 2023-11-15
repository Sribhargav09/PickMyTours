import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import toursData from "../../data/tours";
import isTextMatched from "../../utils/isTextMatched";
import { useEffect, useState } from "react";
import tourService from "../../services/tour.service";

import { useSelector, useDispatch } from "react-redux";import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LoginForm from "../../components/common/LoginForm";
import wishlistService from "../../services/wishlist.service";


const Tours = () => {

  const selectedCurrency = useSelector((state) => state.currency.selectedCurrency);
  const [currency, setCurrency] = useState(selectedCurrency);
  const [addedToWishlist, setAddedToWishlist] = useState(false);
  const [isWish, setIsWish] = useState(false);
  const [wishMsg, setWishMsg] = useState('');
  const [loader, setLoader] = useState(false);

  
  const [loginUser, setLoginUser] = useState(null);
  const [userToken, setUserToken] = useState("");

  //const loginUser = useSelector((state) => state.user.loginUser);
  //const userToken = useSelector((state) => state.user.token);

  useEffect(() => {
    setLoginUser(JSON.parse(sessionStorage.getItem("loginUser")));
    setUserToken(sessionStorage.getItem("token"));
    // if(!userToken){
    //   Router.push("/others-pages/login");
    // }
  }, []);


  const [tours, setTours] = useState([]);

  const isInWishList = (tourId) => {
    console.log(tourId);
    if(tourId !== '' && loginUser){
    wishlistService.getByTourId(tourId)
        .then(response => {
          response.data.data.forEach((wdata) => {
            if(wdata.userId === loginUser._id){
              return true;
            }else{
              return false;
            }
          })
        })
        .catch(e => {
          return false;
        });
      }
  }

  
  const handleCloseWish = () => {
    const wish = isWish;
    
    if(loginUser){
      setLoader(true);
        console.log(loginUser);
        
      wishlistService.create({ tourId, userId:loginUser._id})
        .then(response => {
          consolelog(response);
        })
        .catch(e => {
          
          setLoader(false);
        });

        
        setLoader(false);
        setAddedToWishlist(true);
        setWishMsg("Added ths tour to your wish list Succesfully!");
        setIsWish(!wish);
        
    }else{
      setLoader(false);
      setIsWish(!wish);
    }
    return false;
  }


  useEffect(() => {
    setCurrency(selectedCurrency);
  }, [selectedCurrency])


  useEffect(() => {
    tourService.getAll()
      .then(response => {
        console.log(response.data);
        setTours(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, [])

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  var itemSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // custom navigation
  function Arrow(props) {
    let className =
      props.type === "next"
        ? "slick_arrow-between slick_arrow -next arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-next"
        : "slick_arrow-between slick_arrow -prev arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-prev";
    className += " arrow";
    const char =
      props.type === "next" ? (
        <>
          <i className="icon icon-chevron-right text-12"></i>
        </>
      ) : (
        <>
          <span className="icon icon-chevron-left text-12"></span>
        </>
      );
    return (
      <button className={className} onClick={props.onClick}>
        {char}
      </button>
    );
  }

  return (
    <>
      <Slider {...settings}>
        {tours && tours.data && tours.data.slice(0, 4).map((item) => (
          <div
            key={item?._id}
          >
            <Link
              href={`/tour/tour-single/${item._id}`}
              className="tourCard -type-1 rounded-4 hover-inside-slider"
            >
              <div className="tourCard__image position-relative">
                <div className="inside-slider">
                  <Slider
                    {...itemSettings}
                    arrows={true}
                    nextArrow={<Arrow type="next" />}
                    prevArrow={<Arrow type="prev" />}
                  >
                    {item && item.gallery && item.gallery.map((slide, i) => {
                      return <div className="cardImage ratio ratio-1:1" key={i}>
                        <div className="cardImage__content ">
                          <img
                            width={300}
                            height={300}
                            className="col-12 js-lazy"
                            src={slide}
                            alt="image"
                          />
                        </div>
                      </div>
                })}
                  </Slider>

                  <div className="cardImage__wishlist">
                    
                  {!isInWishList(item._id) && <button  className={"button -blue-1 bg-white size-30 rounded-full shadow-2"}>
                    <i className="icon-heart"></i>
                  </button>}

                  {isInWishList(item._id) &&
                    <button className={"button -blue-1 bg-white size-30 rounded-full shadow-2"}>
                    <i style={{color:'red'}} className="icon-heart mr-10"></i></button>}
                    
                  </div>

                  <div className="cardImage__leftBadge">
                    <div
                      className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${
                        isTextMatched(item?.tag, "likely to sell out*")
                          ? "bg-dark-1 text-white"
                          : "bg-blue-1 text-white"
                      } ${
                        isTextMatched(item?.tag, "best seller")
                          ? "bg-blue-1 text-white"
                          : "bg-blue-1 text-white"
                      }  ${
                        isTextMatched(item?.tag, "top rated")
                          ? "bg-yellow-1 text-dark-1"
                          : "bg-blue-1 text-white"
                      }`}
                    >
                      {item?.tag ?? 'Best Seller'}
                    </div>
                  </div>
                </div>
              </div>
              {/* End .tourCard__image */}

              <div className="tourCard__content mt-10">
                <div className="d-flex items-center lh-14 mb-5">
                  <div className="text-14 text-light-1">
                    {item?.duration}+ hours
                  </div>
                  <div className="size-3 bg-light-1 rounded-full ml-10 mr-10" />
                  <div className="text-14 text-light-1">{item?.type}</div>
                </div>
                <h4 className="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                  <span>{item?.name}</span>
                </h4>
                <p className="text-light-1 lh-14 text-14 mt-5">
                  {item?.location}
                </p>

                <div className="row justify-between items-center pt-15">
                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <div className="d-flex items-center x-gap-5">
                        <div className="icon-star text-yellow-1 text-10" />
                        <div className="icon-star text-yellow-1 text-10" />
                        <div className="icon-star text-yellow-1 text-10" />
                        <div className="icon-star text-yellow-1 text-10" />
                        <div className="icon-star text-yellow-1 text-10" />
                      </div>
                      {/* End ratings */}

                      <div className="text-14 text-light-1 ml-10">
                        {item?.rating} reviews
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="text-14 text-light-1">
                      From
                      <span className="text-16 fw-500 text-dark-1">
                        {" "}
                        {currency.symbol}{(item?.price * currency.rate).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>

 
      <Dialog
        open={isWish}
        onClose={handleCloseWish}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"

      >
      <DialogTitle id="alert-dialog-title">
          <div class="d-flex justify-content-between">
          <div>{"Add to Wish List"}</div>
          <i style={{cursor: 'pointer'}} onClick={handleCloseWish} class="icon-close"></i>
          </div>
        </DialogTitle>
        <DialogContent style={{ width: '600px' }}>
            {loginUser ? wishMsg : <LoginForm modal={true} />}
        </DialogContent>
      </Dialog>

    </>
  );
};

export default Tours;
