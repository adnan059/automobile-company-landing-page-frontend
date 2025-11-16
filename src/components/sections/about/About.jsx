import { aboutData } from "@/lib/data";
import React from "react";

import about_banner from "../../../assets/images/about-banner.png";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="aboutImages">
        <img src={about_banner} className="about_banner" alt="" />
      </div>
      <div className="sectionContainer">
        <div className="aboutContent">
          <h3 className="sectionTitle">About Us</h3>
          <h1 className="sectionSubTitle">
            We’re Commited to <br /> Meet the quality
          </h1>
          <p className="aboutDesc">
            Quis autem vel eum iure reprehenderit qui in ea volu velit esse quam
            nihil molestiae consequatur, vel illum eui dolorem eum fugiat ruo.{" "}
            <br />
            Reprehenderit qui in ea volu velit esse quam nihil moe stiae
            consequatur, vel illum eui.
          </p>
          <div className="aboutStats">
            {aboutData.map((aboutStat) => (
              <div className="aboutStatBox">
                <h2>{aboutStat.qty}</h2>
                <p>{aboutStat.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
