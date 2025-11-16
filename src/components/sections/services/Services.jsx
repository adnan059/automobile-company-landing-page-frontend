import { serviceData } from "@/lib/data";
import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="sectionContainer">
        <h3 className="sectionTitle">our services</h3>
        <h1 className="sectionSubTitle">
          We Provide Great Services <br /> For your Vehicle
        </h1>

        <div className="serviceContainer">
          {serviceData.map((service) => (
            <div
              className={
                service.isIllustration ? "illustrationBox" : "serviceCard"
              }
              key={service.serviceType}
            >
              {service.isIllustration ? (
                <motion.img
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={"illustration"}
                  src={service.serviceIcon}
                  alt=""
                />
              ) : (
                <img
                  className={"serviceIcon"}
                  src={service.serviceIcon}
                  alt=""
                />
              )}
              {service.serviceType && (
                <h2 className="serviceType">{service.serviceType}</h2>
              )}
              {service.serviceDesc && (
                <p className="serviceDesc">{service.serviceDesc}</p>
              )}
              {!service.isIllustration && (
                <button className="serviceButton">Read More</button>
              )}
            </div>
          ))}
        </div>

        <button className="btn-primary servicePrimaryButton">
          <span>View More Services</span>
          <ArrowRightIcon />
        </button>
      </div>
    </section>
  );
};

export default Services;
