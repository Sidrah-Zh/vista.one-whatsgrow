import React from "react";
import Button from "./Button";
import heroImage from "../assets/whats_grow_header_image-1024x1024.webp";

const Hero: React.FC = () => {
  return (
    <section className="bg-sky-950 text-white rounded-b-[80px] py-54 md:py-32 px-6  sm:px-12 lg:px-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 text-center px-6 py-10 md:text-left ml-6">
          <h1 className="text-3xl md:text-4xl  mb-6 mt-6  md:mt-0 font-bold font-[Oswald]">
            Overwhelmed by WhatsApp? <br /> WhatsGrow automates responses,
            engagement, and conversions.
          </h1>
          <p
            className="text-base md:text-lg mb-8 leading-relaxed"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            Our cutting-edge integration of WhatsApp and AI technology empowers
            you to revolutionize your customer engagement with precision and
            effectiveness. The WhatsGrow WhatsApp Management Suite combines
            comprehensive automation tools and services, underpinned by advanced
            AI-powered chatbots, to provide unmatched insights, streamlined
            conversation tracking, automated reply management, multichannel
            messaging, and a seamless customer experience—all in one unified
            platform.
          </p>

          <div className="flex justify-center md:justify-start">
            <Button text="Get a free trial" />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="WhatsGrow Automation"
            className="w-11/12 sm:w-10/12 md:w-full max-w-md rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
