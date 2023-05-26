import React from "react";

const Card = () => {
  return <div className="h-72 bg-white rounded-2xl"></div>;
};

function WhyBioconik() {
  return (
    <div className="bg-[#F2F2F2] w-full">
      <div className="mx-20 my-12">
        <h1 className="font-bold text-2xl mb-8">Why Bioconik?</h1>
        <div className="grid grid-cols-4 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default WhyBioconik;
