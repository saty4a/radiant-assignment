import { FaAngleDown } from "react-icons/fa6";

const Footer = () => {
  const categories = [
    "Web Builder",
    "Hosting",
    "Data Center",
    "Robotic-Automation",
  ];

  const contact = [
    "Contact",
    "Privacy Policy",
    "Terms Of Service",
    "Categories",
    "About",
  ];

  return (
    <section className="animate bg-[#212731] flex flex-col md:flex-row gap-5 lg:gap-0 ps-4 md:ps-0 justify-evenly pt-[2rem] pb-[5rem]">
      <div className="flex flex-col gap-5">
        <p className="text-base font-normal text-white">Categories</p>
        {categories &&
          categories.map((data, index) => (
            <p
              className="text-sm font-normal text-[#B6BDC4] hover:text-white"
              key={index}
            >
              {data}
            </p>
          ))}
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-base font-normal text-white">Contact</p>
        {contact &&
          contact.map((data, index) => (
            <p
              className="text-sm font-normal text-[#B6BDC4] hover:text-white"
              key={index}
            >
              {data}
            </p>
          ))}
      </div>
      <div className="flex gap-2 items-center mt-2 md:mt-0">
        <span className="text-sm font-normal text-[#D1D6DA]">
          United States
        </span>
        <FaAngleDown className="cursor-pointer text-[#D1D6DA]" size={20} />
      </div>
    </section>
  );
};

export default Footer;
