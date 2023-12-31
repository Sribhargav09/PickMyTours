import AccordionContent from "./ItineraryContent";
import MapPropertyFinder from "./MapPropertyFinder";

const index = ({tourData}) => {
  return (
    <div className="row y-gap-30">
      <div className="col-lg-6">
        <div className="relative">
          <div className="border-test" />
          <div className="accordion -map row y-gap-20" id="itineraryContent">
            <AccordionContent data={tourData?.itinerarys} />
          </div>
        </div>
      </div>
      {/* End col-lg-4 */}

      <div className="col-lg-6">
        <div className="map rounded-4 overflow-hidden">
          <MapPropertyFinder />
        </div>
      </div>
      {/* End col-lg-8 */}
    </div>
  );
};

export default index;
