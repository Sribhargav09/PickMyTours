import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import { useSelector, useDispatch } from 'react-redux'
import { setUser, setToken } from '../../app/features/user/userSlice';
import { Hourglass } from "react-loader-spinner";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



import signupServer from "../../services/signup.server";


const LoginForm = () => {
  const [loader, setLoader] = useState(false);
  const [userToken, setUserToken] = useState(false);

  const dispatch = useDispatch()

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '', loginError: '' });

  useEffect(() => {
    setLoader(true);
    setUserToken(sessionStorage.getItem("token"));
    setTimeout(() => {
      setLoader(false);
    if(!userToken){
      Router.push("/others-pages/login");
    }else{
      Router.push("/");
    }
    }, 1200);
  }, []);

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

  const vaidPhoneNumber = (inputtxt) => {
    var phoneno = /^\d{10}$/;
    if (inputtxt.value.match(phoneno)){
      return true;
    }
    else {
      alert("message");
      return false;
    }
  }


  const add = () => {
    setErrors({ loginError: '' });
    if (email.length == 0) {
      setErrors({ ...errors, email: 'Email is required' })
    } else if (password.length == 0) {
      setErrors({ ...errors, password: 'Password is required' })
    } else if (!validateEmailAddress(email) && !vaidPhoneNumber(email)) {
      setErrors({ ...errors, password: 'Please enter valid Email or Phone number' })
    } else {

      var check = {};
      if(validateEmailAddress(email)){
        check = {email, password}; 
      }else if(vaidPhoneNumber(email)){
        check = {phone:email, password}; 
      }

      setLoader(true);
    
      signupServer.login({ email, password })
        .then(response => {
          //Router.push("/vendor-dashboard/users")
          //setIsRegister(true);
          console.log(response.data);

          sessionStorage.setItem("loginUser", JSON.stringify(response.data.user));
          sessionStorage.setItem("token", response.data.token);
          dispatch(setUser(response.data.user));
          dispatch(setToken(response.data.token));
          setTimeout(() => {
            setLoader(false);
          
            Router.push("/dashboard/db-booking");

          }, 1500);
        })
        .catch(e => {
          
          setTimeout(() => {
          if (e && e.response.data && e.response.data.message) {
            setErrors({ loginError: e.response.data.message });
            window.scrollTo({ top: 100, behavior: "smooth" });

          }
          console.log(e);
            //Router.push("/dashboard/db-booking");
            setLoader(false);
          }, 1200);
        });

    }

  }

  return (
    <>
    <form className="row y-gap-20" >
      <div className="col-12">
        <h1 className="text-22 fw-500">Welcome back</h1>
        <p className="mt-10">
          Don&apos;t have an account yet?{" "}
          <Link href="/others-pages/signup" className="text-blue-1">
            Sign up for free
          </Link>
        </p>
      </div>
      {/* End .col */}

      <span class="error col-12">{errors && errors.loginError}</span>

      <div className="col-12">
        <div className="form-input ">
          <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} required />
          <label className="lh-1 text-14 text-light-1">Email or Phone number*</label>
        </div>
      </div>
      {/* End .col */}
      <span class="error col-12">{errors && errors.email}</span>


      <div className="col-12">
        <div className="form-input ">
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
          <label className="lh-1 text-14 text-light-1">Password*</label>
        </div>
      </div>
      {/* End .col */}
      <span class="error col-12">{errors && errors.password}</span>


      <div className="col-12">
        <a href="#" className="text-14 fw-500 text-blue-1 underline">
          Forgot your password?
        </a>
      </div>
      {/* End .col */}

      <div className="col-12">
        <button
          type="button"
          onClick={add}
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          Sign In <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
      {/* End .col */}
      
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

export default LoginForm;
