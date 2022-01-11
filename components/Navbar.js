import Link from "next/link";
import React from "react";
import navStyles from "../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={navStyles.navbar}>
      <div className={navStyles.logo}>
        <h1> Sabin Thapa</h1>
      </div>
      <ul className={navStyles.navItems}>
        <li>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
