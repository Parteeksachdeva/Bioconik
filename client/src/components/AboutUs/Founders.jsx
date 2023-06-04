import React from "react";

const founders = [
  {
    photo: "/founder-1.webp",
    name: "Amber Goyal",
    designation: "Bioconik Co-founder and Chief Executive Officer",
  },
  {
    photo: "/founder-1.webp",
    name: "Parteek Sachdeva",
    designation: "Bioconik Co-founder and Chief Strategy Officer",
  },
];

function FounderCard({ photo, name, designation }) {
  return (
    <div className="w-full">
      <img src={photo} className="rounded-3xl" />
      <p className="text-lg font-bold mt-4">{name}</p>
      <p className="text-lg text-gray-500">{designation}</p>
    </div>
  );
}

function Founders() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl w-full space-y-8">
        <p className="font-bold text-3xl">Founders</p>
        <div className="flex space-x-8">
          {founders.map((founder) => {
            return <FounderCard {...founder} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Founders;
