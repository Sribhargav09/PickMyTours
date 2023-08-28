import Image from "next/image";
import Slider from "react-slick";
import { testimonial1 } from "../../data/testimonialData";

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {testimonial1.map((item) => (
          <div
            className="testimonials -type-1 bg-white rounded-4"
            key={item.id}
            data-aos="fade"
            data-aos-delay={item.dealyAnimation}
          >
            
            <div className="mb-28 ">
              <div className="row x-gap-20 y-gap-20 items-center border-bottom-light">
                <div className="col-auto">
                  <Image
                    width={60}
                    height={60}
                    src={item.avatar}
                    alt="image"
                    className="size-60"
                  />
                </div>
                <div className="col-auto">
                  <div className="text-15 fw-500 lh-14">{item.name}</div>
                  <div className="text-14 lh-14 text-light-1 mt-5">
                    {item.designation}
                  </div>
                </div>
                <div className="col-auto">
                <span class="testimonial__quote__icon"> <i class="icon-quotes-right" aria-hidden="true"></i></span>
                </div>
              </div>
            </div>
            <h4 className="text-16 fw-500 text-blue-1 mb-20">{item.meta}</h4>
            <p className="testimonials__text lh-18 fw-500 text-dark-1">
              {item.text}
            </p>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial;
