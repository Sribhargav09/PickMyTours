import Seo from "../../../components/common/Seo";
import Sidebar from "../common/Sidebar";
import Header from "../../../components/header/dashboard-header";
import Footer from "../common/Footer";
import * as React from 'react';
import { useState ,useEffect} from "react";
import { TextField, InputLabel, Button, Select, MenuItem } from "@mui/material";
import UsersDataService from "../../../services/user.service";
import {  useRouter } from "next/router";
import Router from "next/router";




const index = () => {
const [firstName,setFirstName] = useState('');
const [lastName,setLastName] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [phoneNumber,setPhoneNumber] = useState('');
const [userRole,setUserRole] = useState('');
const [errors,setErrors]= useState({name:'',email:'',password:'',phoneNumber:'',userRole:'',photos:''})
const [photo, setPhoto] = useState(null);
const [photos, setPhotos] = useState([]);
const [images, setImages] = useState(null);

const [loading, setLoading] = useState(true);


  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    if (!id) {
      //setLoading(false);
    }
    else {
      UsersDataService.get(id)
        .then(response => {
          setFirstName(response.data.data.firstName);
          setLastName(response.data.data.lastName);
          setPhotos([response.data.data.photo]);
          setEmail(response.data.data.email);
          setPassword(response.data.data.password);
          setPhoneNumber(response.data.data.phoneNumber);

          setTimeout(() => {
            setLoading(false)
            console.log('This will run after 1 second!')
          }, 1000);
          console.log(add-user);
        })
        .catch(e => {
          console.log(e);
        });
    }

    return () => { };
  }, [id]);

const add = ()=>{
  if (firstName.length == 0) {
    setErrors({ ...errors, name: ' Name can not be empty' });
  }else if(email.length == 0){
    setErrors({...errors, email:'email is required'})
  }else if(password.length<8){
    setErrors({...errors, password:'password is required'})
  }else if(phoneNumber.length<=10){
    setErrors({...errors, phoneNumber:'phoneNumber is required'})
  }else if(userRole.length == 0){
    setErrors({...errors, userRole:'userRole is required'})
  }else if (photos.length == 0) {
    setErrors({ ...errors, photos: 'Upload a photo can not be empty' });
  } 
  if (id) {
    UsersDataService.update(id, {firstName,lastName,email,password,phoneNumber,userRole})
      .then(response => {
        Router.push("/vendor-dashboard/add-user")
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });

  } else {
  UsersDataService.create({firstName,lastName,email,password,phone:phoneNumber,role:userRole, photo})
    .then(response => {
      Router.push("/vendor-dashboard/users")
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });

  }
if(id){
  UsersDataService.delete(id)
  .then(response=>{
    Router.push('/vendor-dashboard/add-user')
    console.log(response.data);
  }).catch(e=>{
    console.log(e);
  });
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
            setErrors({ ...errors, photos: "" });
          }

        }
      };
      img.onerror = () => {
        setErrors({ ...errors, photos: `Image ${file.name} could not be loaded.` });
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

  return (
    <>
      <Seo pageTitle="Vendor Add Tour" />
      {/* End Page Title */}

      <div className="header-margin"></div>

      <Header />
      {/* End dashboard-header */}

      <div className="dashboard">
        <div className="dashboard__sidebar bg-white scroll-bar-1">
          <Sidebar />
          {/* End sidebar */}
        </div>
        {/* End dashboard__sidebar */}

        <div className="dashboard__main">
          <div className="dashboard__content bg-light-2">
            <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
              <div className="col-12">
                <h1 className="text-30 lh-14 fw-600">Add User</h1>
                <div className="text-15 text-light-1">
                  This seciton for adding New User
                </div>
              </div>
              {/* End .col-12 */}
            </div>
            {/* End .row */}

            <div className="py-30 px-30 rounded-4 bg-white shadow-3">

             <form>
              <div className="col-12">
                 <TextField style={{width:'60%'}}
                    required
                    id='firstName'
                    label="FirstName"
                    type='text'
                    fullwidth
                  variant='outlined'
                    placeholder='enter firstname' value={firstName} onChange={(e) => setFirstName(e.target.value)}

                  />
                  </div><br/>
                  <div className="col-12">
                 <TextField style={{width:'60%'}}
                    id='lastName'
                    label="LastName (optional)"
                    type='text'
                    fullwidth
                    variant='outlined'
                    placeholder='enter lastname' value={lastName} onChange={(e) => setLastName(e.target.value)}

                  />
                  </div><br/>
                  <div className="col-12">
                 <TextField style={{width:'60%'}}
                    required
                    id='email'
                    label="Email"
                    type='email'
                    fullwidth
                    variant='outlined'
                    placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)}

                  />
                  </div><br/>
                  <div className="col-12">
                  <TextField style={{width:'60%'}}
                    required
                    id='password'
                    label="Password"
                    type='password'
                    fullwidth
                    variant='outlined'
                    placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)}

                  />
                  </div><br/>
                  <div className="col-12">
                  <TextField style={{width:'60%'}}
                    required
                    id='phoneNumber'
                    label="PhoneNumber"
                    type='text'
                    fullwidth
                    variant='outlined'
                    placeholder='enter phonenumber' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}

                  />
                  </div><br/>
                  <div className="col-12">
                    <InputLabel>user role</InputLabel>
                    <Select style={{width:'30%',marginTop:'5'}}
                    required
                    id='userRole'
                    label='UserRole'
                    value={userRole}
                    onChange={(e)=>setUserRole(e.target.value)}
                    >
                      <MenuItem value={'user'}>User</MenuItem>
                      <MenuItem value={'vendor'}>Vendor</MenuItem>
                      <MenuItem value={'manager'}>Manager</MenuItem>
                    </Select>
                  </div><br/>
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

                        {errors.photos && <div className="col-12 mb-10  text-red-1">{error.photos}</div>}
                      </div>
                    </div>


                  </div><br></br>

                  <div className="col-12">
                  <Button className='button h-30 px-24 .dark-1 bg-blue-1 text-white'variant="outlined" onClick={()=> add()}>submit</Button>
                  </div>
             </form>
              
              <div>
                  {/*Form here*/}
              </div>

            </div>

            <Footer />
          </div>
          {/* End .dashboard__content */}
        </div>
        {/* End dashbaord content */}
      </div>
      {/* End dashbaord content */}
    </>
  );
};

export default index;
