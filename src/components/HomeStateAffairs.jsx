import React from "react";
import TextAnimation from "./TextAnimation";
import AnimatedButton from "./AnimatedButton";
import { GoArrowUpRight } from "react-icons/go";
import counter_img_1 from "../assets/images/counter-img-1.jpg";
import counter_img_2 from "../assets/images/counter-img-2.jpg";
import counter_img_3 from "../assets/images/counter-img-3.jpg";
import  StateAffairItem from "./StateAffairItem";
import StateAffairImage from "./StateAffairImage";

const HomeStateAffairs = () => {
  return (
    <section className="w-[1370px] mx-auto py-[100px]">
      <div className="h-[454px] grid grid-cols-2">
        <div className="mx-[15px] flex flex-col justify-center">
          <div className="grid grid-cols-2">
            <div className="text-[#FF8159] tracking-[2.6px] font-semibold text-[13px] leading-[14.3px] mb-[15px]">
              State of affairs
            </div>
            <div></div>
          </div>
          <div data-aos="fade-up" data-aos-duration="700">
            <TextAnimation
              text={[
                "Keeping",
                "you",
                "informed",
                "on",
                "tax",
                "laws",
                "and",
                "financial",
                "trends",
              ]}
            />
          </div>
          <div data-aos="fade-in" data-aos-duration="1000">
            <AnimatedButton
              text={"Contact Us"}
              icon={<GoArrowUpRight />}
              color={"white"}
              link={"/"}
              addclass={"inline-flex mt-7"}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-8">
          <div className="grid grid-cols-3 gap-x-8">
            <StateAffairItem
              number={980}
              title={"Financial Audits Conducted Annually"}
            />
            <StateAffairImage image={counter_img_1} />
            <StateAffairItem
              number={1984}
              title={"Satisfied Clients and Counting"}
            />
          </div>
          <div className="grid grid-cols-3 gap-x-8">
            <StateAffairImage image={counter_img_2} />
            <StateAffairItem
              number={9870}
              title={
                "Hours Saved for Our Clients through Streamlined Processes"
              }
            />
            <StateAffairImage image={counter_img_3} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeStateAffairs;
