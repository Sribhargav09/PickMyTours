import axios from 'axios';
import React, { useState } from 'react';
import signupServer from "../../../services/signup.server";


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const Subscribe = () => {
  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleClose =() => {
    setLoader(false);
  }

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

  const subscribeHandler = async () => {

   
    try {
      setError('');
      if(email === ''){
        setError("Please enter email address");
      } else if (!validateEmailAddress(email)) {
        setError('Please enter valid Email')
      }else{
        const response = await signupServer.subscribe({ email });
        setLoader(true);
        setMessage(response.data.msg === 'subscribed' ? 'Thanks for Subscription.Your Email Id added to subscription list' : 'Your Email Id already added to subscription');
      }
    }
    catch { }
  };
  return (
    <>
      <form >
        <div className="relative single-field  d-flex justify-end items-center mb-30">
        <input
          className="bg-white rounded-8"
          type="email" value={email} onChange={(e) => setEmail(e.target.value)}  onkeyup={() => setError("")}
          placeholder="Your Email"
          required
        />
        <button
          type="button"
          onClick={subscribeHandler}
          className="absolute px-20 h-full text-15 fw-500 underline  button bg-blue-1 text-white"
        >
          Subscribe
        </button>
        </div>
        {error&& <div><span className="error">{error}</span></div>}
      </form>


      <Dialog
        open={loader}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"

      >
        <DialogTitle id="alert-dialog-title">
          <div class="d-flex justify-end ">
          <i style={{cursor: 'pointer'}} onClick={handleClose} class="icon-close"></i>
          </div>
        </DialogTitle>
        <DialogContent style={{ width: '100%', textAlign: 'center' }}>
          {message}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Subscribe;
