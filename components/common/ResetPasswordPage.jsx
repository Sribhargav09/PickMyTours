// ResetPasswordPage.jsx

import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you use react-router-dom for routing
import axios from 'axios';

const ResetPasswordPage = () => {
  const { token } = useParams();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [resetStatus, setResetStatus] = useState(null);
  const [msg, setMsg] = useState('');


  const handleResetPassword = async () => {
    try {
      const response = await axios.post('/reset-password', {
        email,
        token,
        newPassword,
      });

      // Assuming the server returns a success message
      setResetStatus(response.data);
    } catch (error) {
      // Handle errors (e.g., token expired, invalid token)
      console.error(error.response.data);
      setResetStatus('Password reset failed');
    }
  };

  return (
    <>
          {msg && <div class="success">Your Reset Password Succesfully!.</div>}

          {!msg &&<div>
      <h2>Reset Password</h2>

      <div className="col-12">
          <div className="form-input ">
            <input type="text" value={email}
          onChange={(e) => setEmail(e.target.value)} required />
            <label className="lh-1 text-14 text-light-1">Email*</label>
          </div>
        </div>
      


        <div className="col-12 mt-10">
          <div className="form-input ">
            <input type="password" value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)} required />
            <label className="lh-1 text-14 text-light-1">New Password*</label>
          </div>
        </div>
      
        <div className="col-12 mt-10">
          <button
            type="button"
            onClick={handleResetPassword}
            className="button py-20 -dark-1 bg-blue-1 text-white w-100"
          >
            Reset Password<div className="icon-arrow-top-right ml-15" />
          </button>
        </div>

      {resetStatus && <p>{resetStatus}</p>}
    </div>}
    </>

  );
};

export default ResetPasswordPage;
