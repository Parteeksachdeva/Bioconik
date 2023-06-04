import React from "react";

const values = [
  {
    title: "Integrity",
    description: "We adhere to Integrity as our Business Principle",
  },
  {
    title: "Customer first",
    description: "Nothing is more important than the needs of our customers",
  },
  {
    title: "Teamwork Collaboration",
    description: "We Value teamwork Collaboration",
  },
  {
    title: "Win! Win! Win!",
    description: "We Pursue Win win win Partnerships",
  },
];

function Card({ number, title, description }) {
  return (
    <div className="w-full bg-white rounded-2xl p-6 leading-6">
      <p className="h-11 w-11 border border-gray-900 rounded-full justify-center text-2xl font-light flex items-center">
        {number}
      </p>
      <p className="font-bold text-lg mt-4">{title}</p>
      <p className="mt-2 text-lg">{description}</p>
    </div>
  );
}

function ValuesBanner() {
  return (
    <div className="relative">
      {/* Values Title */}
      <div className="w-full flex justify-center mb-16">
        <p className="text-6xl font-bold text-center">
          Our values are determined
          <br />
          to be a leading enterprise.{" "}
          <span className="text-green-700">(Period)</span>
        </p>
      </div>

      {/* Values Banner */}
      <img src="/values-banner.webp" />
      <div className="absolute left-0 w-full bottom-12 flex justify-center">
        <div className="flex w-full max-w-7xl space-x-4">
          {values.map((value, index) => {
            return (
              <Card
                number={index + 1}
                title={value.title}
                key={index}
                description={value.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ValuesBanner;
