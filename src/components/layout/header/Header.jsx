import React, { useEffect, useState } from "react";
import logo from "@/assets/images/logo.png";
import { navMenus } from "@/lib/data";
import { ArrowRight, Menu, X } from "lucide-react";
import navBeforeImg from "@/assets/images/nav-before-img.png";

const Header = () => {
  const [showMenus, setShowMenus] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (scrollY > 103) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    checkScroll();

    addEventListener("scroll", checkScroll);

    return () => removeEventListener("scroll", checkScroll);
  }, []);

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth > 992) {
        setShowMenus(true);
      } else {
        setShowMenus(false);
      }
    };
    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    console.log(showMenus);
  }, [showMenus]);

  const handleClick = () => {
    if (innerWidth < 992) {
      setShowMenus(false);
    }
  };

  return (
    <header className={`${hasScrolled ? "bg-oxford-blue-1" : ""}`}>
      <div className="headerContainer">
        <div className="headerLogo">
          <img src={logo} alt="" />
        </div>
        <nav className={`headerNav ${showMenus ? "block" : "hidden"}`}>
          <ul>
            {navMenus.map((menu) => (
              <li className="group" key={menu.name}>
                <a onClick={handleClick} href={menu.href}>
                  {menu.name}
                </a>
                <img src={navBeforeImg} alt="" />
              </li>
            ))}
          </ul>
        </nav>
        <div className="headerButtons">
          <button onClick={() => setShowMenus(!showMenus)}>
            {showMenus ? <X size={32} /> : <Menu size={32} />}
          </button>
          <button className="btn-primary">
            <span>Get A Quote</span>
            <ArrowRight />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
