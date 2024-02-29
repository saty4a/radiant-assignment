//if highlight have points here it is displayed
const HighlightReasons = ({highlightReasons}) => {
  return (
    <div className="bg-[#FFF4ED] rounded-lg flex flex-col gap-2 py-3 mt-2 ms-5">
      <div className="flex gap-2 mx-2">
        <div className="bg-[#FFFFFF] w-[2.5rem] rounded-md">
          <p className="text-sm text-[#1B88F4] text-center px-1 py-1">9.9</p>
        </div>
        <p className="text-base text-[#4B5665]">{highlightReasons.reasonOne}</p>
      </div>
      <div className="flex gap-2 mx-2">
        <div className="bg-[#FFFFFF] w-[2.5rem] rounded-md">
          <p className="text-sm text-[#1B88F4] text-center px-1 py-1">8.9</p>
        </div>
        <p className="text-base text-[#4B5665]">{highlightReasons.reasonTwo}</p>
      </div>
      <div className="flex gap-2 mx-2">
        <div className="bg-[#FFFFFF] w-[2.5rem] rounded-md">
          <p className="text-sm text-[#1B88F4] text-center px-1 py-1">8.8</p>
        </div>
        <p className="text-base text-[#4B5665]">{highlightReasons.reasonThree}</p>
      </div>
    </div>
  );
};

export default HighlightReasons;
