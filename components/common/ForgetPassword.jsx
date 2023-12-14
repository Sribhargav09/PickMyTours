// ForgotPasswordForm.jsx

import React, { useState } from 'react';
import signupServer from '../../services/signup.server';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call backend API to initiate password reset
    // You can use a library like Axios to make API calls
    signupServer.forgetpassword({ email })
        .then(response => {
          //Router.push("/vendor-dashboard/users")
          //setIsRegister(true);
          console.log(response.data);

          setTimeout(() => {
            setLoader(false);
            setMsg(true);

          }, 1500);
        })
        .catch(e => {

          setTimeout(() => {
            setLoader(false);
          }, 1200);
        });
  };

  return (
    <>
    {msg && <div class="success">Reset Password link sent to your email.</div>}
    <form onSubmit={handleSubmit}>

    <div className="col-12">
          <div className="form-input ">
            <input type="text" value={email}
          onChange={(e) => setEmail(e.target.value)} required />
            <label className="lh-1 text-14 text-light-1">Email*</label>
          </div>
        </div>

        <div className="col-12 mt-10">
          <button
            type="button"
            className="button py-20 -dark-1 bg-blue-1 text-white w-100"
          >
            Reset Password<div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
    </form>
    </>
  );
};

export default ForgotPasswordForm;
