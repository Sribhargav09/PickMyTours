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

const Terms = () => {
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
                Terms and Conditions
              </h1>
              <div className="text-white mt-15">
                Our terms and conditions
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
                <h2 className="sectionTitle__title mt-20">Booking and Payment</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  <div><strong>Reservation:</strong> All bookings are subject to availability and confirmation by Pick My tours. A booking is considered confirmed when payment is received and you receive a booking confirmation from us.</div>

                  <div><strong>Payment:</strong> We accept various payment methods, including credit cards, bank transfers, and cash. Payment schedules and deposit requirements may vary depending on the tour package. Details will be provided during the booking process.</div>
                </p>
              </div>


              <div className="sectionTitle -right">
                <h2 className="sectionTitle__title mt-20">Cancellation and Refunds</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  <div><strong>Cancellation by Client:</strong> Cancellation policies are outlined in each tour package. Clients are responsible for reviewing and understanding these policies. Refunds, if applicable, will be processed based on these policies.</div>

                  <div><strong>Cancellation by Pick My tours:</strong> We reserve the right to cancel a tour due to unforeseen circumstances, such as extreme weather or insufficient bookings. In such cases, clients will be provided with alternative options or a full refund.</div>
                </p>
              </div>


              <div className="sectionTitle -right">
                <h2 className="sectionTitle__title mt-20">Travel Documents and Insurance</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  <div><strong>Travel Documents:</strong>  It is the client's responsibility to ensure they have valid passports, visas, and any other required travel documents. We are not liable for any issues arising from incomplete or incorrect travel documents.</div>

                  <div><strong>Travel Insurance:</strong> We strongly recommend that clients obtain comprehensive travel insurance covering trip cancellation, medical emergencies, and personal belongings.</div>
                </p>
              </div>

              <div className="sectionTitle -right">
                <h2 className="sectionTitle__title mt-20">Health and Safety</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  <div><strong>Health Requirements:</strong>  Some tours may have specific health and fitness requirements. Clients are responsible for assessing their suitability for the chosen tour and seeking medical advice if necessary.</div>

                  <div><strong>Safety:</strong> Clients must follow safety guidelines provided by tour guides and adhere to local laws and regulations. We are not liable for accidents, injuries, or losses resulting from non-compliance.</div>
                </p>
              </div>


              <div className="sectionTitle -right">
                <h2 className="sectionTitle__title mt-20">Changes and Itinerary Alterations</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  <div><strong>Alterations by Pick My Tours:</strong>  We reserve the right to make changes to the itinerary, accommodations, or transportation due to unforeseen circumstances. Clients will be informed of any changes as soon as possible.</div>

                  <div><strong>Alterations by Client:</strong>  Requests for itinerary changes by clients are subject to availability and additional costs. Any such changes must be requested in writing and confirmed by Pick My Tours.</div>
                </p>
              </div>

              <div className="sectionTitle -right">
                <h2 className="sectionTitle__title mt-20">Liability</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  <div><strong>Limitation of Liability:</strong>  Pick My Tours is not liable for any losses, damages, injuries, or expenses incurred by clients during the tour, except for those resulting from our negligence.</div>

                  <div><strong>Third Parties:</strong>  We are not responsible for services provided by third-party suppliers, including airlines, hotels, or tour operators, even if booked through us.</div>
                </p>
              </div>

              <div className="sectionTitle -right">
                <h2 className="sectionTitle__title mt-20">Complaints</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  <div><strong>Complaint Procedure:</strong>   In the event of a complaint, clients should notify us as soon as possible. We will make reasonable efforts to address and resolve any issues.</div>
                </p>
              </div>

              <div className="sectionTitle -right">
                <h2 className="sectionTitle__title mt-20">Governing Law and Jurisdiction</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  <div>By booking a tour with Pick My Tours, clients acknowledge and agree to these terms and conditions.</div>
                </p>
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

export default dynamic(() => Promise.resolve(Terms), { ssr: false });
