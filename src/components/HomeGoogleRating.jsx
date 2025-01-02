import React from "react";
import HeroImg from "../assets/images/hero-img.png";
import { IoStar } from "react-icons/io5";
import TextAnimation from "./TextAnimation";
import AnimatedButton from "./AnimatedButton";
import FadeInText from "./FadeInText";
import { GoArrowUpRight } from "react-icons/go";

const HomeGoogleRating = () => {
  return (
    <section className="py-[100px] w-[1370px] mx-auto overflow-hidden h-[771px] relative rounded-[40px] px-[30px] bg-[#f4f7fa]">
      <div className="flex items-center justify-between">
        <div className="z-20">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="inline-flex items-center gap-x-5 rating rounded-[40px] px-5 py-[6px] bg-white"
          >
            Google Rating{" "}
            <span className="flex items-center ">
              <span className="mr-3 text-[#FF8159]">5.0</span>

              <IoStar color="#FF8159" />
              <IoStar color="#FF8159" />
              <IoStar color="#FF8159" />
              <IoStar color="#FF8159" />
              <IoStar color="#FF8159" />
            </span>{" "}
            Based On 492 Reviews
          </div>
          <div className="w-[620px] mt-5 text-[50px] font-semibold leading-[55px]">
            <TextAnimation
              text={[
                "Your",
                "premier",
                "destination",
                "for",
                "expert",
                "accounting",
                "solutions",
              ]}
              space={5}
            />
          </div>
          <FadeInText
            text={
              "In suscipit urna mi, vel rutrum metus consequat ac. Integer ac magnapharetra, vestibulum augue eget, pharetra mauris. Maecenas non elit viverra, sollicitudin quam"
            }
            space={25}
          />
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex items-center gap-x-3"
          >
            <AnimatedButton
              text={"Work With Us"}
              icon={<GoArrowUpRight />}
              color={"white"}
            />
            <AnimatedButton
              text={"View Our Services"}
              icon={<GoArrowUpRight />}
              color={"white"}
            />
          </div>
        </div>
        <div
          className="px-[15px]"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          <img src={HeroImg} />
        </div>
      </div>
      <div>
        <svg
          className="absolute bottom-0 left-0"
          width="492"
          height="484"
          viewBox="0 0 492 484"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
         >
          <path
            d="M120.702 483.46H0.954102L120.702 190.646H241.324L120.702 483.46Z"
            fill="#0C1524"
            fillOpacity="0.03"
          />
          <rect
            x="90.3223"
            y="187.439"
            width="151.355"
            height="117.79"
            fill="url(#paint0_linear_13878_53)"
          />
          <path
            d="M286.622 483.46H166L366.162 0.972626H486.784L286.622 483.46Z"
            fill="#0C1524"
            fillOpacity="0.03"
          />
          <rect
            x="312.618"
            y="0.972626"
            width="178.678"
            height="174.256"
            fill="url(#paint1_linear_13878_53)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_13878_53"
              x1="173.54"
              y1="194.548"
              x2="115.967"
              y2="232.339"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F5F7FA" />
              <stop offset="1" stopColor="#F5F7FA" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_13878_53"
              x1="410.858"
              y1="11.4903"
              x2="334.546"
              y2="51.462"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F5F7FA" />
              <stop offset="1" stopColor="#F5F7FA" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default HomeGoogleRating;
