import FilterSelect from "./FilterSelect";
import MainFilterSearchBox from "./MainFilterSearchBox";

const Index = () => {
  return (
    <section className="masthead -type-10">
      <div className="container-1500">
        <div className="row">
          <div className="col-lg-auto">
            <div className="masthead__content">
              <h1
                className="text-60 lg:text-40 sm:text-30"
                ata-aos="fade-up"
                ata-aos-delay="100"
              >
                Where do You Want To Fly
              </h1>
              <p className="mt-5" ata-aos="fade-up" ata-aos-delay="200">
                Discover amzaing places at exclusive deals
              </p>
              <div ata-aos="fade-up" ata-aos-delay="300">
                <div className="row y-gap-20 items-center pt-30">
                  <FilterSelect />
                </div>
                {/* End .row */}

                <MainFilterSearchBox />
                {/* End filter content */}
              </div>
            </div>
            {/* End .masthead__content */}
          </div>
          {/* End .col-lg-auto */}
        </div>
        {/* End .row */}

        <div
          className="masthead__image"
          ata-aos="fade-left"
          ata-aos-delay="500"
        >
          <div className="row y-gap-30 flex-nowrap">
            <div className="col-auto">
              <img
                src="/img/masthead/10/1.png"
                alt="image"
                className="rounded-16"
              />
            </div>
            {/* End col-auto */}

            <div className="col-auto">
              <img
                src="/img/masthead/10/2.png"
                alt="image"
                className="rounded-16"
              />
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End .masthead__image */}
      </div>
      {/* End .container */}
    </section>
  );
};

export default Index;
