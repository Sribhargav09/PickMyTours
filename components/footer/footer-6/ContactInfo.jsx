const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Toll Free Customer Care",
      action: "tel:(+91) 9000319957",
      text: "(+91) 9000319957",
    },
    {
      id: 2,
      title: "Need live support?",
      action: "mailto:info@pickmytours.com",
      text: "info@pickmytours.com",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mt-30" key={item.id}>
          <div className="mt-30">
            <div className="text-14 mt-30">{item.title}</div>
            <a href="#" className="text-18 fw-500 mt-5">
              {item.text}
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
