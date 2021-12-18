import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import AboutHome from "../AboutHome/AboutHome";
import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import Contact from "../Contact/Contact";
import Reviews from "../Review/Reviews";

import WatchesHome from "../WatchesHome/WatchesHome";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Brand />
      <AboutHome />
      <WatchesHome />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
