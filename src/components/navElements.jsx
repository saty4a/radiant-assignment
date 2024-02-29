import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

const NavElements = (props) => {
  useEffect(() => {
    const navBg = document.querySelector(".navElements");
    if (window.innerWidth <= 1024) {
      navBg.classList.add("background-navBar");
    } else {
      navBg.classList.remove("background-navBar");
    }
  }, []);

  return (
    <ul
      className={`background-navBar navbar-padding navElements h-[${props.h}] flex ${props.direction} items-center links-text-color text-center gap-8`}
      ref={props.refs}
    >
      <li>
        <a className="nav-elements flex gap-2 items-center search" href="#">
          <FiSearch className="search-icon cursor-pointer ms-2" size={20} />
          <input
            type="text"
            placeholder=""
            className="py-[0.3rem] rounded-lg search-bar"
          />
        </a>
      </li>
      <li>
        <a
          className="links-text-color nav-elements text-underline-animation"
          href="#"
        >
          Categories
        </a>
      </li>
      <li>
        <a className="links-text-color text-underline-animation" href="#">
          Website Builders
        </a>
      </li>
      <li>
        <a className="links-text-color text-underline-animation" href="#">
          Today's deals
        </a>
      </li>
    </ul>
  );
};

export default NavElements;
