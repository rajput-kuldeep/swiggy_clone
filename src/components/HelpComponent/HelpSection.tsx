import { useState } from "react";
import HelpPartOne from "./HelpPartOne";
import HelpPartTwo from "./HelpPartTwo";
import HelpPartThree from "./HelpPartThree";

interface Props {
  children: React.ReactNode;
}
const HelpSection: React.FC<Props> = () => {
  const [activeTab, setActiveTab] = useState('partner-onboarding');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };


  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-[#37718E]  px-40 pt-10">
        <div className="text-white ml-20 mb-10">
          <span className="text-3xl font-bold">Help & support</span>
          <p className="">Let's talk a step ahead and help you better.</p>
        </div>

        <div className=" p-10 h-screen bg-white m-auto">
          <div className="flex w-full h-full gap-20" >
            <div className="flex flex-col text-md font-medium gap-4  w-64 h-1/3">
              <p className={`cursor-pointer text-gray-500 hover:text-black ${activeTab === 'partner-onboarding' ? 'text-gray-900' : ''
                }`} onClick={() => handleTabChange("partner-onboarding")}>Partner Onboarding</p>


              <p className={`cursor-pointer text-gray-500 hover:text-black ${activeTab === 'partner-onboarding' ? 'text-gray-900' : ''
                }`} onClick={() => handleTabChange("legal")} >Legal</p>

              <p className={`cursor-pointer text-gray-500 hover:text-black ${activeTab === 'partner-onboarding' ? 'text-gray-900' : ''
                }`} onClick={() => handleTabChange("faq")} >FAQ</p>

            </div>

            {activeTab === "partner-onboarding" && <HelpPartOne />}
            {activeTab === "legal" && <HelpPartTwo />}
            {activeTab === "faq" && <HelpPartThree   />}

          </div>
        </div>
      </div>

    </>


  )
};

export default HelpSection
