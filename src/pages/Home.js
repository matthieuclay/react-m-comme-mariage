import React from "react";
import Contact from "../components/Contact";
import Events from "../components/Events";
import Gallery from "../components/Gallery";
import Slider from "../components/Slider";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Slider />
        <Events />
        {/* <Gallery /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
