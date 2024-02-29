import React, { useEffect, useRef, useState } from "react";
import NavElements from "./navElements";

const NavBar = ({ setShowNavBar, navAnimation, setNavAnimation }) => {
  const ref = useRef();
  const [checkNavBar, setCheckNavBar] = useState(false);
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setCheckNavBar(true);
    }
  };

  useEffect(() => {
    if (checkNavBar) { //handle the navbar animation in mobile view
      setNavAnimation("slide-out-done");
      setTimeout(() => {
        setShowNavBar(false);
        setNavAnimation("slide-in-done");
      }, 600);
    }
  }, [checkNavBar, setCheckNavBar]);

  const closeNavBar = () => {
    setCheckNavBar(true);
  };

  return (
    // mobile view navbar a bigger div with height 100vh and smaller div that contains the navbar elements
    <div
      className={`${navAnimation} h-[100vh] w-full top-0 fixed right-0 z-20 blur-background`}
      onClick={handleClick} 
    >
      <NavElements
        ref={ref}
        closeNavBar={closeNavBar}
        h={"50vh"}
        direction={"flex-col"}
      />
    </div>
  );
};

export default NavBar;
