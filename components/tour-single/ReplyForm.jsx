import Box from "@mui/material/Box";

import Stack from '@mui/material/Stack';
import { useEffect, useState } from "react";
import Rating from 'material-ui-rating'
import axios from "axios";


const ReplyForm = () => {
  const [rating, setRating] = useState('')
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [comment,setComment] = useState('');
  const [errors,setErrors] = useState({text:'',email:'',comment:'',rating:''});
  const validateForm=()=>{
    const err= {...errors};
    if(name == ''){
      err.name='text is required'
    }else{
      err.name=''
    }
    if(email == ''){
      err.email='email is required'
    }else{
      err.email=''
    }
    if(comment == ''){
      err.comment='comment is required'
    }else{
      err.comment=''
    }
    if(rating == ''){
      err.rating='rating is required'
    }else{
      err.rating=''
    }
    setErrors(err);

      if(!errors.name && !errors.email && !errors.comment && !errors.rating){
        const requestdata = {name:name,email:email,comments:comment,status:'not approved',tourId:1,rating:rating}
        axios.post("http://localhost:8080/create-review",requestdata)
        .then(data=>console.log(data.data));
      }

    }
  
  return (
    <form className="row y-gap-30 pt-20">
      <div className="col-xl-6">
        <div className="form-input ">
          <input type="text" value={name}  onChange={(e)=>setName(e.target.value)} required error={errors.name} />
          <label className="lh-1 text-16 text-light-1">Name</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-xl-6">
        <div className="form-input ">
          <input type="text" value={email}  onChange={(e)=>setEmail(e.target.value)} required error={errors.email}/>
          <label className="lh-1 text-16 text-light-1">Email</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <textarea required rows={4} defaultValue={""} value={comment} onChange={(e)=>setComment(e.target.value)} error={errors.comment}/>
          <label className="lh-1 text-16 text-light-1">
            Write Your Comment
          </label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <h6>Start Rating</h6>
          <br/>
          <Rating
            value={5}
            error={errors.rating}
            max={5}
            onChange={(value) => setRating(`Rated with value ${value}`)}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-auto">
        <button
          type="button" onClick={()=>validateForm()}
          className="button -md -dark-1 bg-blue-1 text-white"
        >
          Post Comment <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
      {/* End .col */}
    </form>
  );
  };


export default ReplyForm;
