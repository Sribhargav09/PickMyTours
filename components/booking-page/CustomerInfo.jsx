import Link from "next/link";
import BookingDetails from "./sidebar/BookingDetails";
import stripeService from "../../services/stripe.service";
import axios from "axios";

import { useState ,useEffect} from "react";
import { TextField, InputLabel, Button, Select, MenuItem } from "@mui/material";
import {  useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";
import signupServer from "../../services/signup.server";
import PaymentInfo from "./PaymentInfo";
import logo from './logo.svg'

import { Hourglass } from "react-loader-spinner";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import OrderSubmittedInfo from "./OrderSubmittedInfo";



const CustomerInfo = ({tour}) => {

  const selectedCurrency = useSelector((state) => state.currency.selectedCurrency);
  const [currency, setCurrency] = useState(selectedCurrency);

  
  const [loginUser, setLoginUser] = useState(null);
  const [userToken, setUserToken] = useState("");

  //const loginUser = useSelector((state) => state.user.loginUser);
  //const userToken = useSelector((state) => state.user.token);

  useEffect(() => {
    setLoginUser(JSON.parse(sessionStorage.getItem("loginUser")));
    setUserToken(sessionStorage.getItem("token"));
  }, []);

  useEffect(() => {
    setCurrency(selectedCurrency);
  }, [selectedCurrency])


  const [customerId, setCustomerId] = useState('');
  const [isCustomerRegistered, setIsCustomerRegistered] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [userRole, setUserRole] = useState('user');
  const [errors, setErrors] = useState({ firstName: '', lastName:'', email: '', password: '', phoneNumber: '', userRole: '', photos: '', address1: '', address2: '', city: '', state: '', country: '', zipcode: '' })
  const [photo, setPhoto] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [images, setImages] = useState(null);

  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [country, setCountry] = useState('');
  const [order, setOrder] = useState(null);

  const [loading, setLoading] = useState(true);
  
  const [loader, setLoader] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const [address, setAddress] = useState({
    country:'',
    state:'',
    city:'',
    line: '',
    zipcode: '',
  });

  
  useEffect(() => {
    setAddress({...address, city:city});
  }, [city]);

  useEffect(() => {
    setAddress({...address, state:state});
  }, [state]);

  useEffect(() => {
    setAddress({...address, zipcode:zipcode});
  }, [zipcode]);

  useEffect(() => {
    setAddress({...address, country:country});
  }, [country]);

  function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}

async function displayRazorpay() {
  setLoader(true);
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    const result = await axios.post("http://localhost:8080/orders", {'amount': (tour?.price * selectedCurrency?.rate).toFixed(2), 'currency': selectedCurrency ? selectedCurrency.currency : 'INR'});

    if (!result) {
        alert("Server error. Are you online?");
        return;
    }else{
      setLoader(false);
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
        key: "rzp_test_GEkrv0JEPX9JyB", // Enter the Key ID generated from the Dashboard
        amount: amount.toString(),
        currency: currency,
        name: "Pick My Tours",
        description: "Test Transaction",
        image: { logo },
        order_id: order_id,
        handler: async function (response) {
            const data = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };

            //const result = await axios.post("https://pickmytours.com/payment/success", data);

            console.log(result);
            paymentObject.close();
            //alert("Your Payment Success");
            setOrder(result.data);
            setOrderPlaced(true)
        },
        prefill: {
            name: firstName + ' ' + lastName,
            email: email,
            contact: phone,
        },
        notes: {
            address: address1+', '+ address2+', '+city+', '+state+', '+zipcode
        },
        theme: {
            color: "#3554d1",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}

  // const paymentHandler = async (e) => {
  //   const API_URL = 'http://localhost:8080/razropay/';
  //   //const API_URL = 'httpa://pcikmytours.com:8000/';
  //   e.preventDefault();
  //   const orderUrl = `${API_URL}order`;
  //   const response = await axios.get(orderUrl);
  //   const { data } = response;
  //   const options = {
  //     key: "rzp_test_GEkrv0JEPX9JyB",
  //     name: "Pick My tours",
  //     description: "Tours and Travles Wensite",
  //     order_id: data.id,
  //     handler: async (response) => {
  //       try {
  //        const paymentId = response.razorpay_payment_id;
  //        const url = `${API_URL}capture/${paymentId}`;
  //        const captureResponse = await Axios.post(url, {})
  //        console.log(captureResponse.data);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     },
  //     theme: {
  //       color: "#686CFD",
  //     },
  //   };
  //   const rzp1 = new window.Razorpay(options);
  //   rzp1.open();
  //   };


  const router = useRouter();
  const id = '';

  // useEffect(() => {
  //   if (!id) {
  //     //setLoading(false);
  //   }
  //   else {
  //     signupServer.get(id)
  //       .then(response => {
  //         setFirstName(response.data.data.firstName);
  //         setLastName(response.data.data.lastName);
  //         setPhotos([]);
  //         setEmail(response.data.data.email);
  //         setPassword(response.data.data.password);
  //         setConfirmPassword(response.data.data.conformpassword);
  //         setPhoneNumber(response.data.data.phoneNumber);

  //         setTimeout(() => {
  //           setLoading(false)
  //           console.log('This will run after 1 second!')
  //         }, 1000);
  //         console.log(add - user);
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       });
  //   }

  //   return () => { };
  // }, [id]);

  const addUser = () => {
    let haveError = false;
    let errs = errors;
    if (firstName == '') {
      errs = { ...errs, firstName: 'First Name can not be empty' };
      haveError = true;
    }else{
      errs = { ...errs, firstName: '' };
    } 

    if (lastName == '') {
      errs = { ...errs, lastName: 'Last Name can not be empty' };
      haveError = true;
    }else{
      errs = { ...errs, lastName: '' };
    } 
    
    if (email.length == 0) {
      errs = { ...errs, email: 'email is required' };
      haveError = true;
    }else{
      errs = { ...errs, email: '' };
    } 
    
    if (password.length == 0) {
      errs = { ...errs, password: 'password is required' };
      haveError = true;
    }else{
      errs = { ...errs, password: '' };
    } 
    
    if (phone.length < 10) {
      errs = { ...errs, phone: 'phoneNumber is required' };
      haveError = true;
    }else{
      errs = { ...errs, phone: '' };
    } 
    
    if (city == '') {
      errs = { ...errs, city: ' City can not be empty' };
      haveError = true;
    }else{
      errs = { ...errs, city: '' };
    } 
    
    if (state.length == 0) {
      errs = { ...errs, state: ' State can not be empty' };
      haveError = true;
    }else{
      errs = { ...errs, state: '' };
    } 
    
    if (country.length == 0) {
      errs = { ...errs, country: ' Country can not be empty' };
      haveError = true;
    }else{
      errs = { ...errs, country: '' };
    } 
    
    if (zipcode.length == 0) {
      errs = { ...errs, zipcode: ' ZipCode can not be empty' };
      haveError = true;
    } else{
      errs = { ...errs, zipcode: '' };
    }
    
    if (address1.length == 0) {
      errs = { ...errs, address1: ' Address1 can not be empty' };
      haveError = true;
    }else{
      errs = { ...errs, address1: '' };
    } 
    
    if (address2.length == 0) {
      errs = { ...errs, address2: ' Address2 can not be empty' };
      haveError = true;
    }else{
      errs = { ...errs, address2: '' };
    }

    setErrors(errs);

    // } else if (userRole.length == 0) {
    //   errs = { ...errs, userRole: 'userRole is required' });
    //   haveError = true;
    // }

    if (!haveError) {
      // signupServer.create({ firstName, lastName, email, password, phone, role: userRole, photo:[] })
      //   .then(response => {
      //     //Router.push("/vendor-dashboard/users")
      //     setIsRegister(true);
      //     console.log(response.data);
      //     stripeService.registerCustomer({ email, name: firstName + " "+ lastName, password, phone })
      //     .then(response => {

      //       setCustomerId(response.data.data.id);
      //       setAddress({
      //         country: 'India',
      //         state,
      //         city,
      //         line: address1,
      //         postalCode: zipcode,
      //       });
      //       setIsCustomerRegistered(true);
      //       console.log(response);

      //     })
      //     .catch(e => {
      //       console.log(e);
      //     })

      //   })
      //   .catch(e => {
      //     console.log(e);
      //   });

      displayRazorpay();

    }

  }

  return (
    <>
      {!orderPlaced && <><div className="col-xl-7 col-lg-8 mt-30">
        <div className="py-15 px-20 rounded-4 text-15 bg-blue-1-05">
          Sign in to book with your saved details or{" "}
          <Link href="/others-pages/signup" className="text-blue-1 fw-500">
            register
          </Link>{" "}
          to manage your bookings on the go!
        </div>
        {/* End register notify */}

        <h2 className="text-22 fw-500 mt-40 md:mt-24">
          Let us know who you are
        </h2>

        <div className="row x-gap-20 y-gap-20 pt-20">
          <div className="col-6">
            <div className="form-input ">
              <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} required />
              <label className="lh-1 text-16 text-light-1">First Name</label>
            </div>
            
            <span style={{display: 'block'}} class="error">{errors && errors.firstName}</span>
          </div>

          <div className="col-6">
            <div className="form-input ">
              <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} required />
              <label className="lh-1 text-16 text-light-1">Last Name</label>
            </div>
            
          <span style={{display: 'block'}} class="error">{errors && errors.lastName}</span>
          </div>
          
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input ">
              <input type="text" value={email} onChange={(event) =>setEmail(event.target.value)} required />
              <label className="lh-1 text-16 text-light-1">Email</label>
            </div>
            
          <span style={{display: 'block'}} class="error">{errors && errors.email}</span>
          </div>

          
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input ">
              <input type="text" autoComplete="off" value={phone} onChange={(event) =>setPhone(event.target.value)} required />
              <label className="lh-1 text-16 text-light-1">Phone Number</label>
            </div>
            
          <span style={{display: 'block'}} class="error">{errors && errors.phone}</span>
          </div>
          
          {/* End col-12 */}


          <div className="col-md-6">
            <div className="form-input ">
              <input type="password" autoComplete="off" value={password} onChange={(event) =>setPassword(event.target.value)} required />
              <label className="lh-1 text-16 text-light-1">Password</label>
            </div>
            
          <span style={{display: 'block'}} class="error">{errors && errors.password}</span>
          </div>
          
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input ">
              <input type="password"autoComplete="off" value={ConfirmPassword} onChange={(event) =>setConfirmPassword(event.target.value)} required />
              <label className="lh-1 text-16 text-light-1">Confirm Password</label>
            </div>
            
          <span style={{display: 'block'}} class="error">{errors && errors.conformpassword}</span>
          </div>
          
          {/* End col-12 */}

          <div className="col-12">
            <div className="form-input ">
              <input type="text" required value={address1} onChange={(event) =>setAddress1(event.target.value)} />
              <label className="lh-1 text-16 text-light-1">
                Address line 1
              </label>
            </div>
            
            <span style={{display: 'block'}} class="error">{errors && errors.address1}</span>
          </div>
          {/* End col-12 */}

          <div className="col-12">
            <div className="form-input ">
              <input type="text" required value={address2} onChange={(event) =>setAddress2(event.target.value)} />
              <label className="lh-1 text-16 text-light-1">
                Address line 2
              </label>
            </div>
            
            <span style={{display: 'block'}} class="error">{errors && errors.address2}</span>
          </div>
          {/* End col-12 */}

          <div className="col-md-4">
            <div className="form-input ">
              <input type="text" required value={state} onChange={(event) =>setState(event.target.value)} />
              <label className="lh-1 text-16 text-light-1">
                State
              </label>
            </div>
            
            <span style={{display: 'block'}} class="error">{errors && errors.state}</span>
          </div>

          <div className="col-md-4">
            <div className="form-input ">
              <input type="text" required value={city} onChange={(event) =>setCity(event.target.value)} />
              <label className="lh-1 text-16 text-light-1">
                City
              </label>
            </div>
            
            <span style={{display: 'block'}} class="error">{errors && errors.city}</span>
          </div>
          {/* End col-12 */}

          <div className="col-md-4">
            <div className="form-input ">
              <input type="text" required value={zipcode} onChange={(event) =>setZipcode(event.target.value)} />
              <label className="lh-1 text-16 text-light-1">
                ZIP code/Postal code
              </label>
            </div>
            
            <span style={{display: 'block'}} class="error">{errors && errors.zipcode}</span>
          </div>
          {/* End col-12 */}

          <div className="col-12">
            <div className="form-input ">
              <input type="text" required value={country} onChange={(event) =>setCountry(event.target.value)} />
              <label className="lh-1 text-16 text-light-1">
                Country
              </label>
            </div>
            
            <span style={{display: 'block'}} class="error">{errors && errors.country}</span>
          </div>

          {/* <div className="col-12">
            <div className="form-input ">
              <textarea required rows={6} defaultValue={""} />
              <label className="lh-1 text-16 text-light-1">
                Special Requests
              </label>
            </div>
          </div> */}
          {/* End col-12 */}


          <div className="col-12">
            <div className="row y-gap-20 items-center justify-between">
              <div className="col-auto">
                <button
                  className="button h-60 px-24 -dark-1 bg-blue-1 text-white"
                  // disabled={currentStep === steps.length - 1}
                  onClick={addUser}
                >
                  Next <div className="icon-arrow-top-right ml-15" />
                </button>
              </div>

            </div>
          </div>

          {/* End col-12 */}
        </div>
        {/* End .row */}
      </div>
      <div className="col-xl-5 col-lg-4 mt-30">
        <div className="booking-sidebar">
          <BookingDetails tour={tour} />
        </div>
      </div>
      </>
      }


      {orderPlaced && <OrderSubmittedInfo user={loginUser} itinerary={tour?.itinerarys} tourId={tour?._id} firstName={firstName} lastName={lastName} email={email} phone={phone} address={address} order={order} />}

      {/* End .col-xl-7 */}

      
      {/*  */}
      <Dialog
        open={loader}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"

      >
        <DialogTitle id="alert-dialog-title">
          
        </DialogTitle>
        <DialogContent style={{ width: '100%', textAlign:'center' }}>
        <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CustomerInfo;
