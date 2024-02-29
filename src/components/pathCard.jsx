import { IoIosArrowForward } from "react-icons/io";

const PathCard = ({ data }) => {
  return (
    <div className="flex gap-2">
      <p className="text-sm text-[#727D87]">{data}</p>
      <IoIosArrowForward className="cursor-pointer text-[#727D87]" size={20} />
    </div>
  );
};

export default PathCard;
