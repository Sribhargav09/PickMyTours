const Address = () => {
  const addressContent = [
    {
      id: 1,
      colClass: "col-lg-3",
      title: "Address",
      content: (
        <>H.No 2, 23-522/78/A, Krishnaveni Nagar, Tulasi Nagar, HMT Hills, Kukatpally, Hyderabad, Telangana 500072, India.</>
      ),
    },
    {
      id: 2,
      colClass: "col-auto",
      title: "Toll Free Customer Care",
      content: (
        <>
          <a href="tel:+4733378901">(+91) 9000319957</a>
        </>
      ),
    },
    {
      id: 3,
      colClass: "col-auto",
      title: "Need live support?",
      content: (
        <>
          {" "}
          <a href="mailto:i@pickmytours.com">info@pickmytours.com</a>
        </>
      ),
    },
  ];
  return (
    <>
      {addressContent.map((item) => (
        <div className={`${item.colClass}`} key={item.id}>
          <div className="text-14 text-light-1">{item.title}</div>
          <div className="text-18 fw-500 mt-10">{item.content}</div>
        </div>
      ))}
    </>
  );
};

export default Address;
