import Image from "next/image";
import Link from "next/link";
import offerService from "../../../services/offer.service";
import { useState, useEffect } from "react";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const AddBanner = () => {

  const [offers, setOffers] = useState([]);

  const [open, setOpen] = useState(false);

  const [offer, setOffer] = useState({name: '', photo: '', discount: ''});

  const handleClickOpen = (item) => {
    setOffer(item);
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };



  const handleTabClick = (index) => {
    setActiveTab(index);
  };


  useEffect(() => {
    offerService.getAll()
      .then(response => {
        setOffers(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, [])


  return (
    <>
      {offers && offers.data && offers.data.map((item) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade"
          data-aos-delay={100}
          key={item._id}
        >
          <div className="ctaCard -type-1 rounded-4 ">
            <div className="ctaCard__image ratio ratio-41:45">
              <img
                width={410}
                height={455}
                className="js-lazy img-ratio"
                src={item.photo}
                alt="image"
              />
            </div>
            <div className="ctaCard__content py-50 px-50 lg:py-30 lg:px-30">
              {item.discount ? (
                <>
                  <div className="text-15 fw-500 text-white mb-10">
                    Up to {item.discount}% discount
                  </div>
                </>
              ) : (
                ""
              )}

              <h4 className="text-28 lg:text-24 text-white">{item.name}</h4>
              <div className="d-inline-block mt-30">
                <Button
                  onClick={() => handleClickOpen(item)}
                  className="button px-48 py-15 -blue-1 -min-180 bg-white text-dark-1"
                >
                  Get the Offer
                </Button>
              </div>
            </div>
          </div>

        </div>
      ))}



      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"

      >
        <DialogTitle id="alert-dialog-title">
          {"Get the Offer"}
        </DialogTitle>
        <DialogContent style={{ width: '600px' }}>
          <DialogContentText className="contact-us" id="alert-dialog-description">
            <div className="row">
              <div className="col">

                <img width="400px" height="400px" src={offer.photo} alt="img" />
                <h3>{offer.name}</h3>
                <h5>{offer.discount}% Offer</h5>
              </div>
              <div className="col container">
                <form action="#" method="post">
                  <div className="form-group">
                    <div className="row">
                      <div className="col">
                        <input className="form-control" type="text" id="name" name="name" placeholder="Name" required />
                        <span className="asterisk_input1">  </span>
                      </div>
                      <div className="col">
                        <input type="tel" id="phone" name="phone" placeholder="Phone No." required />
                        <span className="asterisk_input2">  </span>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <input type="email" id="email" name="email" placeholder="Email" required />
                  </div>

                  <div className="form-group">
                    <textarea id="information" name="information" placeholder="What Information you need?" required></textarea>
                  </div>

                  {/* <div className="form-group">
                    <label for="tripType">What are you looking for?</label>
                    <select className="select" type="select" id="tripType" placeholder="Backpacking Trips" name="tripType">
                      <option>Trips</option>
                      <option>Offers</option>
                      <option>Memberships</option>
                      <option>Others</option>
                    </select>
                  </div> */}

                </form>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button class="btn btn-success" autoFocus>Submit</Button>
          <Button class="btn btn-danger" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddBanner;
