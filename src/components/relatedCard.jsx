import Image from "next/image";
import computer from "../assets/computerImage.png";

const RelatedCard = ({ data }) => {
  return (
    <div className="rounded-lg bg-[#FFFFFF] pt-[2rem] relatedCard w-full md:w-[20rem] hover:border-black shadow hover:shadow-lg lg:hover:-translate-y-1 hover:scale-110 hover:ease-in-out duration-300">
      <Image
        src={computer}
        height={0}
        width={0}
        objectFit="contain"
        layout="responsive"
        className="related-card-image ms-4 md:m-auto"
        alt="logo"
      />
      <div className="flex gap-2 ms-4">
        <div className="bg-[#F2F4F7] w-[4rem] rounded-md mt-10">
          <p className="text-sm text-[#074786] ps-1 py-1">
            {data?.discount} Off
          </p>
        </div>
        <div className="bg-[#F2F4F7] w-[6rem] rounded-md mt-10">
          <p className="text-sm text-[#074786] ps-1 py-1">Limited time</p>
        </div>
      </div>
      <p className="font-bold text-base text-[#626E79] ms-4 lg:ms-0 text-start lg:text-center">
        {data?.heading}
      </p>
      <p className="font-normal text-base text-[#626E79] mx-4 mt-3">
        {data.content}
      </p>
      <div className="flex gap-2 ms-4 items-center mt-2">
        <p className="text-[#5C6874] font-normal text-xl">
          {data.discountPrice}
        </p>
        <p className="text-[#9FA9B3] font-normal text-sm">{data.actualPrice}</p>
        <p className="text-[#EF4C5D] font-normal text-sm">
          ({data.discount} Off)
        </p>
      </div>
      <div className="bg-[#1B88F4] py-3 px-[4rem] w-[18rem] rounded-xl my-5 mx-4 border hover:border-black shadow hover:shadow-lg cursor-pointer text-[#1B88F4] hover:text-white">
        <p className="font-normal text-[16px] text-center">View Deal</p>
      </div>
    </div>
  );
};

export default RelatedCard;
