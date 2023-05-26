import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowIcon from "../../assets/Icons/ArrowIcon";
import PlayIcon from "../../assets/Icons/PlayIcon";

function WhyBagasse() {
  const [autoplay, setAutoplay] = useState(false);
  const [slider, setSlider] = useState(null);

  const handleMoveLeft = () => {
    slider.slickPrev();
  };

  const handleMoveRight = () => {
    slider.slickNext();
  };

  const handleAutoplayToggle = () => {
    setAutoplay(!autoplay);
    if (autoplay) {
      slider.slickPause();
    } else {
      slider.slickPlay();
    }
  };

  const Card = ({ Icon, title, description }) => {
    return (
      <div className="bg-[#F8F2E8] h-[390px] max-w-lg mr-12 rounded-3xl p-10">
        <p className="mb-8">Icon</p>
        <h1 className="mb-4 text-2xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center w-full bg-[#28282A] overflow-hidden py-16">
      <div className="w-full ml-60">
        <h1 className="text-white font-bold text-2xl mb-8">Why Bagasse</h1>
        <div>
          <Slider
            className="slider variable-width"
            ref={(slider) => setSlider(slider)}
            autoplay={autoplay}
            infinite={false}
            arrows={false}
            prevArrow={<button onClick={handleMoveLeft}>Prev</button>}
            nextArrow={<button onClick={handleMoveRight}>Next</button>}
            slidesToShow={2}
            slidesToScroll={1}
            variableWidth={true}
          >
            <div className="bg-[#066406] h-[390px] max-w-sm mr-12 rounded-3xl p-10">
              <p className="font-bold text-5xl text-white ">
                Baggasse;
                <br />
                because buying green is the first step, to being green!
              </p>
            </div>
            <Card
              title={"Environmental Friendliness:"}
              description={
                "Bagasse products are an excellent choice for those concerned about the environment. They are made from a renewable and sustainable resource—sugarcane residue. By opting for bagasse products, you reduce the demand for traditional plastic and paper materials that contribute to deforestation, pollution, and the depletion of natural resources. Choosing bagasse helps minimize your ecological footprint and supports a more sustainable lifestyle."
              }
            />
            <Card
              title={"Biodegradability and Compostability:"}
              description={
                "One of the key advantages of bagasse products is their biodegradability and compostability. Unlike conventional plastic products that take hundreds of years to decompose, bagasse products naturally break down into organic matter. When disposed of in a composting environment, they can turn into valuable compost that enriches the soil. This feature ensures that bagasse products have a minimal impact on the environment and reduce the burden on landfills."
              }
            />

            <Card
              title={"Environmental Friendliness:"}
              description={
                "Bagasse products are an excellent choice for those concerned about the environment. They are made from a renewable and sustainable resource—sugarcane residue. By opting for bagasse products, you reduce the demand for traditional plastic and paper materials that contribute to deforestation, pollution, and the depletion of natural resources. Choosing bagasse helps minimize your ecological footprint and supports a more sustainable lifestyle."
              }
            />
            <Card
              title={"Biodegradability and Compostability:"}
              description={
                "One of the key advantages of bagasse products is their biodegradability and compostability. Unlike conventional plastic products that take hundreds of years to decompose, bagasse products naturally break down into organic matter. When disposed of in a composting environment, they can turn into valuable compost that enriches the soil. This feature ensures that bagasse products have a minimal impact on the environment and reduce the burden on landfills."
              }
            />

            <Card
              title={"Environmental Friendliness:"}
              description={
                "Bagasse products are an excellent choice for those concerned about the environment. They are made from a renewable and sustainable resource—sugarcane residue. By opting for bagasse products, you reduce the demand for traditional plastic and paper materials that contribute to deforestation, pollution, and the depletion of natural resources. Choosing bagasse helps minimize your ecological footprint and supports a more sustainable lifestyle."
              }
            />
            <Card
              title={"Biodegradability and Compostability:"}
              description={
                "One of the key advantages of bagasse products is their biodegradability and compostability. Unlike conventional plastic products that take hundreds of years to decompose, bagasse products naturally break down into organic matter. When disposed of in a composting environment, they can turn into valuable compost that enriches the soil. This feature ensures that bagasse products have a minimal impact on the environment and reduce the burden on landfills."
              }
            />
          </Slider>

          <div className="flex mt-6">
            <button
              onClick={handleMoveLeft}
              className="p-3 bg-[#717171] rounded-full text-white"
            >
              <ArrowIcon />
            </button>
            <div className="flex justify-center items-center">
              <button
                onClick={handleAutoplayToggle}
                className="p-3 flex justify-center items-center text-white"
              >
                {autoplay ? (
                  <PlayIcon className="w-6 h-6" />
                ) : (
                  <PlayIcon className="w-6 h-6" />
                )}
              </button>
            </div>
            <button
              onClick={handleMoveRight}
              className="p-3 bg-[#717171] rounded-full text-white"
            >
              <ArrowIcon className="w-6 h-6 rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyBagasse;
