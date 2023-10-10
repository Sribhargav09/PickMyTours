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

const Privacy = () => {
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
          <Image
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
              Privacy Policy
              </h1>
              <div className="text-white mt-15">
                Our Privacy Policy
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
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                Thank you for visiting Puck My Tours's website and considering our services. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you interact with our website and when you book tours and services with us. By using our website and services, you consent to the practices described in this Privacy Policy.
                </p>
              </div>


              <div className="sectionTitle -right">
                <h2 className="sectionTitle__title mt-20">Information We Collect</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  <div><strong>Personal Information:</strong> When you book a tour or subscribe to our newsletter, we may collect personal information such as your name, email address, phone number, and payment details.</div>

                  <div><strong>Usage Information:</strong> We collect information about how you interact with our website, including your IP address, browser type, device information, and pages visited.</div>

                  <div><strong>Cookies:</strong> We use cookies to enhance your browsing experience and collect data for analytical and marketing purposes. You can manage cookie preferences through your browser settings.</div>


                </p>
              </div>


              <div className="sectionTitle -right">
                <h2 className="sectionTitle__title mt-20">How We Use Your Information</h2>
                <p>We use the information we collect for the following purposes:</p>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  <div><strong>Booking and Communication:</strong>  To process your bookings, send booking confirmations, and provide customer support.</div>

                  <div><strong>Marketing:</strong> To send you promotional offers, newsletters, and updates about our services, provided you have opted in to receive such communications.</div>

                  <div><strong>Improvement:</strong> To analyze website usage data and improve our website's functionality and content.</div>

                </p>
              </div>

              <div className="sectionTitle -right">
                <h2 className="sectionTitle__title mt-20">Sharing Your Information</h2>
                <p>We may share your personal information with third parties under the following circumstances:</p>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  <div><strong>Service Providers:</strong>  We may share your information with third-party service providers who assist us in processing bookings, payment transactions, and providing customer support.</div>

                  <div><strong>Legal Compliance::</strong> We may disclose your information if required to do so by law or in response to a valid legal request.</div>

                </p>
              </div>

              <div className="sectionTitle -right">
                <h2 className="sectionTitle__title mt-20">Security</h2>
                <p>We take the security of your information seriously. We implement reasonable safeguards to protect your personal information from unauthorized access, disclosure, alteration, or destruction.</p>
              </div>

              <div className="sectionTitle -right">
                <h2 className="sectionTitle__title mt-20">Your Choices</h2>
                <p>You have the following choices regarding your personal information:</p>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  <div><strong>Opt-Out:</strong>  You can opt-out of receiving marketing communications from us at any time by following the unsubscribe instructions in our emails.</div>

                  <div><strong>Access and Update:</strong> You can request access to, update, or delete your personal information by contacting us through the contact information provided below.</div>

                </p>
              </div>

              <div className="sectionTitle -right">
                <h2 className="sectionTitle__title mt-20">Children's Privacy</h2>
                <p>Our website and services are not intended for children under the age of 18. We do not knowingly collect or maintain information from children.</p>
              </div>

              <div className="sectionTitle -right">
                <h2 className="sectionTitle__title mt-20">Changes to this Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. Any updates will be posted on this page, and the revised policy will be effective immediately upon posting.</p>
              </div>

              <div className="sectionTitle -right">
                <h2 className="sectionTitle__title mt-20">Contact Us</h2>
                <p>If you have questions or concerns about this Privacy Policy or your personal information, please contact us at:</p>

                <p>Pick My Tours</p>
                <p>(+91) 9000319957</p>
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

export default dynamic(() => Promise.resolve(Privacy), { ssr: false });
