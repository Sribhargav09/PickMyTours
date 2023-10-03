import Box from "@mui/material/Box";

import { useEffect, useState } from "react";
import Stack from '@mui/material/Stack';
import axios from "axios";
import Rating from '@mui/material/Rating';
import reviewService from "../../services/review.service";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const ReplyForm = ({tourId}) => {
  const [rating, setRating] = useState('');
  const [location, setLocation] = useState(0);
  const [clean, setClean] = useState(0);
  const [staff, setStaff] = useState(0);
  const [wifi, setWifi] = useState(0);
  const [comfort, setComfort] = useState(0);
  const [facility, setFacility] = useState(0);
  const [money, setMoney] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState({ text: '', email: '', comment: '', rating: '' });
  const [photo, setPhoto] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);

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

  
  
  
  const validateForm = () => {
    const err = {};
    let error = false;
    if (name == '') {
      err['name'] = 'Name is required';
      error = true;
    } 
    
    if (email == '') {
      err['email'] = 'Email is required';
      error = true;
    } 
    
    if (comment == '') {
      err['comment'] = 'Comment is required';
      error = true;
    } 
    
    if (rating == '') {
      err['rating'] = 'Rating is required';
      error = true;
    }
    
    if (!error) {
      const requestdata = { name: name, 
        email: email, 
        comments: comment, 
        status: 'not approved', 
        tourId, 
        rating: rating,
        location,
        wifi,
        money,
        clean,
        facility,
        staff,
        comfort,
        photo
      };

      
      reviewService.create(requestdata)
      .then(response => {
       
        setRatingSubmitted(true);

        setTimeout(() => {
          window.location.reload();
        }, 1200);
      })
      .catch(e => {

        console.log(e);
      });


    }else{
      setErrors(err);
    }

  }



  const replyReviewContent = [
    {
      id: 1,
      reasonOfreview: "Location",
      ratings: (
        <>
          <Rating onChange={(event) => setLocation(event.target.value)}
            name="size-small" size="small" />
        </>
      ),
    },
    {
      id: 2,
      reasonOfreview: "Staff",
      ratings: (
        <>
          <Rating onChange={(event) => setStaff(event.target.value)}
            name="size-small" size="small" />
        </>
      ),
    },
    {
      id: 3,
      reasonOfreview: "Cleanliness",
      ratings: (
        <>
          <Rating onChange={(event) => setClean(event.target.value)}
            name="size-small" size="small" />
        </>
      ),
    },
    {
      id: 4,
      reasonOfreview: "Value for money",
      ratings: (
        <>
          <Rating onChange={(event) => setMoney(event.target.value)}
            name="size-small" size="small" />
        </>
      ),
    },
    {
      id: 5,
      reasonOfreview: "Comfort",
      ratings: (
        <>
          <Rating onChange={(event) => setComfort(event.target.value)}
            name="size-small" size="small" />
        </>
      ),
    },
    {
      id: 6,
      reasonOfreview: "Facilities",
      ratings: (
        <>
          <Rating onChange={(event) => setFacility(event.target.value)}
            name="size-small" size="small" />
        </>
      ),
    },
    {
      id: 7,
      reasonOfreview: "Free WiFi",
      ratings: (
        <>
          <Rating onChange={(event) => setWifi(event.target.value)}
            name="size-small" size="small" />
        </>
      ),
    },
  ];

  return (
    <>
    <form className="row y-gap-30 pt-20">

      <section className="mt-40 border-top-light pt-40">
        <div className="container">
        <div className="row y-gap-30 justify-between">
            <div className="col-xl-3">
              <div className="row">
                <div className="col-auto">
                  <h3 className="text-22 fw-500">Leave a Reply</h3>
                  <p className="text-15 text-dark-1 mt-5">
                    Your email address will not be published.
                  </p>
                </div>
              </div>

              <div className="row y-gap-30 pt-30">
                {replyReviewContent.map((item) => (
                  <div className="col-sm-6" key={item.id}>
                    <div className="text-15 lh-1 fw-500">{item.reasonOfreview}</div>
                    <div className="d-flex x-gap-5 text-15 items-center pt-10">
                      {item.ratings}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-xl-8 row py-10">
              <div className="col-xl-6">
                <div className="form-input ">
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} required error={errors.name} />
                  <label className="lh-1 text-16 text-light-1">Name</label>
                </div>
                <span class="error">{errors && errors.name}</span>

              </div>
           

              <div className="col-xl-6">
                <div className="form-input ">
                  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required error={errors.email} />
                  <label className="lh-1 text-16 text-light-1">Email</label>
                </div>
                <span class="error">{errors && errors.email}</span>
              </div>

              <div className="col-12 py-10">
                <div className="form-input ">
                  <textarea required rows={4} defaultValue={""} value={comment} onChange={(e) => setComment(e.target.value)} error={errors.comment} />
                  <label className="lh-1 text-16 text-light-1">
                    Write Your Comment
                  </label>
                </div>
                <span class="error">{errors && errors.comment}</span>
              </div>

              <div className="col-12 d-flex py-10">
                <h6>Start Rating</h6>
                <Rating className="px-10 py-5" onChange={(event) => setRating(event.target.value)}
                  name="size-small" size="small" />
                <span class="error">{errors && errors.rating}</span>

              </div>

              <div className="col-12">
          <div className="mt-30">
            <div className="fw-500">Your Photo</div>
            <div className="row x-gap-20 y-gap-20 pt-15">
              <div className="col-auto">
                <div className="w-100">
                  <label htmlFor="featurePhotoUpload" className="d-flex ratio ratio-2:1">
                    <div style={{width:'100px'}} className="flex-center  flex-column text-center bg-blue-2 w-1/1 absolute rounded-4 border-type-1">
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
          

        </div>

              <div className="col-auto">
                <button
                  type="button" onClick={() => validateForm()}
                  className="button -md -dark-1 bg-blue-1 text-white"
                >
                  Post Comment <div className="icon-arrow-top-right ml-15" />
                </button>
              </div>
            </div>
          </div>


          {/* End .row */}
        </div>
        {/* End .container */}
      </section>


      {/* End .col */}
    </form>

    <Dialog
        open={ratingSubmitted}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"

      >
        <DialogTitle id="alert-dialog-title">
          
        </DialogTitle>
        <DialogContent style={{ width: '600px' }}>
        Rating Submitted Successfully!
        </DialogContent>
      </Dialog>

</>
  );
};


export default ReplyForm;
