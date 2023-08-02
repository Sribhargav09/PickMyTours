import HotelContent from "./content/TourContent";
import HotelPolicy from "./content/HotelPolicy";
import BannerUploader from "./content/BannerUploader";
import FeaturedUploader from "./content/FeaturedUploader";
import GalleryUploader from "./content/GalleryUploader";

const ContentTabContent = () => {
  return (
    <>
      <div className="col-xl-10">
        <div className="text-18 fw-500 mb-10">Tour Content</div>
        <div className="row x-gap-20 y-gap-20">
      <div className="col-12">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">Tour Name</label>
        </div>
      </div>
      {/* End Name */}

      <div className="col-12">
        <div className="form-input ">
          <textarea required rows={5} defaultValue={""} />
          <label className="lh-1 text-16 text-light-1">Content</label>
        </div>
      </div>
      {/* End Content */}

      {/* <div className="col-12">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">Youtube Video</label>
        </div>
      </div> */}
      {/* End youtube Video */}
    </div>
        {/* End HotelContent */}

        {/* <div className="mt-30">
          <div className="fw-500">Banner Image</div>
          <BannerUploader />
        </div> */}
        {/* End BannerUploader */}

        {/* <div className="mt-30">
          <div className="fw-500">Gallery</div>
          <GalleryUploader />
        </div> */}
        {/* End GalleryUploader */}

        <div className="border-top-light mt-30 mb-30" />
{/* 
        <div className="mt-30">
          <div className="fw-500">Featured Image</div>
          <FeaturedUploader />
        </div> */}
        {/* End FeaturedUploader */}

        <div className="d-inline-block pt-30">
          <button className="button h-50 px-24 -dark-1 bg-blue-1 text-white">
            Save Changes <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ContentTabContent;
