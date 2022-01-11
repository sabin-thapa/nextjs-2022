import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1> Sabin Thapa</h1>
      </div>
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
