import React from "react";

import facebookIcon from "../../../assets/images/facebook.svg";
import instagramIcon from "../../../assets/images/instagram.svg";
import twitterIcon from "../../../assets/images/twitter.svg";
import footerLogo from "../../../assets/images/logo.png";
import footerShape1 from "../../../assets/images/footer-shape-1.png";
//import footerShape2 from "../../../assets/images/footer-shape-2.png";
import footerShape3 from "../../../assets/images/footer-shape-3.png";

import { motion } from "motion/react";

const Footer = () => {
  return (
    <>
      <footer id="contact">
        <div className="footerContainer">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
            className="footerImage1"
          >
            <img src={footerShape1} alt="" />
          </motion.div>
          <div className="footerContents">
            <div className="footerTextContents">
              <div className="footerContentPart1">
                <a href="#" className="footerLogo">
                  <img
                    src={footerLogo}
                    width="128"
                    height="63"
                    alt="autofix home"
                  />
                </a>

                <p className="footer-text">
                  Rerum necessitatibus saepe eveniet aut et voluptates
                  repudiandae sint et molestiae non recusandae.
                </p>

                <ul className="social-list">
                  <li>
                    <a href="#" className="social-link">
                      <img src={facebookIcon} alt="facebook" />
                    </a>
                  </li>

                  <li>
                    <a href="#" className="social-link">
                      <img src={instagramIcon} alt="instagram" />
                    </a>
                  </li>

                  <li>
                    <a href="#" className="social-link">
                      <img src={twitterIcon} alt="twitter" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footerContentPart2">
                <h3>Opening Hours</h3>
                <ul>
                  <li>
                    <p className="p">Monday – Saturday</p>

                    <span className="span">12.00 – 14.45</span>
                  </li>

                  <li>
                    <p className="p">Sunday – Thursday</p>

                    <span className="span">17.30 – 00.00</span>
                  </li>

                  <li>
                    <p className="p">Friday – Saturday</p>

                    <span className="span">12.00 – 14.45</span>
                  </li>
                </ul>
              </div>
              <div className="footerContentPart3">
                <h3>Contact Info</h3>
                <ul>
                  <li>
                    <a href="tel:+01234567890" className="footer-link">
                      +01 2 3456 7890
                    </a>
                  </li>

                  <li>
                    <a href="mailto:info@autofix.com" className="footer-link">
                      info@autofix.com
                    </a>
                  </li>

                  <li>
                    <address className="footer-link address">
                      21 King Street Melbourne, 3000, Australia
                    </address>
                  </li>
                </ul>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
              className="footerImage2"
            >
              <img src={footerShape3} alt="" />
            </motion.div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        created by Md Adnan Faruk | all rights reserved
      </div>
    </>
  );
};

export default Footer;
