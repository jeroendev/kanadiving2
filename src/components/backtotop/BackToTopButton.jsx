import React from "react";
import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopButton && (
        <button
          style={{
            position: "fixed",
            bottom: "3rem",
            right: "3rem",
            height: "50px",
            width: "50px",
            fontSize: "50px",
            background: "transparent",
            border: "none",
          }}
          onClick={scrollUp}
        >
          <img src={"../public/diverscroll.png"} alt="" className="toTopImg" />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
