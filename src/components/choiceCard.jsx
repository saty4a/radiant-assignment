import Image from "next/image";
import { IoDiamondOutline } from "react-icons/io5";
import { IoTrophyOutline } from "react-icons/io5";
import computer from "../assets/computerImage.png";
import { FaAngleDown } from "react-icons/fa6";
import HighlightReasons from "./highlightReasons";
import WhyWeLove from "./whyWeLove";

const ChoiceCard = ({ data, index }) => {
  return (
    <div
      className={`choice-card bg-[#FFFFFF] rounded-xl mt-5 shadow hover:shadow-lg ${
        index > 0 ? "reveal" : "animate"
      }`}
    >
      {index <= 1 ? ( 
        <div className="choice-promo flex w-[10rem] bg-[#FF7724] items-center p-2 rounded-r-xl gap-2"> {/* checking the indexes to display the best choice and best value tag on choice card */}
          {index === 0 ? (
            <IoTrophyOutline className="cursor-pointer text-white" size={20} />
          ) : (
            <IoDiamondOutline className="cursor-pointer text-white" size={20} />
          )}
          <p className="text-white font-normal text-base">
            {index === 0 ? "Best Choice" : "Best Value"}
          </p>
        </div>
      ) : (
        ""
      )}
      <div className="choice-index rounded-full border border-2 border-[#E1E4E600]"> {/* display the number of choice */}
        <span className="text-xl font-normal text-[#626E79] text-center">
          {index + 1}
        </span>
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly mx-5">
        <div className="w-full lg:w-[15rem] mt-[3rem] flex flex-col justify-center items-center">
          <Image
            src={computer}
            height={0}
            width={0}
            objectFit="contain"
            layout="responsive"
            className="choice-card-image mx-0 lg:mx-3"
            alt="logo"
          />
          <p className="text-sm text-[#626E79] text-center mt-2 font-normal"> {/* display the image name */}
            {data?.imageName}
          </p>
        </div>
        <div className="text-base w-full lg:w-[36rem] my-[1.5rem] mx-0 lg:mx-[2.5rem]"> 
          <p className="font-bold text-[#4B5665]"> {/* display the heading and content */}
            {data?.Heading}
            <span className="font-normal">{data?.headingContent}</span>
          </p>
          {data?.discount && (
            <div className="bg-[#F2F4F7] w-[4rem] rounded-md mt-4"> {/*check if there is discount and then display it */}
              <p className="text-sm text-[#074786] ps-1 py-1">
                {data.discount} Off
              </p>
            </div>
          )}
          <p className="font-bold text-[#2C384A]">Main highlights</p> {/*check if the highlights have points if true then call HighlightReasons to display it or simply display it*/}
          {data?.highlights?.reasonOne ? (
            <HighlightReasons highlightReasons={data.highlights} /> 
          ) : (
            <p className="font-normal text-[#4B5665] ms-5">{data.highlights}</p>
          )}
          {data.whyReason && <WhyWeLove whyReasons={data.whyReason} />} {/*check if the reasons are there if true display it*/}
          <div className="flex gap-2 items-center text-[#1B88F4] mt-5">
            <span className="font-normal">Show more</span>
            <FaAngleDown className="cursor-pointer" size={20} />
          </div>
        </div>
        <div className="flex flex-col justify-between items-start md:items-center"> {/*display rating number and remark*/}
          <div className="font-normal w-[10rem] text-[#074786] rounded lg:rounded-b-2xl bg-[#F3F9FF] flex flex-col gap-3 items-center px-[2rem] py-[0.7rem]">
            <p className=" text-[32px]">{data.ratingNumber}</p>
            <p className="text-sm">{data.remark}</p>
            <Image
              src={data?.ratingImage}
              height={0}
              width={0}
              objectFit="contain"
              layout="responsive"
              className=""
              alt="logo"
            />
          </div>
          <div className="bg-[#1B88F4] py-3 px-[4rem] w-full md:w-[28rem] lg:w-[10rem] xl:w-[18rem] rounded-xl my-5 cursor-pointer">
            <p className="text-white font-normal text-[16px] text-center">
              View
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoiceCard;
