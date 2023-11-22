import Link from "next/link";
import { useState, useEffect } from "react";
import { TextField, InputLabel, Button, Select, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import Router from "next/router";
import signupServer from "../../services/signup.server";
import ReactCodeInput from 'react-verification-code-input';
import { Hourglass } from "react-loader-spinner";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [userRole, setUserRole] = useState('user');
  const [errors, setErrors] = useState({ firstName: '', lastName: '', email: '', password: '', phone: '', userRole: '', photos: '', registerError: '' })
  const [photo, setPhoto] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [userId, setUserId] = useState(null);

  const [loader, setLoader] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [enableVerify, setEnableVerify] = useState(false);



  const router = useRouter();

  const verify = () => {
    setLoader(true);
    setErrors({ registerError: '' });
    console.log({ code: verificationCode, id: userId });
    signupServer.verify({ code: verificationCode, id: userId, email: email })
      .then(response => {
        setTimeout(() => {
          setLoader(false);
          window.scrollTo({ top: 10, behavior: "smooth" });

          setTimeout(() => {
            Router.push("/others-pages/login");
          }, 1000);
          setIsRegister(true);
          setIsVerified(true);
        }, 1500)
      })
      .catch(e => {
        console.log(e);
        setTimeout(() => {
          if (e && e.response && e.response.data.message) {
            setErrors({ registerError: e.response.data.message });
            window.scrollTo({ top: 10, behavior: "smooth" });
          } else {

            if (e && e.code) {
              setErrors({ registerError: e.message });
              window.scrollTo({ top: 10, behavior: "smooth" });
            }
          }
          setLoader(false);
        }, 1500)
      });
  }

  const add = () => {
    setLoader(true);
    let error = false;
    const rerrors = {}
    if (firstName.length == 0) {
      rerrors['firstName'] = 'The firstname can not be empty';
      error = true;
    }

    if (lastName.length == 0) {
      rerrors['lastName'] = 'The lastname can not be empty';
      error = true;
    }

    if (email.length == 0) {
      rerrors['email'] = 'The email is required';
      error = true;
    }

    if (password.length == 0) {
      rerrors['password'] = 'The password is required';
      error = true;
    }

    if (phone.length < 10) {
      rerrors['phone'] = 'The phone is required';
      error = true;
    }

    if (photos.length == 0) {
      error = true;
      rerrors['photos'] = 'Upload a photo can not be empty';
    }

    if (!error) {
      signupServer.create({ firstName, lastName, email, password, phone: phone, role: userRole, photo })
        .then(response => {
          console.log(response.data);
          window.scrollTo({ top: 50, behavior: "smooth" });

          // setTimeout(() => {
          //   Router.push("/others-pages/login");
          // }, 1000);
          setIsRegister(true);
          setUserId(response.data.data._id);
          setTimeout(() => { setLoader(false); }, 1200)
        })
        .catch(e => {

          window.scrollTo({ top: 100, behavior: "smooth" });
          if (e && e.code) {
            setErrors({ registerError: e.message });
          }
          setTimeout(() => { setLoader(false); }, 1200)
        });

    } else {
      setTimeout(() => { setLoader(false); }, 1200)
      setErrors(rerrors);
      window.scrollTo({ top: 100, behavior: "smooth" });
    }

  }

  function handlePhotoUpload(event) {
    const fileList = event.target.files;

    const file = fileList[0];
    const reader = new FileReader();
    setPhoto(file);
    const newImages = [];
    const maxSize = 800;
    reader.onloadend = () => {
      const img = new Image();
      img.onload = () => {
        if (img.width > maxSize || img.height > maxSize) {
          setErrors({
            ...errors, photos:
              `Image ${file.name} exceeds the maximum size of ${maxSize}px.`
          });
        } else if (
          !["image/png", "image/jpeg"].includes(file.type.toLowerCase())
        ) {
          setErrors({
            ...errors, photos:
              `Image ${file.name} is not a valid file type. Only PNG and JPEG are allowed.`
          });
        } else {
          newImages.push(reader.result);
          if (newImages.length === fileList.length) {
            setPhotos([...photos, ...newImages]);
            setErrors({
              ...errors, photos: ""
            });
          }

        }
      };
      img.onerror = () => {
        setErrors({
          ...errors, photos: `Image ${file.name} could not be loaded.`
        });
      };
      img.src = reader.result;
    };
    console.log(newImages);
    console.log(errors);
    setPhotos([...newImages]);
    reader.readAsDataURL(file);
  }

  const handleRemovePhoto = (index) => {
    const newPhotos = [...photos];
    newPhotos.splice(index, 1);
    setPhotos(newPhotos);
  };

  const handleVerificationCode = (value) => {
    if (value.length < 4) {
      setEnableVerify(false);
    } else {
      setVerificationCode(value);
      setEnableVerify(true);
    }
  }

  return (
    <>
      <span class="error col-12">{errors && errors.registerError}</span>
      {!isRegister && <form className="row y-gap-20">
        <div className="col-12">
          <h1 className="text-22 fw-500">Welcome back</h1>
          <p className="mt-10">
            Already have an account yet?{" "}
            <Link href="/others-pages/login" className="text-blue-1">
              Log in
            </Link>
          </p>
        </div>
        {/* End .col */}

        <div className="col-12">
          <div className="form-input ">
            <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} required />
            <label className="lh-1 text-14 text-light-1">First Name*</label>
          </div>
        </div>

        <span class="error col-12">{errors && errors.firstName}</span>
        {/* End .col */}

        <div className="col-12">
          <div className="form-input ">
            <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} required />
            <label className="lh-1 text-14 text-light-1">Last Name*</label>
          </div>
        </div>
        <span class="error col-12">{errors && errors.lastName}</span>

        {/* End .col */}

        <div className="col-12">
          <div className="form-input ">
            <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} required />
            <label className="lh-1 text-14 text-light-1">Email*</label>
          </div>
        </div>
        <span class="error col-12">{errors && errors.email}</span>

        {/* End .col */}

        <div className="col-12">
          <div className="form-input ">
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
            <label className="lh-1 text-14 text-light-1">Password*</label>
          </div>
        </div>
        <span class="error col-12">{errors && errors.password}</span>

        {/* End .col */}

        <div className="col-12">
          <div className="form-input ">
            <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required />
            <label className="lh-1 text-14 text-light-1">Confirm Password*</label>
          </div>
        </div>
        <span class="error col-12">{errors && errors.confirmPassword}</span>

        {/* End .col */}
        <div className="col-12">
          <div className="form-input ">
            <input type="number" value={phone} onChange={(event) => setPhone(event.target.value)} required />
            <label className="lh-1 text-14 text-light-1">Phone</label>
          </div>
        </div>

        <span class="error col-12">{errors && errors.phone}</span>
        {/* <div className="col-12">
        <InputLabel>user Role</InputLabel>
        <Select style={{ width: '30%', marginTop: '5' }}
          required
          id='userRole'
          label='UserRole'
          value={userRole}
          onChange={(e) => setUserRole(e.target.value)}
        >
          <MenuItem value={'user'}>User</MenuItem>
          <MenuItem value={'vendor'}>Vendor</MenuItem>
          <MenuItem value={'manager'}>Manager</MenuItem>
        </Select>
      </div><br /> */}
        <div className="col-12">
          <div className="mt-30">
            <div className="fw-500">Feature Photo</div>
            <div className="row x-gap-20 y-gap-20 pt-15">
              <div className="col-auto">
                <div className="w-200">
                  <label htmlFor="featurePhotoUpload" className="d-flex ratio ratio-1:1">
                    <div className="flex-center flex-column text-center bg-blue-2 h-full w-1/1 absolute rounded-4 border-type-1">
                      <div className="icon-upload-file text-40 text-blue-1 mb-10" />
                      <div className="text-blue-1 fw-500">Upload Image</div>
                    </div>
                  </label>
                  <input
                    type="file"
                    name="photo"
                    id="featurePhotoUpload"
                    accept="image/png, image/jpeg"
                    className="d-none"
                    onChange={handlePhotoUpload}
                  />
                  <div className="text-start mt-10 text-14 text-light-1">
                    PNG or JPG no bigger than 800px wide and tall.
                  </div>
                </div>
              </div>
              {/* End uploader field */}

              {photos.map((image, index) => (
                <div className="col-auto" key={index}>
                  <div className="d-flex ratio ratio-1:1 w-200">
                    <img src={image} alt="image" className="img-ratio rounded-4" />
                    <div
                      className="d-flex justify-end px-10 py-10 h-100 w-1/1 absolute"
                      onClick={() => handleRemovePhoto(index)}
                    >
                      <div className="size-40 bg-white rounded-4 flex-center cursor-pointer">
                        <i className="icon-trash text-16" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {errors.photos && <div className="col-12 mb-10  text-red-1">{errors.photos}</div>}
            </div>
          </div>


        </div><br></br>
        {/* <div className="col-12">
        <Button className='button h-30 px-24 .dark-1 bg-blue-1 text-white' variant="outlined" onClick={() => add()}>submit</Button>
      </div> */}

        {/* <div className="col-12">
        <div className="d-flex ">
          <div className="form-checkbox mt-5">
            <input type="checkbox" name="name" />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
          </div>
          <div className="text-15 lh-15 text-light-1 ml-10">
            Email me exclusive Agoda promotions. I can opt out later as stated
            in the Privacy Policy.
          </div>
        </div>
      </div> */}
        {/* End .col */}

        <div className="col-12">
          <button
            type="button"
            href="#"
            onClick={() => add()}
            className="button py-20 -dark-1 bg-blue-1 text-white w-100"
          >
            Sign Up <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
        {/* End .col */}
      </form>}
      {isRegister && !isVerified && <>
        <h4 className="mb-20">{"Verify Your Email Address"}</h4>
        <div style={{ textAlign: 'center', padding: 10, margin: 'auto' }}>
          <p>Please enter the 4-digit verification code we sent via SMS:</p>
          <div className="mb-20" >(we want to make sure it's your email id verified)</div>
          <div lassName="mt-50 mb-20"><ReactCodeInput fields={4} onChange={handleVerificationCode} onComplete={setEnableVerify} /></div>
          <button style={{ opacity: !enableVerify ? 0.5 : 1 }} className="button px-30 mt-50 ml-50 fw-400 text-14 -blue-1 bg-blue-1 h-50 text-white" type="button" onClick={verify} disabled={!enableVerify}>Verifiy</button>

        </div>
      </>}
      {isRegister && isVerified && <div class="success"><p>Thanks for Signup. <br />Redirection to Login page</p> <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      /></div>}

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

export default SignUpForm;
