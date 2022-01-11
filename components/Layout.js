import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomeStyles from "../styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <div className={HomeStyles.content}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
