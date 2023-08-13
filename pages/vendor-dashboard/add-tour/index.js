import Seo from "../../../components/common/Seo";
import Sidebar from "../common/Sidebar";
import Header from "../../../components/header/dashboard-header";
import SettingsTabs from "./components/index";
import Footer from "../common/Footer";
import Router from "next/router";
import { useEffect, useState } from "react";
import TourDataService from "../../../services/tour.service";
import MultiFields from "./components/multiFields";
import { useRouter } from "next/router";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";


const index = () => {

  const tabs = [
    {
      label: "Content",
      labelNo: 1,
    },
    {
      label: "Information",
      labelNo: 2,
    },
    {
      label: "Gallery",
      labelNo: 3,
    },
    {
      label: "Itinerary",
      labelNo: 4,
    }
  ];

  const [tabIndex, setTabIndex] = useState(0);

  const router = useRouter();
  const id = router.query.id;
  const [tour, setTour] = useState(null);
  const [itineraryFields, setItineraryFields] = useState([{
    name: '', photos: [], details: '', duration: '', place: '', address: '', longitude: '', latitude: '', zoom: '',
  }]);

  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else {
      TourDataService.get(id)
        .then(response => {

          const langs = response.data.data.languages[0].split(",");
          // langs.forEach((lang) => {
          //   console.log(JSON.parse(lang));
          // });
          console.log(response.data.data);
          const highlights = [];
          const highlightsArray = JSON.parse(response.data.data.highlights);
          highlightsArray.forEach((h) => {
            highlights.push(h.highlight);
          })
          response.data.data.highlights = highlights;

          const includes = [];
          const includesArray = JSON.parse(response.data.data.includes);
          console.log(includesArray);
          includesArray.forEach((h) => {
            includes.push(h.include);
          })
          response.data.data.includes = includes;

          const notIncludes = [];
          const notIncludesArray = JSON.parse(response.data.data.notIncludes);
          notIncludesArray.forEach((h) => {
            notIncludes.push(h.notInclude);
          })
          response.data.data.notIncludes = notIncludes;


          const inclusions = [];
          const inclusionsArray = JSON.parse(response.data.data.inclusions);
          inclusionsArray.forEach((h) => {
            inclusions.push(h.Inclusion);
          })
          response.data.data.inclusions = inclusions;

          const exclusions = [];
          const exclusionsArray = JSON.parse(response.data.data.exclusions);
          exclusionsArray.forEach((h) => {
            exclusions.push(h.exclusion);
          })
          response.data.data.exclusions = exclusions;

          const knowThings = [];
          const knowThingsArray = JSON.parse(response.data.data.knowThings);
          knowThingsArray.forEach((h) => {
            knowThings.push(h.knowThing);
          })
          response.data.data.knowThings = knowThings;

          const informations = [];
          const informationsArray = JSON.parse(response.data.data.informations);
          informationsArray.forEach((h) => {
            informations.push(h.information);
          })
          response.data.data.informations = informations;

          const departureDetails = [];
          const departureDetailsArray = JSON.parse(response.data.data.departureDetails);
          departureDetailsArray.forEach((h) => {
            departureDetails.push(h.departureDetail);
          })
          response.data.data.departureDetails = departureDetails;



          setTour(response.data.data);
          //       setTour(toursData.find((item) => item.id == id));

          console.log(includes);
        })
        .catch(e => {
          console.log(e);
        });
    }

    return () => { };
  }, [id]);

  const [images, setImages] = useState([]);
  const [itineraryImages, setItineraryImages] = useState([]);
  const [featurePhotos, setFeaturePhotos] = useState([]);
  const [error, setError] = useState("");

  const addFieldsToTour = (section, fields) => {
    setTour({ ...tour, [section]: JSON.stringify(fields) })
  }

  const handleItineraryFieldsChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...itineraryFields];
    list[index][name] = value;
    setItineraryFields(list);
  }

  const addItineryField = () => {
    setItineraryFields([...itineraryFields, {
      name: '', photos: [], details: '', duration: '', place: '', address: '', longitude: '', latitude: '', zoom: '',
    }])
  }

  const removeItineryFields = (index) => {
    const rows = [...itineraryFields];
    rows.splice(index, 1);
    setItineraryFields(rows);
  }

  const handleItineraryRemoveImage = (index, imageIndex) => {
    const list = [...itineraryImages];
    list[index].splice(imageIndex, 1);
    setItineraryImages(list);


  };

  const handleItineraryFileUpload = (even, index) => {
    const ids = event.target.id.split("_")
    const imageIndex = parseInt(ids[1]);
    const fileList = even.target.files;
    const newImages = [];
    const maxSize = 800; // in pixels

    const list = [...itineraryFields];
    console.log(list);
    list[index]['photos'] = fileList;

    setItineraryFields([...list]);


    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const reader = new FileReader();

      reader.onloadend = () => {
        const img = new Image();
        img.onload = () => {
          if (img.width > maxSize || img.height > maxSize) {
            setError(
              `Image ${file.name} exceeds the maximum size of ${maxSize}px.`
            );
          } else if (
            !["image/png", "image/jpeg"].includes(file.type.toLowerCase())
          ) {
            setError(
              `Image ${file.name} is not a valid file type. Only PNG and JPEG are allowed.`
            );
          } else {
            newImages.push(reader.result);
            if (newImages.length === fileList.length) {
              console.log(imageIndex)
              const list = [...itineraryImages];
              console.log(list)
              // if(list[imageIndex] && list[imageIndex].length == 0){
              //   list[imageIndex] = [];
              // }

              if (list[imageIndex] && list[imageIndex].length > 0) {
                newImages.forEach((img) => {
                  list[imageIndex].push(img)
                });
              } else {
                list[imageIndex] = newImages;
              }

              console.log(list)
              setItineraryImages(list);


              setError("");
            }

          }
        };
        img.onerror = () => {
          setError(`Image ${file.name} could not be loaded.`);
        };
        img.src = reader.result;
      };

      reader.readAsDataURL(file);
    }
  };

  const handleFileUpload = (event) => {
    const fileList = event.target.files;
    const newImages = [];
    const maxSize = 800; // in pixels
    setTour({ ...tour, photos: fileList })

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const reader = new FileReader();

      reader.onloadend = () => {
        const img = new Image();
        img.onload = () => {
          if (img.width > maxSize || img.height > maxSize) {
            setError(
              `Image ${file.name} exceeds the maximum size of ${maxSize}px.`
            );
          } else if (
            !["image/png", "image/jpeg"].includes(file.type.toLowerCase())
          ) {
            setError(
              `Image ${file.name} is not a valid file type. Only PNG and JPEG are allowed.`
            );
          } else {
            newImages.push(reader.result);
            if (newImages.length === fileList.length) {
              setImages([...images, ...newImages]);
              setError("");
            }
          }
        };
        img.onerror = () => {
          setError(`Image ${file.name} could not be loaded.`);
        };
        img.src = reader.result;
      };

      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleFeaturePhotoUpload = (event) => {
    console.log(event.target);
    const file = event.target.files[0];
    if (file) {
      const newImages = [];
      const maxSize = 800; // in pixels
      setTour({ ...tour, featurePhoto: file })

      const reader = new FileReader();

      reader.onloadend = () => {
        const img = new Image();
        img.onload = () => {
          if (img.width > maxSize || img.height > maxSize) {
            setError(
              `Image ${file.name} exceeds the maximum size of ${maxSize}px.`
            );
          } else if (
            !["image/png", "image/jpeg"].includes(file.type.toLowerCase())
          ) {
            setError(
              `Image ${file.name} is not a valid file type. Only PNG and JPEG are allowed.`
            );
          } else {
            newImages.push(reader.result);
            if (newImages.length === event.target.files.length) {
              setFeaturePhotos([...featurePhotos, ...newImages]);
              setError("");
            }
          }
        };
        img.onerror = () => {
          setError(`Image ${file.name} could not be loaded.`);
        };
        img.src = reader.result;
      };

      reader.readAsDataURL(file);
    }
  };

  const handleRemoveFeatureImage = (index) => {
    const newFeaturePhotos = [...featurePhotos];
    newFeaturePhotos.splice(index, 1);
    setFeaturePhotos(newFeaturePhotos);
  };


  const saveTour = (e) => {
    if (tour) {
      e.preventDefault();



      setTour({ ...tour, 'itinerarys': JSON.stringify(itineraryFields) });
      console.log(tour);
      var formData = new FormData();

      
      const itineraryFieldsList = itineraryFields;
      itineraryFieldsList.map((t, index) => {
        const photos = t.photos;
        itineraryFieldsList[index]['photos'] = [];
        for (const key of Object.keys(photos)) {
          formData.append('itineraryImages', photos[key])
        }
      });
      setItineraryFields(itineraryFieldsList);
      formData.append('itinerarys', JSON.stringify(itineraryFields));

      for (const key of Object.keys(tour)) {
        if (key == 'languages') {
          const langs = [];
          for (const lkey of Object.keys(tour.languages)) {
            langs.push(tour.languages[lkey])
          }
          formData.append("languages", JSON.stringify(tour.languages));
        }

        if (key !== 'itinerarys' && key !== 'featurePhoto' && key !== 'gallery') {
          formData.append(key, tour[key])
        }
      }
      formData.append('featurePhoto', tour.featurePhoto)
      for (const key of Object.keys(tour.photos)) {
        formData.append('gallery', tour.photos[key])
      }
      console.log(formData);
      TourDataService.create(formData)
        .then(response => {
          Router.push("/vendor-dashboard/tours")
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }

  return (
    <>
      <Seo pageTitle="Vendor Add Tour" />
      {/* End Page Title */}

      <div className="header-margin"></div>

      <Header />
      {/* End dashboard-header */}

      <div className="dashboard">
        <div className="dashboard__sidebar bg-white scroll-bar-1">
          <Sidebar />
          {/* End sidebar */}
        </div>
        {/* End dashboard__sidebar */}

        <div className="dashboard__main">
          <div className="dashboard__content bg-light-2">
            <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
              <div className="col-12">
                <h1 className="text-30 lh-14 fw-600">Add Tour</h1>
                <div className="text-15 text-light-1">
                  This seciton for adding New Tour
                </div>
              </div>
              {/* End .col-12 */}
            </div>
            {/* End .row */}

            <div className="py-30 px-30 rounded-4 bg-white shadow-3">
              <form onSubmit={saveTour}>
                <div className="col-xl-10">

                  <Tabs
                    className="tabs -underline-2 js-tabs"
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                  >
                    <TabList className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20">
                      {tabs.map((tab, index) => (
                        <Tab key={index} className="col-auto">
                          <button type="button" className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button">
                            {tab.labelNo}. {tab.label}
                          </button>
                        </Tab>
                      ))}
                    </TabList>

                    <div className="tabs__content pt-30 js-tabs-content">
                      <TabPanel
                        key={'1'}
                        className={`-tab-item-1 ${tabIndex === 1 ? "is-tab-el-active" : ""}`}
                      >
                        <div className="text-18 fw-500 mb-10">Tour Details</div>
                        <div className="row x-gap-20 y-gap-20">
                          <div className="col-12">
                            <div className="form-input ">
                              <input type="text" name="name" value={tour?.name || ''} onChange={(event) => setTour({ ...tour, name: event.target.value })} required />
                              <label className="lh-1 text-16 text-light-1">Name</label>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-input ">
                              <input type="text" name="type" value={tour?.type || ''} onChange={(event) => setTour({ ...tour, type: event.target.value })} required />
                              <label className="lh-1 text-16 text-light-1">Type</label>
                            </div>
                          </div>
                          {/* End Name */}

                          <div className="col-12">
                            <div className="form-input ">
                              <textarea required name="description" value={tour?.description || ''} onChange={(event) => setTour({ ...tour, description: event.target.value })} rows={5} defaultValue={""} />
                              <label className="lh-1 text-16 text-light-1">Overview</label>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-input ">
                              <input type="text" name="location" value={tour?.location || ''} onChange={(event) => setTour({ ...tour, location: event.target.value })} required />
                              <label className="lh-1 text-16 text-light-1">Location</label>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-input ">
                              <input type="text" name="price" value={tour?.price || ''} onChange={(event) => setTour({ ...tour, price: event.target.value })} required />
                              <label className="lh-1 text-16 text-light-1">Price</label>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-input ">
                              <input type="text" name="rating" value={tour?.rating || ''} onChange={(event) => setTour({ ...tour, rating: event.target.value })} required />
                              <label className="lh-1 text-16 text-light-1">Rating</label>
                            </div>
                          </div>


                          <div className="col-12">
                            <div className="form-input ">
                              <textarea required name="cancellation" value={tour?.cancellation || ''} onChange={(event) => setTour({ ...tour, cancellation: event.target.value })} rows={5} defaultValue={""} />
                              <label className="lh-1 text-16 text-light-1">Cancellation policy</label>
                            </div>
                          </div>


                        </div>

                        <div className="d-inline-block pt-30">
                          <button onClick={() => setTabIndex(1)} type="button" className="button h-50 px-24 -dark-1 bg-blue-1 text-white">
                            Next <div className="icon-arrow-top-right ml-15" />
                          </button>
                        </div>

                      </TabPanel>

                      <TabPanel
                        key={'2'}
                        className={`-tab-item-2 ${tabIndex === 2 ? "is-tab-el-active" : ""}`}
                      >
                        <div className="row x-gap-20 y-gap-20">
                          <div className="col-12">
                            <div className="text-18 fw-500">Highlights</div>
                          </div>

                          <div className="col-12">
                            <div className="form-input ">
                              <MultiFields addFieldsToTour={addFieldsToTour} section="highlights" fields={[{ highlight: '' }]} />
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="text-18 fw-500">Includes</div>
                          </div>

                          <div className="col-12">
                            <div className="form-input ">
                              <MultiFields addFieldsToTour={addFieldsToTour} section="includes" fields={[{ include: '' }]} />
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="text-18 fw-500">Not Includes</div>
                          </div>

                          <div className="col-12">
                            <div className="form-input ">
                              <MultiFields addFieldsToTour={addFieldsToTour} section="notIncludes" fields={[{ notInclude: '' }]} />
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="text-18 fw-500">Inclusions</div>
                          </div>

                          <div className="col-12">
                            <div className="form-input ">
                              <MultiFields addFieldsToTour={addFieldsToTour} section="inclusions" fields={[{ Inclusion: '' }]} />
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="text-18 fw-500">Departure details</div>
                          </div>

                          <div className="col-12">
                            <div className="form-input ">
                              <MultiFields addFieldsToTour={addFieldsToTour} section="departureDetails" fields={[{ departureDetail: '' }]} />
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="text-18 fw-500">Know before you go</div>
                          </div>

                          <div className="col-12">
                            <div className="form-input ">
                              <MultiFields addFieldsToTour={addFieldsToTour} section="knowThings" fields={[{ knowThing: '' }]} />
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="text-18 fw-500">Exclusions</div>
                          </div>

                          <div className="col-12">
                            <div className="form-input ">
                              <MultiFields addFieldsToTour={addFieldsToTour} section="exclusions" fields={[{ exclusion: '' }]} />
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="text-18 fw-500">Additional Information</div>
                          </div>

                          <div className="col-12">
                            <div className="form-input ">
                              <MultiFields addFieldsToTour={addFieldsToTour} section="informations" fields={[{ information: '' }]} />
                            </div>
                          </div>

                        </div>


                        <div className="row x-gap-20 y-gap-20">

                          <div className="col-12">
                            <div className="form-input ">
                              <input type="text" name="duration" value={tour?.duration || ''} onChange={(event) => setTour({ ...tour, duration: event.target.value })} required /> Hrs
                              <label className="lh-1 text-16 text-light-1">Duration</label>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-input ">
                              <input type="text" name="noOfPersons" value={tour?.noOfPersons || ''} onChange={(event) => setTour({ ...tour, noOfPersons: event.target.value })} required />
                              <label className="lh-1 text-16 text-light-1">No of Persons Allowed</label>
                            </div>
                          </div>


                        </div>

                        <div className="row x-gap-20 y-gap-20">

                          <div className="col-12">
                            <div className="text-18 fw-500">Languages</div>
                          </div>

                          <div className="col-12">
                            <div className="d-flex items-center form-checkbox">
                              <input type="checkbox" value={tour?.languages?.english || ''} onChange={(event) => setTour({ ...tour, languages: { ...tour?.languages, english: event.target.checked } })} />
                              <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check" />
                              </div>

                              <div className="text-15 lh-11 ml-10">English</div>
                            </div>
                          </div>


                          <div className="col-12">
                            <div className="form-checkbox">
                              <input type="checkbox" value={tour?.languages?.hindi || ''} onChange={(event) => setTour({ ...tour, languages: { ...tour?.languages, hindi: event.target.checked } })} />
                              <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check" />
                              </div>

                              <div className="text-15 lh-11 ml-10">Hindi</div>
                            </div>
                          </div>

                        </div>

                        <div className="row x-gap-20 y-gap-20">
                          <div className="col-12">
                            <div className="text-18 fw-500">FAQS</div>
                          </div>

                          <div className="col-12">
                            <div className="form-input ">
                              <MultiFields addFieldsToTour={addFieldsToTour} section="faqs" fields={[{ questions: '' }, { answers: '' }]} />
                            </div>
                          </div>
                        </div>


                        <div className="d-inline-block pt-30">
                          <button onClick={() => setTabIndex(2)} type="button" className="button h-50 px-24 -dark-1 bg-blue-1 text-white">
                            Next <div className="icon-arrow-top-right ml-15" />
                          </button>
                        </div>

                      </TabPanel>

                      <TabPanel
                        key={'3'}
                        className={`-tab-item-3 ${tabIndex === 3 ? "is-tab-el-active" : ""}`}
                      >
                        <div className="mt-30">
                          <div className="fw-500">Feature Photo</div>
                          <div className="row x-gap-20 y-gap-20 pt-15">
                            <div className="col-auto">
                              <div className="w-200">
                                <label htmlFor="featurePhotoUpload" className="d-flex ratio ratio-1:1">
                                  <div className="flex-center flex-column text-center bg-blue-2 h-full w-1/1 absolute rounded-4 border-type-1">
                                    <div className="icon-upload-file text-40 text-blue-1 mb-10" />
                                    <div className="text-blue-1 fw-500">Upload Image</div>
                                  </div>
                                </label>
                                <input
                                  type="file"
                                  id="featurePhotoUpload"
                                  accept="image/png, image/jpeg"
                                  className="d-none"
                                  onChange={handleFeaturePhotoUpload}
                                />
                                <div className="text-start mt-10 text-14 text-light-1">
                                  PNG or JPG no bigger than 800px wide and tall.
                                </div>
                              </div>
                            </div>
                            {/* End uploader field */}

                            {featurePhotos.map((image, index) => (
                              <div className="col-auto" key={index}>
                                <div className="d-flex ratio ratio-1:1 w-200">
                                  <img src={image} alt="image" className="img-ratio rounded-4" />
                                  <div
                                    className="d-flex justify-end px-10 py-10 h-100 w-1/1 absolute"
                                    onClick={() => handleRemoveImage(index)}
                                  >
                                    <div className="size-40 bg-white rounded-4 flex-center cursor-pointer">
                                      <i className="icon-trash text-16" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}

                            {error && <div className="col-12 mb-10  text-red-1">{error}</div>}
                          </div>
                        </div>

                        <div className="mt-30">
                          <div className="fw-500">Gallery</div>
                          <div className="row x-gap-20 y-gap-20 pt-15">
                            <div className="col-auto">
                              <div className="w-200">
                                <label htmlFor="bannerUpload" className="d-flex ratio ratio-1:1">
                                  <div className="flex-center flex-column text-center bg-blue-2 h-full w-1/1 absolute rounded-4 border-type-1">
                                    <div className="icon-upload-file text-40 text-blue-1 mb-10" />
                                    <div className="text-blue-1 fw-500">Upload Images</div>
                                  </div>
                                </label>
                                <input
                                  type="file"
                                  id="bannerUpload"
                                  multiple
                                  accept="image/png, image/jpeg"
                                  className="d-none"
                                  onChange={handleFileUpload}
                                />
                                <div className="text-start mt-10 text-14 text-light-1">
                                  PNG or JPG no bigger than 800px wide and tall.
                                </div>
                              </div>
                            </div>
                            {/* End uploader field */}

                            {images.map((image, index) => (
                              <div className="col-auto" key={index}>
                                <div className="d-flex ratio ratio-1:1 w-200">
                                  <img src={image} alt="image" className="img-ratio rounded-4" />
                                  <div
                                    className="d-flex justify-end px-10 py-10 h-100 w-1/1 absolute"
                                    onClick={() => handleRemoveImage(index)}
                                  >
                                    <div className="size-40 bg-white rounded-4 flex-center cursor-pointer">
                                      <i className="icon-trash text-16" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}

                            {error && <div className="col-12 mb-10  text-red-1">{error}</div>}
                          </div>
                        </div>

                        
                        <div className="d-inline-block pt-30">
                          <button onClick={() => setTabIndex(3)} type="button" className="button h-50 px-24 -dark-1 bg-blue-1 text-white">
                            Next <div className="icon-arrow-top-right ml-15" />
                          </button>
                        </div>
                      </TabPanel>

                      <TabPanel
                        key={'4'}
                        className={`-tab-item-4 ${tabIndex === 4 ? "is-tab-el-active" : ""}`}
                      >
                        <div className="row x-gap-20 y-gap-20">
                          <div className="col-12">
                            <div className="text-18 fw-500">Itinerary</div>
                          </div>


                          {
                            itineraryFields && itineraryFields.map((data, index) => {
                              const { fullName, emailAddress, salary } = data;
                              return <>

                                <div className="col-12">
                                  <div className="form-input ">
                                    <input type="text" name="name" value={itineraryFields[index].name} onChange={(event) => handleItineraryFieldsChange(index, event)} required />
                                    <label className="lh-1 text-16 text-light-1">Name</label>
                                  </div>
                                </div>

                                <div className="col-12">
                                  <div className="form-input ">
                                    <input type="text" name="details" value={itineraryFields[index].details} onChange={(event) => handleItineraryFieldsChange(index, event)} required />
                                    <label className="lh-1 text-16 text-light-1">Details</label>
                                  </div>
                                </div>

                                <div className="col-12">
                                  <div className="form-input ">
                                    <input type="text" name="duration" value={itineraryFields[index].duration} onChange={(event) => handleItineraryFieldsChange(index, event)} required />
                                    <label className="lh-1 text-16 text-light-1">Duration</label>
                                  </div>
                                </div>

                                <div className="col-12">
                                  <div className="form-input ">
                                    <input type="text" name="place" value={itineraryFields[index].place} onChange={(event) => handleItineraryFieldsChange(index, event)} required />
                                    <label className="lh-1 text-16 text-light-1">Place</label>
                                  </div>
                                </div>

                                <div className="col-12">
                                  <div className="form-input ">
                                    <input type="text" name="address" value={itineraryFields[index].address} onChange={(event) => handleItineraryFieldsChange(index, event)} required />
                                    <label className="lh-1 text-16 text-light-1">Address</label>
                                  </div>
                                </div>

                                <div className="col-12">
                                  <div className="form-input ">
                                    <input type="text" name="latitude" value={itineraryFields[index].latitude} onChange={(event) => handleItineraryFieldsChange(index, event)} required />
                                    <label className="lh-1 text-16 text-light-1">Latitude</label>
                                  </div>
                                </div>

                                <div className="col-12">
                                  <div className="form-input ">
                                    <input type="text" name="longitude" value={itineraryFields[index].longitude} onChange={(event) => handleItineraryFieldsChange(index, event)} required />
                                    <label className="lh-1 text-16 text-light-1">Longitude</label>
                                  </div>
                                </div>

                                <div className="col-12">
                                  <div className="form-input ">
                                    <input type="text" name="zoom" value={itineraryFields[index].zoom} onChange={(event) => handleItineraryFieldsChange(index, event)} required />
                                    <label className="lh-1 text-16 text-light-1">Zoom</label>
                                  </div>
                                </div>

                                <div className="mt-30">
                                  <div className="fw-500">Photos</div>
                                  <div className="row x-gap-20 y-gap-20 pt-15">
                                    <div className="col-auto">
                                      <div className="w-200">
                                        <label htmlFor={"itineryUpload_" + index} className="d-flex ratio ratio-1:1">
                                          <div className="flex-center flex-column text-center bg-blue-2 h-full w-1/1 absolute rounded-4 border-type-1">
                                            <div className="icon-upload-file text-40 text-blue-1 mb-10" />
                                            <div className="text-blue-1 fw-500">Upload Photos</div>
                                          </div>
                                        </label>
                                        <input
                                          type="file"
                                          id={"itineryUpload_" + index}
                                          multiple
                                          accept="image/png, image/jpeg"
                                          className="d-none"
                                          onChange={(event) => handleItineraryFileUpload(event, index)}
                                        />
                                        <div className="text-start mt-10 text-14 text-light-1">
                                          PNG or JPG no bigger than 800px wide and tall.
                                        </div>
                                      </div>
                                    </div>
                                    {/* End uploader field */}

                                    {itineraryImages && itineraryImages[index] && itineraryImages[index].map((image, imageIndex) => (
                                      <div className="col-auto" key={imageIndex}>
                                        <div className="d-flex ratio ratio-1:1 w-200">
                                          <img src={image} alt="image" className="img-ratio rounded-4" />
                                          <div
                                            className="d-flex justify-end px-10 py-10 h-100 w-1/1 absolute"
                                            onClick={() => handleItineraryRemoveImage(index, imageIndex)}
                                          >
                                            <div className="size-40 bg-white rounded-4 flex-center cursor-pointer">
                                              <i className="icon-trash text-16" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    ))}

                                    {error && <div className="col-12 mb-10  text-red-1">{error}</div>}
                                  </div>
                                </div>

                                <div className="col">
                                  {(itineraryFields.length !== 1) ? <button className="btn btn-outline-danger" onClick={removeItineryFields}>Remove</button> : ''}

                                </div>
                              </>
                            })}

                          <div className="row">
                            <div className="col-sm-12">

                              <button className="btn btn-outline-success " onClick={addItineryField}>Add New</button>
                            </div>
                          </div>
                        </div>


                        <div className="d-inline-block pt-30">
                          <button type="submit" className="button h-50 px-24 -dark-1 bg-blue-1 text-white">
                            Save Changes <div className="icon-arrow-top-right ml-15" />
                          </button>
                        </div>
                      </TabPanel>
                    </div>
                  </Tabs>




                </div>
              </form>
            </div>

            <Footer />
          </div>
          {/* End .dashboard__content */}
        </div>
        {/* End dashbaord content */}
      </div>
      {/* End dashbaord content */}
    </>
  );
};

export default index;
