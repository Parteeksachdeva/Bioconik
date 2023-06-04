import React from "react";

const facts = [
  { title: "60 M", subTitle: "Products Sold", date: "as of December 2022" },
  {
    title: "18.8 M",
    subTitle: "Customers Served",
    date: "as of December 2022",
  },
  { title: "23 +", subTitle: "Countries Shipped", date: "as of December 2022" },
  {
    title: "12 tons",
    subTitle: "Plastic Reduced",
    date: "as of December 2022",
  },
];

function Card({ title, subTitle, date }) {
  return (
    <div className="bg-white rounded-2xl w-full p-8">
      <p className="font-bold text-5xl">{title}</p>
      <p className="mt-2">{subTitle}</p>
      <p className="mt-8 text-xs text-gray-400">{date}</p>
    </div>
  );
}

function FunFacts() {
  return (
    <div className="bg-slate-100 w-full flex justify-center">
      <div className="max-w-7xl w-full my-14 space-y-8">
        <p className="font-bold text-3xl">Fun Facts</p>
        <div className="flex space-x-12">
          {facts.map((fact) => {
            return <Card {...fact} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default FunFacts;
