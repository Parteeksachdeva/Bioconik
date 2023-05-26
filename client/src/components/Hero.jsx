import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Bamboo from "../assets/Bamboo";
import ArrowIcon from "../assets/Icons/ArrowIcon";
import PlayIcon from "../assets/Icons/PlayIcon";

const list = [
  {
    text: "With Love to our planet",
    subtext: "We make bagasse utensils,",
  },
  {
    text: "Say no to plastic",
    subtext: "that makes a difference🌿",
  },
  {
    text: "Say no to plasticccc",
    subtext: "that makes a differenceee🌿",
  },
];
let index = 0;
function Hero() {
  const [text, setText] = useState(list[index].text);
  const [subText, setSubText] = useState(list[index].subtext);
  const [autoplay, setAutoplay] = useState(true);
  const [slider, setSlider] = useState(null);

  const handleAutoplayToggle = () => {
    setAutoplay(!autoplay);
    if (autoplay) {
      slider.slickPause();
    } else {
      slider.slickPlay();
    }
  };

  const handleMoveLeft = () => {
    slider.slickPrev();
  };

  const handleMoveRight = () => {
    slider.slickNext();
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      let newIndex = index + 1;
      if (newIndex >= list.length) {
        newIndex = 0;
      }
      setText(list[newIndex].text);
      setSubText(list[newIndex].subtext);
      index = newIndex;
    }, 1000 * 5);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full max-w-7xl">
      <div className="h-3/5 max-h-[560px] overflow-hidden rounded-b-3xl">
        <Slider
          ref={(slider) => setSlider(slider)}
          autoplay={autoplay}
          infinite={true}
          arrows={true}
          prevArrow={<button onClick={handleMoveLeft}>Prev</button>}
          nextArrow={<button onClick={handleMoveRight}>Next</button>}
        >
          <div>
            <motion.div
              initial={{ x: 0, y: -50, opacity: 0 }}
              animate={{
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 2,
                },
              }}
              className="flex flex-col items-center"
            >
              <p className="text-5xl text-[#717171]">{text}</p>
              <motion.p
                initial={{ y: -50, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 2,
                  },
                }}
                className="text-5xl"
              >
                {subText}
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ x: 0, y: -50 }}
              animate={{
                x: 0,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 2,
                },
              }}
              className="flex flex-col items-center my-2"
            >
              <Bamboo className="w-full h-full" />
            </motion.div>
          </div>
          <div>
            <img src="http://placekitten.com/600/300" alt="cat" />
          </div>
          <div>
            <img src="http://placekitten.com/601/300" alt="cat" />
          </div>
        </Slider>
      </div>
      <div className="flex mt-6">
        <button onClick={handleMoveLeft} className="p-3">
          <ArrowIcon />
        </button>
        <div className="flex justify-center items-center">
          <button
            onClick={handleAutoplayToggle}
            className="p-3 rounded-full bg-[#F4F4F4] flex justify-center items-center"
          >
            {autoplay ? (
              <PlayIcon className="w-6 h-6" />
            ) : (
              <PlayIcon className="w-6 h-6" />
            )}
          </button>
        </div>
        <button onClick={handleMoveRight} className="p-3">
          <ArrowIcon className="w-6 h-6 rotate-180" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
