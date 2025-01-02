import React from 'react';
import { Link } from 'react-router-dom';

const WhyChooseItem = ({ imgsrc, text, link, delayTime }) => {
  return (
    <section>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay={delayTime}
        className="h-[443px] relative group overflow-hidden mx-[15px] rounded-[40px] flex justify-center"
      >
        <img
          src={imgsrc}
          alt="service-1"
          className="w-full h-full transition-all duration-700 group-hover:scale-110 object-cover"
        />
        <div
          className="absolute bottom-0 w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, transparent 52.34%, #0C1524 100%)",
          }}
        ></div>
        <div className="absolute bottom-[20px] overflow-hidden w-[243px] translate-y-20 transition-all duration-500 group-hover:translate-y-0 group-hover:overflow-visible flex flex-col items-center">
          <h3 className="text-center mb-5 text-[22px] font-semibold text-white leading-[24.2px]">
            {text}
          </h3>
          <div>
            <Link to={link}>
              <AnimatedButton
                text={"Read More"}
                icon={<GoArrowUpRight color="black" />}
                color={"white"}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseItem;