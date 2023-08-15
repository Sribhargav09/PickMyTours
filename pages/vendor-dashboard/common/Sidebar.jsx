import Image from "next/image";

const Sidebar = () => {
  const sidebarData = [
    // {
    //   icon: "/img/dashboard/sidebar/booking.svg",
    //   title: "Manage Hotel",
    //   links: [
    //     { title: "All Hotel", href: "#" },
    //     { title: "Add Hotel", href: "#" },
    //     { title: "Recovery", href: "#" },
    //   ],
    // },
    {
      icon: "/img/dashboard/sidebar/map.svg",
      title: "Manage Users",
      links: [
        { title: "All Users", href: "/vendor-dashboard/users" },
        { title: "Add User", href: "/vendor-dashboard/add-user" },
        { title: "Recovery", href: "#" },
      ],
    },
    {
      icon: "/img/dashboard/sidebar/map.svg",
      title: "Manage Location",
      links: [
        { title: "All locations", href: "/vendor-dashboard/locations" },
        { title: "Add location", href: "/vendor-dashboard/add-location" },
        { title: "Recovery", href: "#" },
      ],
    },
    {
      icon: "/img/dashboard/sidebar/map.svg",
      title: "Manage Offer",
      links: [
        { title: "All Offers", href: "/vendor-dashboard/offers" },
        { title: "Add Offer", href: "/vendor-dashboard/add-offer" },
        { title: "Recovery", href: "#" },
      ],
    },
    {
      icon: "/img/dashboard/sidebar/map.svg",
      title: "Manage Tour",
      links: [
        { title: "All Tour", href: "/vendor-dashboard/tours" },
        { title: "Add Tour", href: "/vendor-dashboard/add-tour" },
        { title: "Recovery", href: "#" },
      ],
    },
    {
      icon: "/img/dashboard/sidebar/map.svg",
      title: "Manage Tour Types",
      links: [
        { title: "All Tour Types", href: "/vendor-dashboard/tour-types" },
        { title: "Add Tour Type", href: "/vendor-dashboard/add-tour-type" },
        { title: "Recovery", href: "#" },
      ],
    },
    {
      icon: "/img/dashboard/sidebar/map.svg",
      title: "Manage Testinomials",
      links: [
        { title: "All Testinomials", href: "/vendor-dashboard/testinomials" },
        { title: "Add Testinomial", href: "/vendor-dashboard/add-testinomial" },
        { title: "Recovery", href: "#" },
      ],
    },
    // {
    //   icon: "/img/dashboard/sidebar/sneakers.svg",
    //   title: "Manage Activity",
    //   links: [
    //     { title: "All Activity", href: "#" },
    //     { title: "Add Activity", href: "#" },
    //     { title: "Recovery", href: "#" },
    //   ],
    // },
    // {
    //   icon: "/img/dashboard/sidebar/house.svg",
    //   title: "Manage Holiday Rental",
    //   links: [
    //     {
    //       title: "All Holiday Rental",
    //       href: "#",
    //     },
    //     {
    //       title: "Add Holiday Rental",
    //       href: "#",
    //     },
    //     {
    //       title: "Recovery",
    //       href: "#",
    //     },
    //   ],
    // },
    // {
    //   icon: "/img/dashboard/sidebar/taxi.svg",
    //   title: "Manage Car",
    //   links: [
    //     {
    //       title: "All Car",
    //       href: "#",
    //     },
    //     {
    //       title: "Add Car",
    //       href: "#",
    //     },
    //     {
    //       title: "Recovery",
    //       href: "#",
    //     },
    //   ],
    // },
    // {
    //   icon: "/img/dashboard/sidebar/canoe.svg",
    //   title: "Manage Cruise",
    //   links: [
    //     {
    //       title: "All Cruise",
    //       href: "#",
    //     },
    //     {
    //       title: "Add Cruise",
    //       href: "#",
    //     },
    //     {
    //       title: "Recovery",
    //       href: "#",
    //     },
    //   ],
    // },
    // {
    //   icon: "/img/dashboard/sidebar/airplane.svg",
    //   title: "Manage Flights",
    //   links: [
    //     {
    //       title: "All Flights",
    //       href: "#",
    //     },
    //     {
    //       title: "Add Flights",
    //       href: "#",
    //     },
    //     {
    //       title: "Recovery",
    //       href: "#",
    //     },
    //   ],
    // },
  ];

  return (
    <>
      <div className="sidebar -dashboard" id="vendorSidebarMenu">
        <div className="sidebar__item ">
          <a
            href="db-dashboard.html"
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <Image
              width={20}
              height={20}
              src="/img/dashboard/sidebar/compass.svg"
              alt="image"
              className="mr-15"
            />
            Dashboard
          </a>
        </div>
        {/* End accordion__item */}

        <div className="sidebar__item ">
          <a
            href="#"
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <Image
              width={20}
              height={20}
              src="/img/dashboard/sidebar/booking.svg"
              alt="image"
              className="mr-15"
            />
            Booking Manager
          </a>
        </div>
        {/* End accordion__item */}

        {sidebarData.map((item, index) => (
          <div className="sidebar__item" key={index}>
            <div className="accordion -db-sidebar js-accordion">
              <div className="accordion__item">
                <div
                  className="accordion__button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#sidebarItem${index}`}
                >
                  <div className="sidebar__button col-12 d-flex items-center justify-between">
                    <div className="d-flex items-center text-15 lh-1 fw-500">
                      <Image
                        width={20}
                        height={20}
                        src={item.icon}
                        alt="image"
                        className="mr-10"
                      />
                      {item.title}
                    </div>
                    <div className="icon-chevron-sm-down text-7" />
                  </div>
                </div>
                <div
                  id={`sidebarItem${index}`}
                  className="collapse"
                  data-bs-parent="#vendorSidebarMenu"
                >
                  <ul className="list-disc pt-15 pb-5 pl-40">
                    {item.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href={link.href} className="text-15">
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="sidebar__item ">
          <a
            href="#"
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <Image
              width={20}
              height={20}
              src="/img/dashboard/sidebar/log-out.svg"
              alt="image"
              className="mr-15"
            />
            Logout
          </a>
        </div>
        {/* End accordion__item */}
      </div>
    </>
  );
};

export default Sidebar;
