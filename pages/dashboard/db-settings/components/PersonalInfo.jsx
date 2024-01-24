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


const PersonalInfo = ({loginUser}) => {

  const [loader, setLoader] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [about, setAbout] = useState('');
  const [photo, setPhoto] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [updatedUser, setUpdatedUser] = useState([]);
  
  const [msg, setMsg] = useState(false);

  const dispatch = useDispatch()

  //const router = useRouter();

  const [errors, setErrors] = useState({ firstName: '', lastName: '', email: '', password: '', phone: '', userRole: '', photos: '', registerError: '' })
 


  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if(loginUser){
      console.log(loginUser);
      setUserInfo(loginUser);
      setFirstName(loginUser.firstName);
      setLastName(loginUser.lastName);
      setEmail(loginUser.email);
      setPhone(loginUser.phone);
      setDob(loginUser?.dob);
      setAbout(loginUser?.about);
    }
  }, [loginUser])


  //const router = useRouter();

  // const verify = () => {
  //   setLoader(true);
  //   setErrors({ registerError: '' });
  //   console.log({ code: verificationCode, id: userId });
  //   signupServer.verify({ name: firstName+" "+lastName, email: email, password: password, code: verificationCode, id: userId })
  //     .then(response => {
  //       setTimeout(() => {
  //         setLoader(false);
  //         window.scrollTo({ top: 10, behavior: "smooth" });

  //         setTimeout(() => {
  //           Router.push("/others-pages/login");
  //         }, 1000);
  //         setIsRegister(true);
  //         setIsVerified(true);
  //       }, 1500)
  //     })
  //     .catch(e => {
  //       console.log(e);
  //       setTimeout(() => {
  //         if (e && e.response && e.response.data.message) {
  //           setErrors({ registerError: e.response.data.message });
  //           window.scrollTo({ top: 10, behavior: "smooth" });
  //         } else {

  //           if (e && e.code) {
  //             setErrors({ registerError: e.message });
  //             window.scrollTo({ top: 10, behavior: "smooth" });
  //           }
  //         }
  //         setLoader(false);
  //       }, 1500)
  //     });
  // }

  const validateEmailAddress = (emailAddress) => {
    var atSymbol = emailAddress.indexOf("@");
    var dotSymbol = emailAddress.lastIndexOf(".");
    var spaceSymbol = emailAddress.indexOf(" ");

    if ((atSymbol != -1) &&
      (atSymbol != 0) &&
      (dotSymbol != -1) &&
      (dotSymbol != 0) &&
      (dotSymbol > atSymbol + 1) &&
      (emailAddress.length > dotSymbol + 1) &&
      (spaceSymbol == -1)) {
      return true;
    } else {
      return false;
    }
  }

  const validatePhoneNumber = (inputtxt) => {
    return true;
    var phoneno = /^\d{10}$/;
    if (inputtxt.value.match(phoneno)) {
      return true;
    }
    else {
      alert("message");
      return false;
    }
  }

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

    if (firstName.length == 0) {
      rerrors['firstName'] = 'First Name is required';
      error = true;
    }

    if (lastName.length == 0) {
      rerrors['lastName'] = 'Last Name is required';
      error = true;
    }

    if (email.length == 0) {
      rerrors['email'] = 'Email is required';
      error = true;
    }else if (!validateEmailAddress(email)) {
      rerrors['email'] = 'Please enter valid Email' ;
      error = true;
    }

    if (phone.length == 0) {
      rerrors['phone'] = 'Phone Number is required';
      error = true;
    }else if (!validatePhoneNumber(phone)) {
      rerrors['phone'] = 'Please enter valid Phone Number' ;
      error = true;
    }


    // if (photos.length == 0) {
    //   error = true;
    //   rerrors['photos'] = 'Photo is required';
    // }

    if (!error) {
      signupServer.update(loginUser._id, { firstName, lastName, email, phone: phone, photo, dob, about })
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
      <form>
        <AvatarUploader photo={userInfo?.photo} setPhoto={setPhoto}/>
        {/* End AvatarUploader*/}

        <div className="border-top-light mt-30 mb-30" />

        <div className="col-xl-9">
          <div className="row x-gap-20 y-gap-20">
            {/* <div className="col-12">
              <div className="form-input ">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">
                  Business Name
                </label>
              </div>
            </div> */}
            {/* End col-12 */}
            {/* <div className="col-12">
              <div className="form-input ">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">User Name</label>
              </div>
            </div> */}
            {/* End col-12 */}

            <div className="col-md-6">
              <div className="form-input ">
                <input type="text" value={firstName} onChange={(event) => { validate('firstName', event.target.value, 'First Name');setFirstName(event.target.value)}} required />
                <label className="lh-1 text-16 text-light-1">First Name</label>
              </div>
            </div>
            <span class="error col-12">{errors && errors.firstName}</span>
            {/* End col-6 */}

            <div className="col-md-6">
              <div className="form-input ">
                <input type="text" value={lastName} onChange={(event) => {validate('lastName', event.target.value, 'Last Name');setLastName(event.target.value)}} required />
                <label className="lh-1 text-16 text-light-1">Last Name</label>
              </div>
            </div>
            <span class="error col-12">{errors && errors.lastName}</span>
            {/* End col-6 */}

            <div className="col-md-6">
              <div className="form-input ">
                <input type="text" value={email} onChange={(event) => {validate('email', event.target.value, 'Email');setEmail(event.target.value)}} required />
                <label className="lh-1 text-16 text-light-1">Email</label>
              </div>
            </div>
            <span class="error col-12">{errors && errors.email}</span>
            {/* End col-6 */}

            <div className="col-md-6">
              <div className="form-input ">
                <input type="text" value={phone} onChange={(event) => {validate('phone', event.target.value, 'Phone');setPhone(event.target.value)}} />
                <label className="lh-1 text-16 text-light-1">
                  Phone Number
                </label>
              </div>
            </div>
            <span class="error col-12">{errors && errors.phone}</span>
            {/* End col-6 */}

            <div className="col-12">
              <div className="form-input ">
                <input type="date" value={dob} onChange={(event) => {validate('dob', event.target.value, 'dob');setDob(event.target.value)}} />
                <label className="lh-1 text-16 text-light-1">Birthday</label>
              </div>
            </div>
            <span class="error col-12">{errors && errors.dob}</span>
            {/* End col-6 */}

            <div className="col-12">
              <div className="form-input ">
                <textarea value={about} onChange={(event) => {validate('about', event.target.value, 'about');setAbout(event.target.value)}} rows={5} defaultValue={""} />
                <label className="lh-1 text-16 text-light-1">
                  About Yourself
                </label>
              </div>
            </div>
            <span class="error col-12">{errors && errors.about}</span>
          </div>
        </div>
        {/* End col-xl-9 */}

        <div className="d-inline-block pt-30">
          <button
            type="button"
            onClick={() => update()}
            className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
          >
            Save Changes <div className="icon-arrow-top-right ml-15" />
          </button>
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

export default PersonalInfo;
