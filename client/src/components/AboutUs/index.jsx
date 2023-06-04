import React from "react";
import ValuesBanner from "../ValuesBanner";
import FunFacts from "./FunFacts";
import Founders from "./Founders";

function index() {
  return (
    <div className="w-full flex flex-col justify-center items-center my-12 space-y-16 text-gray-800">
      <div className="max-w-7xl w-full space-y-16">
        {/* Banner */}
        <img
          src="/about-us-banner.webp"
          alt="about-us-banner"
          className="rounded-3xl"
        />

        {/* About us  */}
        <div className="w-full flex space-x-8">
          <div className="border rounded-3xl">
            <div className="p-12 space-y-8">
              <p className="text-3xl font-bold">About us</p>
              <p className="text-lg">
                Bioconik is a company that specializes in creating eco-friendly
                products made from bagasse. Bagasse is the fibrous residue that
                remains after sugarcane has been crushed to extract the juice.
                Instead of allowing this waste to go to landfills, Bioconik has
                developed a process to transform it into various products such
                as plates, bowls, and trays. These products are not only
                environmentally sustainable, but they are also microwave and
                freezer safe. Bioconik's mission is to reduce waste while
                providing affordable and high-quality alternatives to
                traditional plastic and paper products. With their innovative
                approach to sustainability, Bioconik is making a positive impact
                on the environment and setting a new standard for responsible
                manufacturing.
              </p>
            </div>
          </div>
          <div className="border rounded-3xl">
            <div className="p-12 space-y-8">
              <p className="text-3xl font-bold">Mission</p>
              <p className="text-lg">
                At Bioconik, our mission is to revolutionize the way people
                think about disposables by offering a wide range of high-quality
                and eco-friendly bagasse products. We are committed to promoting
                sustainability, reducing waste, and protecting the environment.
                Our goal is to provide individuals, businesses, and communities
                with convenient and sustainable alternatives to traditional
                plastic and paper items. Through innovation, responsible
                sourcing, and a dedication to customer satisfaction, we strive
                to inspire positive change and make a significant impact on the
                global movement towards a greener future. We envision a world
                where every choice matters, and by choosing our bagasse
                products, our customers join us on this journey towards a more
                sustainable and harmonious planet. Together, let's embrace a
                conscious and responsible lifestyle that respects our
                environment and future generations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ValuesBanner />
      <FunFacts />
      <Founders />
    </div>
  );
}

export default index;
