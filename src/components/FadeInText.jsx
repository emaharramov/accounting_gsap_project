import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const FadeInText = ({ text, space }) => {
  const textRef = useRef(null); // DOM referansını tutacak ref

  useEffect(() => {
    // textRef.current doğrudan DOM elemanını gösterir
    gsap.from(textRef.current, {
      autoAlpha: 0, // GSAP ile opaklık ve visibility özelliklerini aynı anda kontrol edin
      duration: 1, // Animasyonun süresi, saniye cinsinden
      ease: "power1.out", // Animasyonun hızlanma/kaybolma şekli
      delay: 0.5, // Animasyon başlamadan önce bekleme süresi, saniye cinsinden
    });
  }, []);

  return (
    <div
      ref={textRef}
      style={{ margin: `${space}px 0` }}
      className={`text-[#4A5567] w-[630px] text-[17px] leading-[25.6px]`}
    >
      {text}
    </div>
  );
};

export default FadeInText;
