import React from "react";
import Header from "./components/layout/header/Header";
import Hero from "./components/sections/hero/Hero";
import Footer from "./components/layout/footer/Footer";
import Services from "./components/sections/services/Services";
import About from "./components/sections/about/About";
import Work from "./components/sections/work/Work";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Work />
      <Footer />
    </>
  );
};

export default App;
