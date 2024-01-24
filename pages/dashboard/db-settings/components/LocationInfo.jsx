import { useState, useEffect } from "react";
import AvatarUploader from "./AvatarUploader";
import { Hourglass } from "react-loader-spinner";
import Dialog from '@mui/material/Dialog';
import Router from "next/router";

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import signupServer from "../../../../services/signup.server";
import { useSelector, useDispatch } from 'react-redux'
import { setUser, setToken } from '../../../../app/features/user/userSlice';


const LocationInfo = ({loginUser}) => {

  const [loader, setLoader] = useState(false);
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [country, setCountry] = useState('');

  const [msg, setMsg] = useState(false);

  const dispatch = useDispatch()

  //const router = useRouter();

  const [errors, setErrors] = useState({ address1: '', address2: '', city: '', state: '', zipcode: '', country: '' })
 
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if(loginUser){
      console.log(loginUser);
      setUserInfo(loginUser);
      setAddress1(loginUser.address1);
      setAddress2(loginUser.address2);
      setCity(loginUser.city);
      setState(loginUser.state);
      setZipcode(loginUser?.zipcode);
      setCountry(loginUser?.country);
    }
  }, [loginUser])

  const validate = (name, value, label) => {
    if(value === ''){
      setErrors({...errors, [name]: label +" is required"})
    }else{
      setErrors({...errors, [name]:''});
    }
  }

  const update = () => {
    setLoader(true);
    let error = false;
    const rerrors = {};

    if (address1.length == 0) {
      rerrors['address1'] = 'Address1 is required';
      error = true;
    }

    if (address2.length == 0) {
      rerrors['address2'] = 'Address2 is required';
      error = true;
    }

    if (city.length == 0) {
      rerrors['city'] = 'City is required';
      error = true;
    }

    if (state.length == 0) {
      rerrors['state'] = 'State is required';
      error = true;
    }

    if (zipcode.length == 0) {
      rerrors['zipcode'] = 'Zipcode is required';
      error = true;
    }

    if (!country || (country && country.length == 0)) {
      rerrors['country'] = 'Country is required';
      error = true;
    }


    // if (photos.length == 0) {
    //   error = true;
    //   rerrors['photos'] = 'Photo is required';
    // }

    if (!error) {
      signupServer.update(loginUser._id, { address1, address2, city, state, zipcode, country })
        .then(response => {
          console.log(response.data.data);
          dispatch(setUser(response.data.data));
          setMsg(response.data.msg);

          setTimeout(() => {
            setMsg("");
            window.location.reload();
          }, 2000);
          //setIsRegister(true);
          //setUserId(response.data.data._id);
          setTimeout(() => { setLoader(false); window.scrollTo({ top: 10, behavior: "smooth" }); }, 1200)
        })
        .catch(e => {
          console.log(e);
          
          if (e && e.code) {
            if(e.response && e.response.data){
              if(e.response.data.email){
                setErrors({ registerError: e.response.data.email });
              }
            }else{
              setErrors({ registerError: e.message });
            }
          }
          setTimeout(() => { setLoader(false); window.scrollTo({ top: 10, behavior: "smooth" }); }, 1200)
        });

    } else {
      setTimeout(() => { setLoader(false); window.scrollTo({ top: 10, behavior: "smooth" });}, 1200)
      setErrors(rerrors);
    }

  }

  return (
    <>
    
    {msg && msg !== '' && <div className="success">{msg}</div>}
      
    <form className="col-xl-9">
      <div className="row x-gap-20 y-gap-20">
        <div className="col-12">
          <div className="form-input ">
            <input type="text" value={address1} onChange={(event) => { validate('address1', event.target.value, 'Address1');setAddress1(event.target.value)}} required />
            <label className="lh-1 text-16 text-light-1">Address Line 1</label>
          </div>
        </div>
        <span class="error col-12">{errors && errors.address1}</span>

        {/* End col-12 */}

        <div className="col-12">
          <div className="form-input ">
            <input type="text" value={address2} onChange={(event) => { validate('address2', event.target.value, 'Address2');setAddress2(event.target.value)}} required />
            <label className="lh-1 text-16 text-light-1">Address Line 2</label>
          </div>
        </div>
        <span class="error col-12">{errors && errors.address2}</span>

        {/* End col-12 */}

        <div className="col-md-6">
          <div className="form-input ">
            <input type="text" value={city} onChange={(event) => { validate('city', event.target.value, 'City');setCity(event.target.value)}} required />
            <label className="lh-1 text-16 text-light-1">City</label>
          </div>
        </div>
        <span class="error col-12">{errors && errors.city}</span>
        {/* End col-6 */}

        <div className="col-md-6">
          <div className="form-input ">
            <input type="text" value={state} onChange={(event) => { validate('state', event.target.value, 'State');setState(event.target.value)}} required />
            <label className="lh-1 text-16 text-light-1">State</label>
          </div>
        </div>
        <span class="error col-12">{errors && errors.state}</span>
        {/* End col-6 */}

        <div className="col-md-6">
          <div className="form-input ">
            <input type="text" value={country} onChange={(event) => { validate('country', event.target.value, 'Country');setCountry(event.target.value)}} required />
            <label className="lh-1 text-16 text-light-1">Select Country</label>
          </div>
        </div>
        <span class="error col-12">{errors && errors.country}</span>
        {/* End col-6 */}

        <div className="col-md-6">
          <div className="form-input ">
            <input type="text" value={zipcode} onChange={(event) => { validate('zipcode', event.target.value, 'Zipcode');setZipcode(event.target.value)}} required />
            <label className="lh-1 text-16 text-light-1">ZIP Code</label>
          </div>
        </div>
        <span class="error col-12">{errors && errors.zipcode}</span>
        {/* End col-6 */}

        <div className="col-12">
          <div className="d-inline-block">
            <button
              type="button"
              onClick={update}
              className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
            >
              Save Changes <div className="icon-arrow-top-right ml-15" />
            </button>
          </div>
        </div>
      </div>
    </form>

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

export default LocationInfo;
