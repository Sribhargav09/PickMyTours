import React from "react";
import './Noresults.css';
import { useState, useEffect } from "react";


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const Noresults = () => {
    const [customize, setCustomize] = useState(false);
    const [queryAdded, setQueryAdded] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    return (
        <>
            <div className="body">
                <div className="results-card">
                    <div className="cardtitle">
                        <h3> No results found !! </h3>
                    </div>
                    <div className="cardbody">
                        <div>
                            "We apologize for any inconvenience, but it appears that there are currently no tours available for booking on our website.
                            Our team is constantly working to bring you the best travel experiences, and we encourage you to explore other destinations or check back soon for updates.
                        </div>
                        <div>In the meantime, if you have a specific destination or travel experience in mind, please feel free to contact our friendly customer support team. They'll be delighted to assist you in finding alternative options or help you plan your dream trip for the future.</div>

                        <div class="d-flex justify-content-center px-20 py-20">
                            <button onClick={() => setCustomize(true)} class="button px-30 fw-400 text-14 -blue-1 bg-blue-1 h-50 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>                                <span class="px-20">Customize your Plan</span>
                            </button>
                        </div>

                        <p>Thank you for choosing Pick Your Tour as your trusted travel partner. We look forward to serving you on your next adventure!</p>

                        <p>Fot best offrs, Contact Our Agent</p>
                        <div class="mt-30 d-flex justify-between">
                            <div class="text-14 mt-30">Toll Free Customer Care <a href="tel:(+91) 9000319957" class="text-18 fw-500 text-blue-1 mt-5">(+91) 9000319957</a></div>
                            <div class="text-14 mt-30">Need live support?<a href="mailto:info@pickmytours.com" class="text-18 fw-500 text-blue-1 mt-5">info@pickmytours.com</a></div></div>
                    </div>
                </div >
            </div >

            <Dialog
                open={customize}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"

            >
                <DialogTitle id="alert-dialog-title">

                    <div class="d-flex justify-content-between">
                        <div>{"Need Assistance"}</div>
                        <i style={{ cursor: 'pointer' }} onClick={() => setCustomize(false)} class="icon-close"></i>
                    </div>
                </DialogTitle>
                <DialogContent style={{ width: '100%', textAlign: 'center' }}>
                    {!queryAdded && <form className="row y-gap-20">
                        {/* End .col */}

                        <div className="col-6">
                            <div className="form-input ">
                                <input type="text" required />
                                <label className="lh-1 text-14 text-light-1">DESTINATION*</label>
                            </div>
                            <span class="error col-12"></span>

                        </div>

                        {/* End .col */}

                        <div className="col-6">
                            <div className="form-input ">
                                <input type="text" required />
                                <label className="lh-1 text-14 text-light-1">DEPARTURE CITY*</label>
                            </div>

                            <span class="error col-12"></span>
                        </div>

                        {/* End .col */}

                        <div className="col-6">
                            <div className="form-input ">
                                <input type="text" onChange={(event) => setName(event.target.value)} required />
                                <label className="lh-1 text-14 text-light-1">Name*</label>
                            </div>
                            <span class="error col-12"></span>

                        </div>

                        {/* End .col */}

                        <div className="col-6">
                            <div className="form-input ">
                                <input type="text" onChange={(event) => setPhone(event.target.value)} required />
                                <label className="lh-1 text-14 text-light-1">Phone*</label>
                            </div>

                            <span class="error col-12"></span>
                        </div>


                        <div className="col-12">
                            <div className="form-input ">
                                <input type="text" required />
                                <label className="lh-1 text-14 text-light-1">Email*</label>
                            </div>
                            <span class="error col-12"></span>
                        </div>

                        <div className="col-12">
                            <div className="form-input ">
                                <input type="text" required />
                                <label className="lh-1 text-14 text-light-1">Travel Date*</label>
                            </div>
                            <span class="error col-12"></span>
                        </div>

                        <div className="col-6">
                            <div className="form-input ">
                                <input type="text" required />
                                <label className="lh-1 text-14 text-light-1">NUMBER OF NIGHTS*</label>
                            </div>
                            <span class="error col-12"></span>

                        </div>

                        {/* End .col */}

                        <div className="col-6">
                            <div className="form-input ">
                                <input type="text" required />
                                <label className="lh-1 text-14 text-light-1">NUMBER OF TRAVELERS*</label>
                            </div>

                            <span class="error col-12"></span>
                        </div>



                        {/* End .col */}



                        {/* <div className="col-12">
        <Button className='button h-30 px-24 .dark-1 bg-blue-1 text-white' variant="outlined" onClick={() => add()}>submit</Button>
      </div> */}

                        <div className="col-12">
                            <div className="d-flex ">
                                <div className="form-checkbox mt-5">
                                    <input type="checkbox" name="name" />
                                    <div className="form-checkbox__mark">
                                        <div className="form-checkbox__icon icon-check" />
                                    </div>
                                </div>
                                <div className="text-13 py-5 lh-15 text-light-1 ml-5">
                                    Email me exclusive Agoda promotions. I can opt out later as stated
                                    in the Privacy Policy.
                                </div>
                            </div>
                        </div>
                        {/* End .col */}

                        <div className="col-12">
                            <button
                                type="button"
                                href="#"
                                className="button py-20 -dark-1 bg-blue-1 text-white w-100"
                                onClick={() => setQueryAdded(true)}
                            >
                                Submit <div className="icon-arrow-top-right ml-15" />
                            </button>
                        </div>
                        {/* End .col */}
                    </form>}
                    {queryAdded && <><h3>Thank You {name}</h3>
                        <div>Our Holiday Expert will shortly reach out to you with our best quotations on
                             {phone}</div></>}
                </DialogContent>
            </Dialog>

        </>
    );
}

export default Noresults;
