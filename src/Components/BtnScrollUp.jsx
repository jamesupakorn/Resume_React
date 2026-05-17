import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(document.documentElement.scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <FaArrowCircleUp
      className={`BtnScrollUp${visible ? " BtnScrollUp-visible" : " BtnScrollUp-hidden"}`}
      onClick={scrollToTop}
    />
  );
};

export default ScrollButton;
