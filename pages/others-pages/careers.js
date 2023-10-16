import dynamic from "next/dynamic";
import CallToActions from "../../components/common/CallToActions";
import Seo from "../../components/common/Seo";
import DefaultHeader from "../../components/header/default-header";
import DefaultFooter from "../../components/footer/default";
import WhyChoose from "../../components/block/BlockGuide";
import Block1 from "../../components/about/Block1";
import Image from "next/image";
import Counter from "../../components/counter/Counter";
import Team1 from "../../components/team/Team1";
import Testimonial from "../../components/testimonial/Testimonial";
import Counter2 from "../../components/counter/Counter2";
import Brand from "../../components/brand/Brand";

const Careers = () => {
  return (
    <>
      <Seo pageTitle="About" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <section className="section-bg layout-pt-lg layout-pb-md">
        <div className="section-bg__item col-12">
          <img
            width={1920}
            height={400}
            src="/img/pages/about/1.png"
            alt="image"
            priority
          />
        </div>
        {/* End section-bg__item */}

        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <h1 className="text-40 md:text-25 fw-600 text-white">
              Join our team
              </h1>
              <div className="text-white mt-15">
              Join us in our mission of empowering people to achieve personal growth by making real human connections.
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End About Banner Section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center">
            <div className="col-auto">
              <div className="sectionTitle -right">
                <h2 className="sectionTitle__title">Welcome</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                Welcome to Pick My Tours's Careers Page!

We're thrilled that you're interested in joining our team. At Pick My Tours, we're passionate about creating unforgettable travel experiences for our clients. We believe in the power of exploration, adventure, and building connections across the globe.
                </p>
              </div>

              <div className="sectionTitle mt-20">
                <h2 className="sectionTitle__title">Our Mission and Values</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                At Pick My Tours, we're guided by a set of core values that define who we are and how we operate. These values include:

<div>Passion for Travel: We're driven by a love for travel and a desire to share the world's wonders with others.
Customer-Centric: Our clients' satisfaction is at the heart of everything we do.
Innovation: We embrace new technologies and ideas to enhance the travel experience.
Diversity and Inclusion: We celebrate diversity and strive to create an inclusive workplace.
Environmental Responsibility: We're committed to sustainable and responsible tourism.   </div>             </p>
              </div>



              <div className="sectionTitle mt-20">
                <h2 className="sectionTitle__title">Why Join Pick My Tours?</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                Exciting Opportunities: From tour guides to travel consultants, we offer a wide range of career paths for passionate individuals.
                        Global Reach: Our work takes us to incredible destinations around the world, allowing you to explore and learn.
                        Team Collaboration: We foster a collaborative and supportive work environment where everyone's contributions are valued.
                        Career Growth: We provide opportunities for skill development and career advancement within the company.
                        Impactful Work: Your work with us directly contributes to making travel dreams come true.</p>
              </div>



            </div>
          </div>
          {/* End .row */}

          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Why Choose Us section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Careers), { ssr: false });
