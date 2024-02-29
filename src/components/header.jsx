import React, { useEffect, useState, useRef } from "react";
import NavBar from "./navBar";
import NavElements from "./navElements";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

const isBrowser = () => typeof window !== "undefined"; //checking for window object

const Header = () => {
  const styles = "sticky top-0 z-50 blur-background";
  const [showNavBar, setShowNavBar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    isBrowser() ? window.innerWidth : ""
  );
  const [styleNavBar, setStyleNavBar] = useState(
    window.innerWidth < 768 ? "" : styles
  );
  const [navAnimation, setNavAnimation] = useState("slide-in-done");

  const ref = useRef();
  const handleNavBar = () => { //handle navbar and it's animation in mobile view
    if (showNavBar) {
      setNavAnimation("slide-out-done");
      setTimeout(() => {
        setShowNavBar(!showNavBar);
        setNavAnimation("slide-in-done");
      }, 600);
    } else {
      setShowNavBar(!showNavBar);
    }
  };

  useEffect(() => { //handle scroll part when navbar is open in mobile view
    if (showNavBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [setShowNavBar, showNavBar]);

  useEffect(() => {
    const handleWindowResize = () => { //show the navbar according to window size for mobile and desktop
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setShowNavBar(false);
      }
      if (window.innerWidth < 768) {
        setStyleNavBar("");
      } else {
        setStyleNavBar(styles);
      }
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    // adding styleNavBar so that navbar sticks to the top in desktop view
    <nav className={`navBar ${styleNavBar}`}> 
      <div className="flex items-center mx-4 justify-between md:justify-evenly">
        {windowWidth >= 768 ? ( // if window width is more than 768px then it shows the desktop view or else mobile view
          <NavElements refs={ref} h={"full"} directions={"flex-row"} />
        ) : !showNavBar ? (
          <div className="flex gap-5 items-center">
            <FaBars
              className="cursor-pointer text-white my-5"
              size={30}
              onClick={handleNavBar}
            />
          </div>
        ) : (
          <FaXmark
            className="z-50 cursor-pointer text-white my-5"
            size={35}
            onClick={handleNavBar}
          />
        )}
      </div>
      {showNavBar ? (
        <NavBar
          setShowNavBar={setShowNavBar}
          navAnimation={navAnimation}
          setNavAnimation={setNavAnimation}
        />
      ) : (
        ""
      )}
    </nav>
  );
};

export default Header;
