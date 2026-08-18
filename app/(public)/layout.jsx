import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const layout = ({ children }) => {
  return (
    <div className="mx-auto max-w-360 px-2 lg:px-12 overflow-x-hidden ">
      <Banner />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
