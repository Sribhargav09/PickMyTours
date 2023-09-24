import React from "react";
import './Noresults.css'

const Noresults = () => {
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

                        <p>Thank you for choosing Pick Your Tour as your trusted travel partner. We look forward to serving you on your next adventure!</p>

                        <p>Fot best offrs, Contact Our Agent</p>
                        <div class="mt-30 d-flex justify-between">
                            <div class="text-14 mt-30">Toll Free Customer Care <a href="tel:(+91) 9000319957" class="text-18 fw-500 text-blue-1 mt-5">(+91) 9000319957</a></div>
                        <div class="text-14 mt-30">Need live support?<a href="mailto:info@pickmytours.com" class="text-18 fw-500 text-blue-1 mt-5">info@pickmytours.com</a></div></div>
            </div>
        </div >
            </div >
        </>
    );
}

export default Noresults;
