import Seo from "../../../components/common/Seo";
import Sidebar from "../common/Sidebar";
import Header from "../../../components/header/dashboard-header";
import Footer from "../common/Footer";
import * as React from 'react';
import  { useState } from 'react';




const index = () => {
  
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState(null);
  
  function validateForm() {
    
    if (name.length == 0) {
      alert(' Name can not be empty')
      return
    }

    if (photo.length == 0) {
      alert('Upload a photo can not be empty')
      return
    }
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
                <h1 className="text-30 lh-14 fw-600">Add Location</h1>
                <div className="text-15 text-light-1">
                  This seciton for adding New Location
                </div>
              </div>
              {/* End .col-12 */}
            </div>
            {/* End .row */}

            <div className="py-30 px-30 rounded-4 bg-white shadow-3">
              
              
                {/*Form here*/}
                <div>
                 <form>
                   <h2>Set Location</h2>
                   <div className="col-xl-6">
                    <div className="form-input ">
                      <input type="text"  value={name} required  onChange={(e) => setName(e.target.value)}/>
                      <label className="lh-1 text-16 text-light-1">Name</label>
                    </div>
                  </div><br></br>

                  <div className="col-12">
                     <div className="form-input ">
                          <textarea rows={3} defaultValue={""} />
                          <label className="lh-1 text-16 text-light-1">
                          Description (optional)
                          </label>
                     </div>
                  </div><br></br>
                  
                <div className="col-12">
                  <div className="form-input ">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => setPhoto(e.target.files[0])}
                          required
                        />
                      </div>
                      </div><br></br>

                  <div className="col-12">
                    <div className="form-input ">
                    <button  className="button h-50 px-24 -dark-1 bg-blue-1 text-white" variant="contained" onClick={() => {
            validateForm()
          }}>Save Location</button>
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
