import React from "react";

const Ourplus = ({ svg, text, sectiontitle,delay }) => {
  const check = sectiontitle === "Why Choose Us";
  const wehelp = sectiontitle === "Who We We-Help";

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-delay={delay}
      className={`group ${
        check ? "bg-white relative p-10 rounded-[40px]" : ""
      }`}
    >
      <div className="absolute left-0 bottom-0 transition-all duration-500 w-full h-0 group-hover:h-full rounded-[40px] bg-[#0c1524]"></div>
      <div className={`${wehelp ? "flex items-center justify-center" : ""}`}>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay={check ? delay : "300"}
          className="bg-[#FF8159] relative icon-box my-5 w-[60px] h-[60px] inline-flex items-center justify-center rounded-[40px]"
        >
          <div
            className={`${
              check
                ? "hidden"
                : "absolute left-[50%] transition-all duration-500 top-[50%] rounded-[40px] w-[0px] h-[0px] group-hover:w-full group-hover:h-full bg-black translate-x-[-50%] translate-y-[-50%]"
            }`}
          ></div>
          <div className="z-20">{svg}</div>
        </div>
      </div>
      <p
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay={check ? delay : "300"}
        className={`text-[22px] ${
          wehelp ? "w-[170px] mx-auto text-center bg-red-400" : ""
        } transition-all duration-500 leading-[35.2px] ${
          check ? "group-hover:text-white text-[#0C1524]" : "text-[#0C1524]"
        }   font-semibold`}
      >
        {text}
      </p>
      {check ? (
        <p
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay={check ? delay : "300"}
          className={`leading-[25.6px] transition-all duration-500 ${
            check ? "group-hover:text-white text-[#0C1524]" : "text-[#0C1524]"
          } `}
        >
          Quisque ligula quam, tempus non tempor sed, tempor in ligula. In sit
          amet orci elit. Donec egestas eros sit amet odio ultricies fermentum.
          Phasellus ullamcorper.
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Ourplus;
