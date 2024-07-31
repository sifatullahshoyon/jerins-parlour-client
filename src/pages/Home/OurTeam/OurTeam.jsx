import React from "react";
import Title from "../../../components/Title";

const OurTeam = () => {
  return (
    <div>
      <Title title="Our Team" />
      {/* Main Part */}
      <div className="min-h-screen bg-[#F4F7FC] w-full p-5">
        <div className="flex flex-row items-center justify-center h-screen">
          <h1 class="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
            Coming Soon
          </h1>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
