import { FaCheck } from "react-icons/fa6";

// if whyReasons are present then here it is dsiplayed
const WhyWeLove = ({ whyReasons }) => {
  return (
    <div className="flex flex-col gap-2 mt-5 text-center lg:text-start">
      <p className="text-base text-[#2C384A] font-normal">Why we love it</p>
      {whyReasons &&
        whyReasons.map((data, index) => (
          <div className="flex gap-2" key={index}>
            <div className="rounded-full bg-[#EBF5FF] pt-[0.3rem] px-[0.3rem]">
              <FaCheck className="cursor-pointer text-[#0855A1]" size={15} />
            </div>
            <p className="text-[#4B5665] text-base font-normal">{data}</p>
          </div>
        ))}
    </div>
  );
};

export default WhyWeLove;
