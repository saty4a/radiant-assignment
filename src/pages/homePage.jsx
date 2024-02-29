import ChoiceCard from "@/components/choiceCard";
import PathCard from "@/components/pathCard";
import ToolCard from "@/components/toolCard";
import { CiCircleCheck, CiCircleInfo } from "react-icons/ci";
import { GoInfo } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
import starsOne from "../assets/starsOne.png";
import starsTwo from "../assets/starsTwo.png";
import starsThree from "../assets/starsThree.png";
import RelatedCard from "@/components/relatedCard";

const HomePage = () => {
  const tools = [
    "Tools",
    "AWS Builder",
    "Start Build",
    "Build Supplies",
    "Tooling",
    "BlueHosting",
  ];

  const path = ["Home", "Hosting for all", "Hosting", "Hosting6", "Hosting5"];

  const choices = [
    {
      imageName: "Builder 1",
      Heading: "WixPro 72-Inch Responsive Website Builder-",
      headingContent:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      highlights:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      ratingNumber: "9.8",
      remark: "Exceptional",
      ratingImage: starsOne,
    },
    {
      imageName: "Builder",
      Heading: "SiteCraft 68-Inch Ultimate Web Design Studio-",
      headingContent:
        "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      highlights:
        "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      ratingNumber: "9.5",
      remark: "Excellent",
      ratingImage: starsTwo,
    },
    {
      imageName: "Builder 1",
      Heading: "WixPro 72-Inch Responsive Website Builder-",
      headingContent:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      highlights:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      ratingNumber: "9.3",
      remark: "Exceptional",
      ratingImage: starsOne,
    },
    {
      imageName: "CDK",
      Heading: "CDK Resposive Builder:",
      headingContent:
        "An extensive library of widgets and apps, and detailed step-by-step guides.",
      discount: "26%",
      highlights: {
        reasonOne: "Building Responsive",
        reasonTwo: "Cool",
        reasonThree: "Docs",
      },
      whyReason: ["Documentation", "Easy Use", "Out of box"],
      ratingNumber: "9.1",
      remark: "Very Good",
      ratingImage: starsThree,
    },
  ];

  const relatedCard = [
    {
      discount: "20%",
      heading: "Webbuilder 1",
      content: "Computer Modern clasic with wix support",
      discountPrice: "$39.96",
      actualPrice: "$49.96",
    },
    {
      discount: "20%",
      heading: "Webbuilder 1",
      content: "Computer Modern clasic with wix support",
      discountPrice: "$39.96",
      actualPrice: "$49.96",
    },
    {
      discount: "20%",
      heading: "Webbuilder 1",
      content: "Computer Modern clasic with wix support",
      discountPrice: "$39.96",
      actualPrice: "$49.96",
    },
  ];

  return (
    <section className="animate bg-[#FBFCFD] flex justify-center pt-10">
      <div className="flex flex-col mt-2 md:mt-0 gap-4 mx-3 lg:mx-0 w-full lg:w-[50rem] xl:w-[70rem]">
        <h4 className="font-normal text-5xl mt-5">
          Best Website builders in the US
        </h4>
        <hr className="text-[#E1E4E6]"></hr>
        <div className="flex justify-between flex-col md:flex-row">
          <div className="flex gap-2 items-center">
            <CiCircleCheck className="cursor-pointer" size={20} />
            <p className="text-[#4B5665] text-sm font-normal">
              Last Updated - February 22, 2020
            </p>
            <GoInfo className="cursor-pointer" size={20} />
            <p className="text-[#4B5665] text-sm font-normal">
              Advertising Disclosure
            </p>
          </div>
          <div className="flex gap-2 items-center mt-2 md:mt-0">
            <span className="text-sm font-normal text-[#727D87]">
              Top Relevant
            </span>
            <FaAngleDown className="cursor-pointer text-[#727D87]" size={20} />
          </div>
        </div>
        <hr className="text-[#E1E4E6]"></hr>
        <div className="flex flex-wrap gap-2">
          {tools &&
            tools.map((data, index) => <ToolCard data={data} key={index} />)}
        </div>
        <div className="flex flex-wrap gap-2">
          {path &&
            path.map((data, index) => <PathCard data={data} key={index} />)}
        </div>
        <div className="flex flex-col gap-2">
          {choices &&
            choices.map((data, index) => (
              <ChoiceCard data={data} key={index} index={index} />
            ))}
        </div>
        <h4 className="font-normal text-4xl mt-[3rem] mb-[2rem] text-[#2C384A]">
          Related deals you might like for
        </h4>
        <div className="flex gap-5 xl:gap-0 justify-between flex-col flex-wrap md:flex-row">
          {relatedCard &&
            relatedCard.map((data, index) => (
              <RelatedCard data={data} key={index} />
            ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-[4rem] mb-[2rem]">
          <h4 className="text-[#5C6874] text-4xl font-normal ms-4">
            Sign up and get exclusive special deals
          </h4>
          <div className="flex justify-center mt-5 mx-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="text-black ps-2 h-[50px] w-full md:w-[20rem] xl:w-[30rem] border-2 border-e-0 rounded-s-xl overflow-auto"
            ></input>
            <button className="bg-indigo-500 px-5 w-1/2 md:w-2/5 xl:w-1/5 text-white rounded-e-xl text-base border hover:border-black shadow hover:shadow-lg">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
