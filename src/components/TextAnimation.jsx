import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const TextAnimation = ({ text, space }) => {
  const textRef = useRef([]);
  textRef.current = [];

  console.log(text);
  
  // Harfleri refs array'ine eklemek için bir fonksiyon
  const addToRefs = (el) => {
    if (el && !textRef.current.includes(el)) {
      textRef.current.push(el);
    }
  };

  useEffect(() => {
    textRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 20 },
        { duration: 0.6, autoAlpha: 1, y: 0, delay: index * 0.1 }
      );
    });
  }, []);

  return (
    <div
      className={`w-[620px] mt-${space} text-[50px] font-semibold leading-[55px]`}
    >
      {text?.map((letter, index) => (
        <span
          key={index}
          className="mr-2"
          ref={addToRefs}
          style={{ display: "inline-block" }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default TextAnimation;
