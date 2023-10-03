const ImportantInfo = ({tourData}) => {
  return (
    <div className="row x-gap-40 y-gap-40 justify-between pt-20">

{tourData?.departureDetails && <div className="col-lg-4 col-md-4">
        <div className="fw-500 mb-10">Departure details</div>
        <div className="text-15">
        <ul className="list-disc">
        {tourData?.departureDetails && tourData.departureDetails.map((h) => {
          return <li>{h}</li>
        })}
        </ul>
        </div>
      </div>}

      {tourData?.knowThings && <div className="col-md-4">
        <div className="fw-500 mb-10">Know before you go</div>
        <ul className="list-disc">
        {tourData?.knowThings && tourData.knowThings.map((h) => {
          return <li>{h}</li>
        })}
        </ul>
      </div>}

      
      {tourData?.informations && <div className="col-md-4">
        <div className="fw-500 mb-10">Additional information</div>
        <ul className="list-disc">
        {tourData?.informations && tourData.informations.map((h) => {
          return <li>{h}</li>
        })}
        </ul>
      </div>}

      {tourData?.inclusions && <div className="col-md-4">
        <div className="fw-500 mb-10">Inclusions</div>
        <ul className="list-disc">
        {tourData?.inclusions && tourData.inclusions.map((h) => {
          return <li>{h}</li>
        })}
        </ul>
      </div>}


      {tourData?.exclusions && <div className="col-md-4">
        <div className="fw-500 mb-10">Exclusions</div>
        <ul className="list-disc">
        {tourData?.exclusions && tourData.exclusions.map((h) => {
          return <li>{h}</li>
        })}
        </ul>
      </div>}

      <div className="col-md-4">
      </div>

    </div>
  );
};

export default ImportantInfo;
