import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

function AnimatedButton({ text, addclass, icon, color, link }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    // Hover animations
    const hoverIn = () => {
      gsap.to(button, {
        backgroundColor: "#ffffff",
        duration: 0.3,
        onComplete: () => {
          gsap.to(button, {
            backgroundColor: "#000000",
            duration: 0.3,
          });
        },
      });
    };

    const hoverOut = () => {
      gsap.to(button, {
        backgroundColor: "#FF8159",
        duration: 0.3,
      });
    };

    button.addEventListener("mouseenter", hoverIn);
    button.addEventListener("mouseleave", hoverOut);

    return () => {
      button.removeEventListener("mouseenter", hoverIn);
      button.removeEventListener("mouseleave", hoverOut);
    };
  }, []);

  return (
    <Link  to={link} className="no-underline">
      {" "}
      {/* Link bileşeni ile sar */}
      <div
        ref={buttonRef}
        style={{ transition: "background-color 0.3s" }}
        className={`px-[14px] ${addclass} z-20 cursor-pointer py-[12px] rounded-[8px] bg-[#FF8159] transition-all duration-500 flex items-center gap-x-3`}
      >
        <span className="text-white text-[16px] font-bold">{text}</span>
        <div
          style={{ backgroundColor: color }}
          className={`w-[30px] h-[30px] ${color} rounded-[8px] flex items-center justify-center`}
        >
          {icon}
        </div>
      </div>
    </Link>
  );
}

export default AnimatedButton;
