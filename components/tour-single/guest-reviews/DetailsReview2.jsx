import Image from "next/image";
import ReviewGallery from "./ReviewGallery";
import { useState, useEffect } from "react";
import reviewService from "../../../services/review.service";

const DetailsReview2 = ({tourId}) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
      console.log(tourId);
    reviewService.getReviewsByTourId(tourId)
      .then(response => {
        setReviews(response.data.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, [])
  return (
    <div className="row y-gap-40">
      <div className="col-lg-12">
        {reviews && reviews.length > 0 && reviews.map((review) => {
          return <div className="border-bottom-light mt-20 mb-20">
            <div className="row">
              <div className="col-auto">
                <Image
                  width={60}
                  height={60}
                  src="/img/avatars/2.png"
                  alt="image"
                />
              </div>
              <div className="col-auto">
                <div className="fw-500 lh-15">{review.name}</div>
                <div className="text-14 text-light-1 lh-15">March 2022</div>

              </div>
            </div>

            <h5 className="fw-500 text-blue-1 mt-20">{review.rating}</h5>
            <p className="text-15 text-dark-1 mt-10 mb-10">
              {review.comments}
            </p>

          </div>





        })}







      </div>
    </div>
  );
};

export default DetailsReview2;
