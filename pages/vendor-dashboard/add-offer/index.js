import Seo from "../../../components/common/Seo";
import Sidebar from "../common/Sidebar";
import Header from "../../../components/header/dashboard-header";
import Footer from "../common/Footer";
import { TextField, FormControl, Button } from "@mui/material";
import { useState, useEffect } from "react";
import Box from '@mui/material/Box'


const index = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [discountPrice, setDiscountPrice] = useState('');
  const [image,setImage] = useState(null);
  
  const [errors, setErrors] = useState({ name: '', discountPrice: ''});

  const add = () => {
    const err = { ...errors };
    if (name === '') {
      err.name = 'Name is Required';
    } else {
      err.name = '';;
    }

    if (discountPrice === '' || discountPrice === 0) {
      err.discountPrice = 'Discount price is required';
    } else {
      err.discountPrice = '';
    }
    
    setErrors(err);
  }
  


   

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
                  <h1 className="text-30 lh-14 fw-600">Add Offer</h1>
                  <div className="text-15 text-light-1">
                    This seciton for adding New Offer
                  </div>
                </div>
                {/* End .col-12 */}
              </div>
              {/* End .row */}

              <div className="py-30 px-30 rounded-4 bg-white shadow-3">


                {/*Form here*/}
                  <h2>Set Location</h2>
                <form>
                  <div className="col-12">
                  <TextField style={{width:'60%'}}
                    required
                    id='name'
                    label="Name"
                    type='text'
                    error={errors.name}
                    fullwidth
                    variant='outlined'
                    placeholder='enter name' value={name} onChange={(e) => setName(e.target.value)}

                  />
                  </div>
                  <br />
                  <div className="col-12">
                  <TextField style={{width:'100%',marginTop:'10px'}}
                    optional
                    id='description'
                    label="Description (optional)"
                    type='text'
                    fullwidth
                    variant='outlined'
                    placeholder='enter description' value={description} onChange={(e) => setDescription(e.target.value)}

                  />
                  </div>
                  <br />
                  <div className="col-12">
                  <TextField style={{width:'100%',marginTop:'10px'}}
                    required
                    id='discountPrice'
                    label="DiscountPrice"
                    type='text'
                    error={errors.discountPrice}
                    fullwidth
                    variant='outlined'
                    placeholder='enter price' value={discountPrice} onChange={(e) => setDiscountPrice(e.target.value)}

                  />
                  </div>
                  <br />
                  <div className="col-12">
                   <input type='file'
                   accept="image/*"
                   onChange={(e)=>setImage(e.target.files[0])}
                   />
                   
                  </div>
                  <br/>
                  <div className="col-12">
                  <Button className='button h-30 px-24 .dark-1 bg-blue-1 text-white'variant="outlined" onClick={()=> add()}>SaveLocation</Button>
                  </div>
                </form>


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
