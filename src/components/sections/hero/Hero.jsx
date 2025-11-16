import React from "react";

import heroAboutShape from "@/assets/images/text-bars-light.png";
import heroBanner from "@/assets/images/hero-banner.png";
import { ArrowRight } from "lucide-react";

import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="sectionContainer">
        <div className="heroContent">
          <h3 className="heroSubtitle">
            We have talented engineers & mechanics
          </h3>
          <h1 className="heroTitle">
            Auto Maintenance <br /> & Repair Service
          </h1>
          <p className="heroDesc text-sm sm:text-base">
            Duis aute irure dolor in reprehenderit in voluptate velit esse{" "}
            <br />
            Excepteur sint occaecat cupidatat non proident.
          </p>
          <a className="btn-primary heroButton" href="#services">
            <span>Our Services</span>
            <ArrowRight />
          </a>
        </div>
      </div>
      <motion.div
        initial={{
          x: 300,
          opacity: 0,
        }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut", // smooth easing
        }}
        className="heroBanner"
      >
        <img src={heroBanner} alt="" />
      </motion.div>
    </section>
  );
};

export default Hero;
