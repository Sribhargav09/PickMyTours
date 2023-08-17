import Image from "next/image";
import Link from "next/link";
import offerService from "../../../services/offer.service";
import { useState, useEffect } from "react";

const AddBanner = () => {

  const [offers, setOffers] = useState([]);

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
                <Link
                  href={'#'}
                  className="button px-48 py-15 -blue-1 -min-180 bg-white text-dark-1"
                >
                  Get the Offer
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AddBanner;
