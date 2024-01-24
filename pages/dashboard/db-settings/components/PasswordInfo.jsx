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

const PasswordInfo = ({loginUser}) => {
  
  const [loader, setLoader] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const [msg, setMsg] = useState(false);

  const dispatch = useDispatch()

  //const router = useRouter();

  const [errors, setErrors] = useState({ currentPassword: '', newPassword: '', rePassword: '' });
  const [error, setError] = useState("");
 
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if(loginUser){
      console.log(loginUser);
      setUserInfo(loginUser);
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

    if (currentPassword.length == 0) {
      rerrors['currentPassword'] = 'Current Passwor is required';
      error = true;
    }

    if (newPassword.length == 0) {
      rerrors['newPassword'] = 'New Password is required';
      error = true;
    }


    if (rePassword.length == 0) {
      rerrors['rePassword'] = 'Re Enter New Password is required';
      error = true;
    }

    if (newPassword !== rePassword) {
      rerrors['rePassword'] = 'New Password and Re Enter New Password must be same';
      error = true;
    }


    // if (photos.length == 0) {
    //   error = true;
    //   rerrors['photos'] = 'Photo is required';
    // }

    if (!error) {
      signupServer.changePassword(loginUser._id, { currentPassword, newPassword })
        .then(response => {
          console.log(response.data.data);
          dispatch(setUser(response.data.data));
          setMsg(response.data.msg);
          setError("");
          setErrors({ currentPassword: '', newPassword: '', rePassword: '' }); 

          setTimeout(() => {
            setMsg("");
            window.location.reload();
          }, 2000);
          //setIsRegister(true);
          //setUserId(response.data.data._id);
          setTimeout(() => { setLoader(false); window.scrollTo({ top: 10, behavior: "smooth" }); }, 1200)
        })
        .catch(e => {
          console.log(e.response);


          if(e && e.response && e.response.data && e.response.data.error){
            setError(e.response.data.error);
          }
          
          // if (e && e.code) {
          //   if(e.response && e.response.data){
          //     if(e.response.data.email){
          //       setErrors({ registerError: e.response.data.email });
          //     }
          //   }else{
          //     setError({ registerError: e.message });
          //   }
          // }
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
    {errors && errors.currentPassword !== '' && <span className="error">{errors.currentPassword}</span>}
    {errors && errors.newPassword !== '' && <span className="error">{errors.newPassword}</span>}
    {errors && errors.rePassword !== '' && <span className="error">{errors.rePassword}</span>}
    {error &&  <span className="error">{error}</span>}
      
    <form className="col-xl-9">
      <div className="row x-gap-20 y-gap-20">
        <div className="col-12">
          <div className="form-input ">
            <input type="password" value={currentPassword} onChange={(event) => { validate('currentPassword', event.target.value, 'Current Password');setCurrentPassword(event.target.value)}} required />
            <label className="lh-1 text-16 text-light-1">
              Current Password
            </label>
          </div>
        </div>
        {/* End col-12 */}

        <div className="col-12">
          <div className="form-input ">
            <input type="password" value={newPassword} onChange={(event) => { validate('newPassword', event.target.value, 'New Password');setNewPassword(event.target.value)}} required />
            <label className="lh-1 text-16 text-light-1">New Password</label>
          </div>
        </div>
        {/* End col-12 */}

        <div className="col-12">
          <div className="form-input ">
            <input type="password" value={rePassword} onChange={(event) => { validate('rePassword', event.target.value, 'Re Password');setRePassword(event.target.value)}} required />
            <label className="lh-1 text-16 text-light-1">
              New Password Again
            </label>
          </div>
        </div>
        {/* End col-12 */}

        <div className="col-12">
          <div className="row x-gap-10 y-gap-10">
            <div className="col-auto">
              <button
                type="button"
                onClick={update}
                className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
              >
                Save Changes <div className="icon-arrow-top-right ml-15" />
              </button>
            </div>
            <div className="col-auto">
              <button className="button h-50 px-24 -blue-1 bg-blue-1-05 text-blue-1">
                Cancel
              </button>
            </div>
          </div>
        </div>
        {/* End col-12 */}
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

export default PasswordInfo;
