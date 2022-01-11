import Link from "next/link";
import React from "react";
import Image from "next/image";
import navStyles from "../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={navStyles.navbar}>
      <div className={navStyles.logo}>
        <Image src="/logo.jpg" height={50} width={50} />
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
