import Seo from "../../../components/common/Seo";
import Sidebar from "../common/Sidebar";
import Header from "../../../components/header/dashboard-header";
import Footer from "../common/Footer";
import * as React from 'react';
import { useState, useEffect } from 'react';
import LocationDataService from "../../../services/location.service";
import {  useRouter } from "next/router";
import Router from "next/router";




const index = () => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({ name: '', description: '' });
 

  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    if (!id) {
      //setLoading(false);
    }
    else {
      
    }

    return () => { };
  }, [id]);



  const validateForm = () => {
   
  }

  

  return (
    <>
      <Seo pageTitle="Vendor Add Content" />
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
                <h1 className="text-30 lh-14 fw-600">Add Content</h1>
                <div className="text-15 text-light-1">
                  This seciton for adding New Content
                </div>
              </div>
              {/* End .col-12 */}
            </div>
            {/* End .row */}

            <div className="py-30 px-30 rounded-4 bg-white shadow-3">


              {/*Form here*/}
              <div>
                <form>
                  <h2>Set Content</h2>
                  <div className="col-xl-6">
                    <div className="form-input ">
                      <input type="text" name="name" value={name} required onChange={(e) => setName(e.target.value)} />
                      <label className="lh-1 text-16 text-light-1">Name</label>
                    </div>
                  </div><br></br>

                  <div className="col-12">
                    <div className="form-input ">
                      <textarea name="description" rows={3} defaultValue={""} value={description} onChange={(e) => setDescription(e.target.value)} />
                      <label className="lh-1 text-16 text-light-1">
                        Description (optional)
                      </label>
                    </div>
                  </div><br></br>

                  <div className="col-12">
                    <div className="form-input ">
                      <button type="button" className="button h-50 px-24 -dark-1 bg-blue-1 text-white" variant="contained" onClick={() => {
                        validateForm()
                      }}>Save Content</button>
                    </div>
                  </div>

                </form>
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
