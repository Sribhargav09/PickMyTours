import Link from "next/link";
import BookingDetails from "./sidebar/BookingDetails";
import stripeService from "../../services/stripe.service";

import { useState ,useEffect} from "react";
import { TextField, InputLabel, Button, Select, MenuItem } from "@mui/material";
import {  useRouter } from "next/router";
import Router from "next/router";
import signupServer from "../../services/signup.server";
import PaymentInfo from "./PaymentInfo";


const CustomerInfo = ({tour}) => {

  const [customerId, setCustomerId] = useState('');
  const [isCustomerRegistered, setIsCustomerRegistered] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [userRole, setUserRole] = useState('user');
  const [errors, setErrors] = useState({ firstName: '', lastName:'', email: '', password: '', phoneNumber: '', userRole: '', photos: '' })
  const [photo, setPhoto] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [images, setImages] = useState(null);

  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');

  const [loading, setLoading] = useState(true);
  const [isRegister, setIsRegister] = useState(false);

  const [address, setAddress] = useState({
    country:'',
    state:'',
    city:'',
    line: '',
    postalCode: '',
  });


  const router = useRouter();
  const id = '';

  useEffect(() => {
    if (!id) {
      //setLoading(false);
    }
    else {
      signupServer.get(id)
        .then(response => {
          setFirstName(response.data.data.firstName);
          setLastName(response.data.data.lastName);
          setPhotos([]);
          setEmail(response.data.data.email);
          setPassword(response.data.data.password);
          setConfirmPassword(response.data.data.conformpassword);
          setPhoneNumber(response.data.data.phoneNumber);

          setTimeout(() => {
            setLoading(false)
            console.log('This will run after 1 second!')
          }, 1000);
          console.log(add - user);
        })
        .catch(e => {
          console.log(e);
        });
    }

    return () => { };
  }, [id]);

  const addUser = () => {
    let haveError = false;
    if (firstName.length == 0) {
      setErrors({ ...errors, name: ' Name can not be empty' });
      haveError = true;
    } else if (email.length == 0) {
      setErrors({ ...errors, email: 'email is required' });
      haveError = true;
    } else if (password.length == 0) {
      setErrors({ ...errors, password: 'password is required' });
      haveError = true;
    } else if (phone.length < 10) {
      setErrors({ ...errors, phone: 'phoneNumber is required' });
      haveError = true;
    }
    // } else if (userRole.length == 0) {
    //   setErrors({ ...errors, userRole: 'userRole is required' });
    //   haveError = true;
    // }

    if (!haveError) {
      signupServer.create({ firstName, lastName, email, password, phone, role: userRole, photo:[] })
        .then(response => {
          //Router.push("/vendor-dashboard/users")
          setIsRegister(true);
          console.log(response.data);
          stripeService.registerCustomer({ email, name: firstName + " "+ lastName, password, phone })
          .then(response => {

            setCustomerId(response.data.data.id);
            setAddress({
              country: 'India',
              state,
              city,
              line: address1,
              postalCode: zipcode,
            });
            setIsCustomerRegistered(true);
            console.log(response);

          })
          .catch(e => {
            console.log(e);
          })

        })
        .catch(e => {
          console.log(e);
        });

    }
    if (id) {
      signupServer.delete(id)
        .then(response => {
          Router.push('/vendor-dashboard/add-user')
          console.log(response.data);
        }).catch(e => {
          console.log(e);
        });
    }

  }

  return (
    <>
      {!isCustomerRegistered && <><div className="col-xl-7 col-lg-8 mt-30">
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
              <span class="error">{errors && errors.firstName}</span>
            </div>
          </div>

          <div className="col-6">
            <div className="form-input ">
              <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} required />
              <label className="lh-1 text-16 text-light-1">Last Name</label>
              <span class="error">{errors && errors.lastName}</span>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input ">
              <input type="text" value={email} onChange={(event) =>setEmail(event.target.value)} required />
              <label className="lh-1 text-16 text-light-1">Email</label>
              <span class="error">{errors && errors.email}</span>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input ">
              <input type="text" autoComplete="off" value={phone} onChange={(event) =>setPhone(event.target.value)} required />
              <label className="lh-1 text-16 text-light-1">Phone Number</label>
              <span class="error">{errors && errors.phone}</span>
            </div>
          </div>
          {/* End col-12 */}


          <div className="col-md-6">
            <div className="form-input ">
              <input type="password" autoComplete="off" value={password} onChange={(event) =>setPassword(event.target.value)} required />
              <label className="lh-1 text-16 text-light-1">Password</label>
              <span class="error">{errors && errors.password}</span>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input ">
              <input type="password"autoComplete="off" value={ConfirmPassword} onChange={(event) =>setConfirmPassword(event.target.value)} required />
              <label className="lh-1 text-16 text-light-1">Confirm Password</label>
              <span class="error">{errors && errors.conformpassword}</span>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-12">
            <div className="form-input ">
              <input type="text" required value={address1} onChange={(event) =>setAddress1(event.target.value)} />
              <label className="lh-1 text-16 text-light-1">
                Address line 1
              </label>
              <span class="error">{errors && errors.address1}</span>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-12">
            <div className="form-input ">
              <input type="text" required value={address2} onChange={(event) =>setAddress2(event.target.value)} />
              <label className="lh-1 text-16 text-light-1">
                Address line 2
              </label>
              <span class="error">{errors && errors.address2}</span>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-4">
            <div className="form-input ">
              <input type="text" required value={state} onChange={(event) =>setState(event.target.value)} />
              <label className="lh-1 text-16 text-light-1">
                State
              </label>
              <span class="error">{errors && errors.state}</span>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-input ">
              <input type="text" required value={city} onChange={(event) =>setCity(event.target.value)} />
              <label className="lh-1 text-16 text-light-1">
                City
              </label>
              <span class="error">{errors && errors.city}</span>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-4">
            <div className="form-input ">
              <input type="text" required value={zipcode} onChange={(event) =>setZipcode(event.target.value)} />
              <label className="lh-1 text-16 text-light-1">
                ZIP code/Postal code
              </label>
              <span class="error">{errors && errors.zipcode}</span>
            </div>
          </div>
          {/* End col-12 */}

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

      {isCustomerRegistered && <PaymentInfo tour={tour} firstName={firstName} lastName={lastName} email={email} phone={phone} address={address} customerId={customerId}/>}
      {/* End .col-xl-7 */}

      
      {/*  */}
    </>
  );
};

export default CustomerInfo;
