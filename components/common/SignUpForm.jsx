import Link from "next/link";
import { useState ,useEffect} from "react";
import { TextField, InputLabel, Button, Select, MenuItem } from "@mui/material";
import SignupDataService from "../../../services/signup.service";
import {  useRouter } from "next/router";
import Router from "next/router";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword,setConformPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userRole, setUserRole] = useState('user');
  const [errors, setErrors] = useState({ name: '', email: '', password: '', phoneNumber: '', userRole: '', photos: '' })
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
      SignupDataService.get(id)
        .then(response => {
          setFirstName(response.data.data.firstName);
          setLastName(response.data.data.lastName);
          setPhotos([response.data.data.photo]);
          setEmail(response.data.data.email);
          setPassword(response.data.data.password);
          setConformPassword(response.data.data.conformpassword);
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

  const add = () => {
    if (firstName.length == 0) {
      setErrors({ ...errors, name: ' Name can not be empty' });
    } else if (email.length == 0) {
      setErrors({ ...errors, email: 'email is required' })
    } else if (password.length < 8) {
      setErrors({ ...errors, password: 'password is required' })
    } else if (phoneNumber.length <= 10) {
      setErrors({ ...errors, phoneNumber: 'phoneNumber is required' })
    } else if (userRole.length == 0) {
      setErrors({ ...errors, userRole: 'userRole is required' })
    } else if (photos.length == 0) {
      setErrors({ ...errors, photos: 'Upload a photo can not be empty' });
    }
    if (id) {
      SignupDataService.update(id, { firstName, lastName, email, password, phoneNumber, userRole })
        .then(response => {
          Router.push("/vendor-dashboard/add-user")
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

    } else {
      SignupDataService.create({ firstName, lastName, email, password, phone: phoneNumber, role: userRole, photo })
        .then(response => {
          Router.push("/vendor-dashboard/users")
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

    }
    if (id) {
      SignupDataService.delete(id)
        .then(response => {
          Router.push('/vendor-dashboard/add-user')
          console.log(response.data);
        }).catch(e => {
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
    <form className="row y-gap-20">
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
          <input type="text" required />
          <label className="lh-1 text-14 text-light-1">FirstName</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-14 text-light-1">LastName</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-14 text-light-1">Email</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="password" required />
          <label className="lh-1 text-14 text-light-1">Password</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="password" required />
          <label className="lh-1 text-14 text-light-1">ConfirmPassword</label>
        </div>
      </div>
      {/* End .col */}
      <div className="col-12">
        <div className="form-input ">
          <input type="number" required />
          <label className="lh-1 text-14 text-light-1">phoneNumber</label>
        </div>
      </div>
      <div className="col-12">
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
      </div><br />
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
        <Button className='button h-30 px-24 .dark-1 bg-blue-1 text-white' variant="outlined" onClick={() => add()}>submit</Button>
      </div>

      <div className="col-12">
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
      </div>
      {/* End .col */}

      <div className="col-12">
        <button
          type="submit"
          href="#"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          Sign Up <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
      {/* End .col */}
    </form>
  );
};

export default SignUpForm;
