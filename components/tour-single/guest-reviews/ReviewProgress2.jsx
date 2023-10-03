import { useState, useEffect } from "react";
import reviewService from "../../../services/review.service";
const ReviewProgress2 = ({tourId}) => {

  const [overAllRating, setOverAllRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [reviewProgressContent, setReviewProgressContent] = useState([]);

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
  }, []);

  useEffect(() => {
    setTotalReviews(reviews.length);
    
    let ratings = 0;
    let locationReviews = 0;
    let staffReviews = 0;
    let moneyReviews = 0;
    let cleanReviews = 0;
    let facilityReviews = 0;
    let wifiReviews = 0;
    let comfortReviews = 0;
    reviews.map((review, index) => {
      locationReviews += parseInt(review.location);
      staffReviews += parseInt(review.staff);
      cleanReviews += parseInt(review.clean);
      moneyReviews += parseInt(review.money);
      facilityReviews += parseInt(review.facility);
      wifiReviews += parseInt(review.wifi);
      comfortReviews += parseInt(review.comfort);
      ratings += parseInt(review.rating);
      console.log(index);
      
    })

    if(reviews.length > 0){
    setTimeout(() => {
      setOverAllRating(ratings/reviews.length);
        setReviewProgressContent([
          { id: 1, reviewReason: "Location", ratings: locationReviews/reviews.length, progressPercent: ((locationReviews/reviews.length)/5)*100 +'%'  },
           { id: 2, reviewReason: "Staff", ratings:  staffReviews/reviews.length, progressPercent: ((staffReviews/reviews.length)/5)*100 +'%'  },
          {
            id: 3,
            reviewReason: "Cleanliness",
            ratings: cleanReviews/reviews.length,
            progressPercent: ((cleanReviews/reviews.length)/5)*100 +'%',
          },
          {
            id: 4,
            reviewReason: "Value for money",
            ratings: moneyReviews/reviews.length,
            progressPercent: ((moneyReviews/reviews.length)/5)*100 +'%',
          },
          { id: 5, reviewReason: "Comfort", ratings: comfortReviews/reviews.length, progressPercent: ((comfortReviews/reviews.length)/5)*100 +'%' },
          {
            id: 6,
            reviewReason: "Facilities",
            ratings: facilityReviews/reviews.length,
            progressPercent: ((facilityReviews/reviews.length)/5)*100 +'%',
          },
          {
            id: 7,
            reviewReason: "Free WiFi",
            ratings: wifiReviews/reviews.length,
            progressPercent: ((wifiReviews/reviews.length)/5)*100 +'%',
          },
        ]);
    
    }, 2000);
  }
    
  }, [reviews]);


  return (
    <>
      <div>
      <div className="d-flex items-center mt-20">
        <div className="flex-center bg-blue-1 rounded-4 size-70 text-22 fw-600 text-white">
          {overAllRating}
        </div>
        <div className="ml-20">
          <div className="text-16 text-dark-1 fw-500 lh-14">Exceptional</div>
          <div className="text-15 text-light-1 lh-14 mt-4">{totalReviews} reviews</div>
        </div>
      </div>
      {/* End .d-flex */}

      {totalReviews && totalReviews > 0  && <div className="row y-gap-20 pt-20">
        {reviewProgressContent && reviewProgressContent.length > 0 && reviewProgressContent.map((item) => (
          <div className="col-12" key={item.id}>
            <div className="d-flex items-center justify-between">
              <div className="text-15 fw-500">{item.reviewReason}</div>
              <div className="text-15 text-light-1">{item.ratings}</div>
            </div>
            <div className="progressBar mt-10">
              <div className="progressBar__bg bg-blue-2" />
              <div
                className="progressBar__bar bg-dark-1"
                style={{ width: item.progressPercent }}
              />
            </div>
          </div>
        ))}

        {/* End .col-md-4 */}
      </div>}
      </div>
      {/* End .row */}
    </>
  );
};

export default ReviewProgress2;
