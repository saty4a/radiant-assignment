const ToolCard = ({ data }) => {
  return (
    <div className="bg-[#FFFFFF] rounded-xl p-3 pe-10 cursor-pointer shadow hover:shadow-lg">
      <p className="text-[#4B5665] text-sm font-normal text-center">{data}</p>
    </div>
  );
};

export default ToolCard;
