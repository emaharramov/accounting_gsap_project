import React from "react";
import FadeInText from "./FadeInText";
import TextAnimation from "./TextAnimation";
import service_one from "../assets/images/service-img-1.jpg";
import service_two from "../assets/images/service-img-2.jpg";
import service_three from "../assets/images/service-img-3.jpg";
import ServiceItem from "./ServiceItem";
import why_choose_us_img from "../assets/images/why-choose-us-img.jpg";
import Ourplus from "./Ourplus";

const ServiceWhyUs = ({ sectiontitle, textmain, space }) => {
  const check = sectiontitle === "Who We We-Help";
  return (
    <section
      className={`py-[100px] w-[1370px] mx-auto relative rounded-[40px] px-[30px] ${
        check ? "" : "bg-[#f4f7fa]"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="z-20">
          <div className="grid grid-cols-2">
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-[#FF8159] tracking-[2.6px] font-semibold text-[13px] leading-[14.3px] mb-[15px]"
            >
              {sectiontitle}
            </div>
            <div></div>
          </div>
          <div className="grid grid-cols-2 mb-[60px] items-start justify-start">
            <div data-aos="fade-up" data-aos-duration="700">
              <TextAnimation text={textmain} space={space} />
            </div>
            <div data-aos="fade-up" data-aos-duration="700">
              <FadeInText
                text={
                  "At vero eos et accusamus et iusto odio dignissimos ducimus quiblanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate."
                }
                space={9}
              />
            </div>
          </div>

          {sectiontitle === "Our Services" ? (
            <>
              <div className="grid grid-cols-3">
                <ServiceItem
                  imgsrc={service_one}
                  text={"Tax Planning And Preparation"}
                  link={"/"}
                  delayTime={100}
                />
                <ServiceItem
                  imgsrc={service_two}
                  text={"Book Keeping And Accounting"}
                  link={"/"}
                  delayTime={200}
                />

                <ServiceItem
                  imgsrc={service_three}
                  text={"Business Advisory Service"}
                  link={"/"}
                  delayTime={300}
                />
              </div>
            </>
          ) : sectiontitle === "Why Choose Us" ? (
            <div>
              <div className="relative">
                <div
                  className="absolute opacity-60 rounded-[40px] bottom-0 w-full h-full"
                  style={{
                    backgroundColor: "#0c1524",
                  }}
                ></div>
                <div>
                  <img
                    src={why_choose_us_img}
                    alt={why_choose_us_img}
                    className="rounded-[40px]"
                  />
                  <div className="flex absolute w-full bottom-[50px] px-10 items-center justify-between">
                    <p className="text-[46px] w-[710px] font-semibold text-white tracking-[-1.38px] leading-[50.6px]">
                      Experience seamless, secure, and efficient account
                      management
                    </p>
                    <p className="text-center flex flex-col">
                      <span className="text-white text-[50px] tracking-[-1.5px] font-semibold">
                        12 Years
                      </span>
                      <span className="text-[18px] text-white mt-[-7px] leading-[28.8px]">
                        in accounting service
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="grid grid-cols-3 gap-8">
                  <Ourplus
                    svg={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="37"
                        viewBox="0 0 27 37"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.08553 20.6436C1.20829 20.6436 1.3283 20.68 1.43037 20.7482C1.53244 20.8164 1.612 20.9133 1.65898 21.0267C1.70595 21.1401 1.71825 21.2649 1.6943 21.3853C1.67035 21.5057 1.61123 21.6163 1.52443 21.7031C1.43762 21.7899 1.32703 21.8491 1.20662 21.873C1.08622 21.897 0.961422 21.8847 0.848006 21.8377C0.734589 21.7907 0.637651 21.7112 0.569449 21.6091C0.501247 21.507 0.464844 21.387 0.464844 21.2642C0.464844 21.0996 0.530238 20.9418 0.64664 20.8253C0.763041 20.7089 0.920916 20.6436 1.08553 20.6436Z"
                          fill="white"
                        />
                        <path
                          d="M14.12 35.5403H20.3269V33.6782C20.3294 33.5557 20.3636 33.436 20.4262 33.3307L25.2924 26.0438V17.0314C25.03 17.12 24.7919 17.2688 24.5973 17.4658C24.2479 17.8147 24.0515 18.288 24.051 18.7817V23.3996C24.0525 23.4932 24.0319 23.5858 23.9909 23.6699C23.95 23.754 23.8897 23.8272 23.8152 23.8838L17.3104 30.3886C17.2527 30.4468 17.184 30.4929 17.1084 30.5245C17.0327 30.556 16.9516 30.5722 16.8697 30.5722C16.7877 30.5722 16.7066 30.556 16.631 30.5245C16.5553 30.4929 16.4867 30.4468 16.429 30.3886C16.3696 30.3329 16.3223 30.2656 16.2899 30.1908C16.2576 30.1161 16.2409 30.0355 16.2409 29.9541C16.2409 29.8727 16.2576 29.7921 16.2899 29.7174C16.3223 29.6427 16.3696 29.5753 16.429 29.5196L19.309 26.6396C19.4278 26.5212 19.4948 26.3605 19.4952 26.1927C19.4962 26.1113 19.4801 26.0306 19.4481 25.9558C19.416 25.881 19.3686 25.8137 19.309 25.7582C19.2533 25.6989 19.1859 25.6515 19.1112 25.6192C19.0365 25.5868 18.9559 25.5702 18.8745 25.5702C18.7931 25.5702 18.7125 25.5868 18.6378 25.6192C18.563 25.6515 18.4957 25.6989 18.44 25.7582L14.48 29.7058C14.365 29.8218 14.2739 29.9594 14.2122 30.1106C14.1504 30.2619 14.1191 30.4238 14.12 30.5872V35.5403ZM6.44829 25.3858C6.53799 25.1967 6.65979 25.0245 6.80829 24.8769C7.15901 24.5312 7.63169 24.3374 8.12415 24.3374C8.61661 24.3374 9.08929 24.5312 9.44001 24.8769L13.3876 28.8245L13.4993 28.9362L13.611 28.8245L17.5586 24.8769C17.9094 24.5312 18.382 24.3374 18.8745 24.3374C19.367 24.3374 19.8396 24.5312 20.1904 24.8769C20.3389 25.0245 20.4607 25.1967 20.5504 25.3858L22.8097 23.1389V18.7817C22.808 18.3737 22.8872 17.9694 23.0426 17.5921C23.1979 17.2148 23.4265 16.8721 23.715 16.5836C24.0035 16.2951 24.3463 16.0665 24.7235 15.9111C25.1008 15.7558 25.5051 15.6766 25.9131 15.6782C26.0777 15.6782 26.2356 15.7436 26.352 15.86C26.4684 15.9764 26.5338 16.1343 26.5338 16.2989V26.23C26.5332 26.3527 26.4988 26.473 26.4345 26.5776L21.5683 33.8645V35.5403H22.189C22.3536 35.5403 22.5115 35.6057 22.6279 35.7221C22.7443 35.8385 22.8097 35.9964 22.8097 36.161C22.8097 36.3256 22.7443 36.4835 22.6279 36.5999C22.5115 36.7163 22.3536 36.7817 22.189 36.7817H4.80967C4.64505 36.7817 4.48718 36.7163 4.37078 36.5999C4.25437 36.4835 4.18898 36.3256 4.18898 36.161C4.18898 35.9964 4.25437 35.8385 4.37078 35.7221C4.48718 35.6057 4.64505 35.5403 4.80967 35.5403H5.43036V33.8645L0.564154 26.5776C0.499845 26.473 0.465493 26.3527 0.464844 26.23V23.7472C0.464844 23.5826 0.530238 23.4247 0.64664 23.3083C0.763041 23.1919 0.920916 23.1265 1.08553 23.1265C1.25015 23.1265 1.40803 23.1919 1.52443 23.3083C1.64083 23.4247 1.70622 23.5826 1.70622 23.7472V26.0438L6.57243 33.3307C6.63507 33.436 6.66929 33.5557 6.67174 33.6782V35.5403H12.8786V30.5748C12.8796 30.4114 12.8483 30.2495 12.7865 30.0982C12.7247 29.947 12.6337 29.8094 12.5186 29.6934L8.53381 25.7582C8.47808 25.6989 8.41078 25.6515 8.33605 25.6192C8.26132 25.5868 8.18075 25.5702 8.09932 25.5702C8.01789 25.5702 7.93733 25.5868 7.8626 25.6192C7.78787 25.6515 7.72057 25.6989 7.66484 25.7582C7.60521 25.8137 7.55784 25.881 7.52577 25.9558C7.4937 26.0306 7.47764 26.1113 7.47863 26.1927C7.47868 26.3485 7.53614 26.4987 7.64001 26.6148L10.5448 29.5196C10.6042 29.5753 10.6515 29.6427 10.6839 29.7174C10.7162 29.7921 10.7329 29.8727 10.7329 29.9541C10.7329 30.0355 10.7162 30.1161 10.6839 30.1908C10.6515 30.2656 10.6042 30.3329 10.5448 30.3886C10.4496 30.4783 10.3276 30.5342 10.1974 30.5477C10.0673 30.5611 9.93639 30.5314 9.82484 30.4631C9.77185 30.4417 9.72495 30.4076 9.68829 30.3638L3.15864 23.8714C3.094 23.8106 3.04206 23.7376 3.00583 23.6566C2.96961 23.5757 2.94982 23.4883 2.9476 23.3996V18.7817C2.94717 18.288 2.7507 17.8147 2.40139 17.4658C2.20674 17.2688 1.96867 17.12 1.70622 17.0314V18.7817C1.70622 18.9463 1.64083 19.1042 1.52443 19.2206C1.40803 19.337 1.25015 19.4024 1.08553 19.4024C0.920916 19.4024 0.763041 19.337 0.64664 19.2206C0.530238 19.1042 0.464844 18.9463 0.464844 18.7817V16.2989C0.464844 16.1343 0.530238 15.9764 0.64664 15.86C0.763041 15.7436 0.920916 15.6782 1.08553 15.6782C1.49354 15.6766 1.89784 15.7558 2.27511 15.9111C2.65238 16.0665 2.99515 16.2951 3.28366 16.5836C3.57217 16.8721 3.80071 17.2148 3.95609 17.5921C4.11147 17.9694 4.19062 18.3737 4.18898 18.7817V23.1389L6.44829 25.3858Z"
                          fill="white"
                        />
                        <path
                          d="M4.81048 13.1955H2.32772C2.1631 13.1955 2.00523 13.1301 1.88883 13.0137C1.77243 12.8973 1.70703 12.7394 1.70703 12.5748C1.70703 12.4102 1.77243 12.2523 1.88883 12.1359C2.00523 12.0195 2.1631 11.9541 2.32772 11.9541H4.81048C4.9751 11.9541 5.13297 12.0195 5.24937 12.1359C5.36577 12.2523 5.43117 12.4102 5.43117 12.5748C5.43117 12.7394 5.36577 12.8973 5.24937 13.0137C5.13297 13.1301 4.9751 13.1955 4.81048 13.1955Z"
                          fill="white"
                        />
                        <path
                          d="M7.35501 7.0504C7.2736 7.0514 7.19289 7.03534 7.11806 7.00327C7.04324 6.9712 6.97595 6.92383 6.92052 6.8642L5.15777 5.12627C5.09908 5.06758 5.05253 4.99791 5.02077 4.92123C4.989 4.84455 4.97266 4.76237 4.97266 4.67937C4.97266 4.59637 4.989 4.51419 5.02077 4.43751C5.05253 4.36083 5.09908 4.29116 5.15777 4.23247C5.21645 4.17379 5.28613 4.12723 5.3628 4.09547C5.43948 4.06371 5.52167 4.04736 5.60466 4.04736C5.68766 4.04736 5.76984 4.06371 5.84652 4.09547C5.9232 4.12723 5.99287 4.17379 6.05156 4.23247L7.78949 5.99523C7.84887 6.05096 7.89619 6.11826 7.92854 6.19299C7.96089 6.26772 7.97758 6.34828 7.97758 6.42972C7.97758 6.51115 7.96089 6.59171 7.92854 6.66644C7.89619 6.74117 7.84887 6.80847 7.78949 6.8642C7.73407 6.92383 7.66678 6.9712 7.59195 7.00327C7.51712 7.03534 7.43641 7.0514 7.35501 7.0504Z"
                          fill="white"
                        />
                        <path
                          d="M13.4996 4.50588C13.335 4.50588 13.1771 4.44048 13.0607 4.32408C12.9443 4.20768 12.8789 4.0498 12.8789 3.88519V1.40243C12.8789 1.23781 12.9443 1.07994 13.0607 0.963534C13.1771 0.847132 13.335 0.781738 13.4996 0.781738C13.6642 0.781738 13.8221 0.847132 13.9385 0.963534C14.0549 1.07994 14.1203 1.23781 14.1203 1.40243V3.88519C14.1203 4.0498 14.0549 4.20768 13.9385 4.32408C13.8221 4.44048 13.6642 4.50588 13.4996 4.50588Z"
                          fill="white"
                        />
                        <path
                          d="M19.7066 7.05076C19.6252 7.05176 19.5444 7.0357 19.4696 7.00363C19.3948 6.97156 19.3275 6.92419 19.2721 6.86456C19.2127 6.80883 19.1654 6.74153 19.133 6.6668C19.1007 6.59207 19.084 6.5115 19.084 6.43007C19.084 6.34864 19.1007 6.26808 19.133 6.19335C19.1654 6.11862 19.2127 6.05132 19.2721 5.99559L20.9479 4.23283C21.0058 4.17496 21.0745 4.12905 21.1501 4.09773C21.2257 4.06641 21.3068 4.05029 21.3886 4.05029C21.4705 4.05029 21.5515 4.06641 21.6271 4.09773C21.7027 4.12905 21.7714 4.17496 21.8293 4.23283C21.8872 4.29071 21.9331 4.35941 21.9644 4.43502C21.9957 4.51064 22.0119 4.59168 22.0119 4.67352C22.0119 4.75537 21.9957 4.83641 21.9644 4.91202C21.9331 4.98764 21.8872 5.05634 21.8293 5.11421L20.079 6.86456C20.0235 6.92419 19.9563 6.97156 19.8814 7.00363C19.8066 7.0357 19.7259 7.05176 19.6445 7.05076H19.7066Z"
                          fill="white"
                        />
                        <path
                          d="M24.6718 13.1955H22.189C22.0244 13.1955 21.8666 13.1301 21.7502 13.0137C21.6338 12.8973 21.5684 12.7394 21.5684 12.5748C21.5684 12.4102 21.6338 12.2523 21.7502 12.1359C21.8666 12.0195 22.0244 11.9541 22.189 11.9541H24.6718C24.8364 11.9541 24.9943 12.0195 25.1107 12.1359C25.2271 12.2523 25.2925 12.4102 25.2925 12.5748C25.2925 12.7394 25.2271 12.8973 25.1107 13.0137C24.9943 13.1301 24.8364 13.1955 24.6718 13.1955Z"
                          fill="white"
                        />
                        <path
                          d="M13.4997 23.1265C13.4257 23.1384 13.3502 23.1384 13.2762 23.1265L12.7052 22.8907C10.9149 22.1803 9.38097 20.9457 8.30441 19.3486C7.22785 17.7515 6.65889 15.8664 6.6721 13.9403V10.0921C6.67103 9.96913 6.70723 9.84877 6.77593 9.74684C6.84463 9.6449 6.9426 9.56617 7.05693 9.52102L13.2638 7.03826C13.4149 6.97618 13.5844 6.97618 13.7355 7.03826L19.9424 9.52102C20.0568 9.56617 20.1547 9.6449 20.2234 9.74684C20.2921 9.84877 20.3283 9.96913 20.3273 10.0921V13.9403C20.333 15.86 19.7605 17.737 18.6844 19.3267C17.6084 20.9165 16.0785 22.1454 14.2942 22.8534L13.7231 23.0893C13.6491 23.1011 13.5737 23.1011 13.4997 23.0893V23.1265ZM7.91348 10.5141V13.9403C7.90722 15.6131 8.40477 17.2491 9.34135 18.6351C10.2779 20.0212 11.6101 21.0931 13.1645 21.7114L13.4997 21.8355L13.8224 21.7114C15.3791 21.0951 16.714 20.024 17.6529 18.6378C18.5918 17.2515 19.0912 15.6146 19.0859 13.9403V10.5141L13.4997 8.27964L7.91348 10.5141Z"
                          fill="white"
                        />
                        <path
                          d="M12.2582 16.9197C12.1768 16.9207 12.0961 16.9047 12.0212 16.8726C11.9464 16.8405 11.8791 16.7932 11.8237 16.7335L10.5823 15.4921C10.4671 15.3769 10.4023 15.2206 10.4023 15.0577C10.4023 14.8947 10.4671 14.7384 10.5823 14.6232C10.6975 14.5079 10.8538 14.4432 11.0168 14.4432C11.1798 14.4432 11.336 14.5079 11.4513 14.6232L12.2582 15.4177L15.5478 12.1404C15.6049 12.0834 15.6726 12.0381 15.7472 12.0072C15.8217 11.9763 15.9016 11.9604 15.9823 11.9604C16.063 11.9604 16.1429 11.9763 16.2175 12.0072C16.292 12.0381 16.3597 12.0834 16.4168 12.1404C16.4739 12.1975 16.5191 12.2652 16.55 12.3398C16.5809 12.4143 16.5968 12.4942 16.5968 12.5749C16.5968 12.6556 16.5809 12.7355 16.55 12.81C16.5191 12.8846 16.4739 12.9523 16.4168 13.0094L12.6927 16.7335C12.6372 16.7932 12.5699 16.8405 12.4951 16.8726C12.4203 16.9047 12.3396 16.9207 12.2582 16.9197Z"
                          fill="white"
                        />
                      </svg>
                    }
                    text={"Expertise You Can Trust"}
                    sectiontitle={sectiontitle}
                    delay={100}
                  />
                  <Ourplus
                    svg={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="37"
                        viewBox="0 0 36 37"
                        fill="none"
                      >
                        <path
                          d="M33.3392 25.9214C33.557 25.3456 33.677 24.7227 33.677 24.0724C33.677 21.658 32.0328 19.6191 29.7983 18.9981V14.7863H31.005C32.4617 14.7863 33.6468 13.6073 33.6468 12.1583C33.6468 11.7664 33.3292 11.4488 32.9373 11.4488C32.5456 11.4488 32.2279 11.7664 32.2279 12.1583C32.2279 12.825 31.6793 13.3674 31.005 13.3674H29.0889C28.697 13.3674 28.3794 13.685 28.3794 14.0768V17.7727L24.277 13.5806C24.1436 13.4442 23.9608 13.3674 23.77 13.3674H12.2303C12.0395 13.3674 11.8568 13.4442 11.7233 13.5806L7.61898 17.7731V14.0768C7.61898 13.685 7.30138 13.3674 6.90953 13.3674H4.85057C4.17522 13.3674 3.62573 12.825 3.62573 12.1583V3.40783C3.62573 2.74219 4.17515 2.20057 4.85057 2.20057H31.0049C31.6792 2.20057 32.2277 2.74212 32.2277 3.40783V5.84641C32.2277 6.23826 32.5454 6.55586 32.9372 6.55586C33.329 6.55586 33.6466 6.23826 33.6466 5.84641V3.40783C33.6467 1.95982 32.4616 0.781738 31.0049 0.781738H4.85057C3.39285 0.781738 2.20689 1.95982 2.20689 3.40783V12.1582C2.20689 13.6073 3.39285 14.7862 4.85057 14.7862H6.2V18.9984C3.96541 19.62 2.32129 21.6585 2.32129 24.0724C2.32129 24.7232 2.44146 25.3463 2.65957 25.9223C1.09146 27.323 0.202148 29.2862 0.202148 31.3903V33.9783C0.202219 35.5241 1.46658 36.7817 3.02076 36.7817H4.44895C4.8408 36.7817 5.1584 36.4641 5.1584 36.0722C5.1584 35.6804 4.8408 35.3628 4.44895 35.3628H3.02076C2.24901 35.3628 1.62112 34.7417 1.62112 33.9782V31.3902C1.62112 29.8053 2.24866 28.3185 3.36487 27.2069C4.33307 28.5027 5.88458 29.3442 7.63058 29.3442C9.37658 29.3442 10.9281 28.5026 11.8963 27.2069C13.0125 28.3185 13.64 29.8054 13.64 31.3902V33.9782C13.64 34.7417 13.0121 35.3628 12.2404 35.3628H10.8122C10.4204 35.3628 10.1028 35.6804 10.1028 36.0722C10.1028 36.4641 10.4204 36.7817 10.8122 36.7817H12.2404C13.7945 36.7817 15.0589 35.5241 15.0589 33.9782V31.3902C15.0589 29.2861 14.1696 27.323 12.6015 25.9223C12.8196 25.3463 12.9397 24.7231 12.9397 24.0724C12.9397 21.4683 11.0266 19.3007 8.52256 18.8783L12.5286 14.7862H23.4717L27.4765 18.8786C24.9731 19.3016 23.0606 21.4688 23.0606 24.0724C23.0606 24.7227 23.1806 25.3456 23.3985 25.9213C21.8295 27.3232 20.9395 29.2869 20.9395 31.3903V33.9783C20.9395 35.5241 22.2048 36.7817 23.76 36.7817H32.9795C34.5336 36.7817 35.7981 35.5241 35.7981 33.9783V31.3903C35.798 29.287 34.9081 27.3234 33.3392 25.9214ZM11.5208 24.0724C11.5208 26.1969 9.77567 27.9254 7.63051 27.9254C5.48535 27.9254 3.7402 26.197 3.7402 24.0724C3.7402 21.9489 5.48535 20.2214 7.63051 20.2214C9.77567 20.2214 11.5208 21.9489 11.5208 24.0724ZM28.3697 20.2213C30.5137 20.2213 32.258 21.9489 32.258 24.0724C32.258 26.1968 30.5137 27.9253 28.3697 27.9253C26.2245 27.9253 24.4793 26.1969 24.4793 24.0724C24.4794 21.9489 26.2246 20.2213 28.3697 20.2213ZM34.3791 33.9782C34.3791 34.7417 33.7512 35.3628 32.9794 35.3628H23.76C22.9871 35.3628 22.3583 34.7417 22.3583 33.9782V31.3902C22.3583 29.8061 22.9864 28.3188 24.1034 27.206C25.0716 28.5022 26.6234 29.3442 28.3698 29.3442C30.1154 29.3442 31.6664 28.5024 32.6343 27.2063C33.7511 28.3191 34.3792 29.8063 34.3792 31.3902L34.3791 33.9782Z"
                          fill="white"
                        />
                        <path
                          d="M7.9741 10.2378H27.8796C28.2714 10.2378 28.5891 9.92008 28.5891 9.5283C28.5891 9.13652 28.2714 8.81885 27.8796 8.81885H7.9741C7.58225 8.81885 7.26465 9.13652 7.26465 9.5283C7.26465 9.92008 7.58225 10.2378 7.9741 10.2378Z"
                          fill="white"
                        />
                        <path
                          d="M7.9741 6.04586H10.0711C10.4629 6.04586 10.7805 5.72819 10.7805 5.3364C10.7805 4.94462 10.4629 4.62695 10.0711 4.62695H7.9741C7.58225 4.62695 7.26465 4.94462 7.26465 5.3364C7.26465 5.72819 7.58225 6.04586 7.9741 6.04586Z"
                          fill="white"
                        />
                        <path
                          d="M27.8799 4.62695H15.0307C14.6389 4.62695 14.3213 4.94462 14.3213 5.3364C14.3213 5.72819 14.6389 6.04586 15.0307 6.04586H27.8799C28.2718 6.04586 28.5894 5.72819 28.5894 5.3364C28.5894 4.94462 28.2718 4.62695 27.8799 4.62695Z"
                          fill="white"
                        />
                        <path
                          d="M32.937 8.29297C32.5451 8.29297 32.2275 8.61057 32.2275 9.00242V9.00636C32.2275 9.39821 32.5451 9.71384 32.937 9.71384C33.3288 9.71384 33.6464 9.39427 33.6464 9.00242C33.6464 8.61057 33.3288 8.29297 32.937 8.29297Z"
                          fill="white"
                        />
                        <path
                          d="M7.63044 35.3628H7.62636C7.23451 35.3628 6.91895 35.6804 6.91895 36.0722C6.91895 36.4641 7.23859 36.7817 7.63044 36.7817C8.02229 36.7817 8.33989 36.4641 8.33989 36.0722C8.33982 35.6805 8.02222 35.3628 7.63044 35.3628Z"
                          fill="white"
                        />
                      </svg>
                    }
                    text={"Transparent Communication"}
                    sectiontitle={sectiontitle}
                    delay={200}
                  />
                  <Ourplus
                    svg={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="37"
                        viewBox="0 0 36 37"
                        fill="none"
                      >
                        <path
                          d="M33.3392 25.9214C33.557 25.3456 33.677 24.7227 33.677 24.0724C33.677 21.658 32.0328 19.6191 29.7983 18.9981V14.7863H31.005C32.4617 14.7863 33.6468 13.6073 33.6468 12.1583C33.6468 11.7664 33.3292 11.4488 32.9373 11.4488C32.5456 11.4488 32.2279 11.7664 32.2279 12.1583C32.2279 12.825 31.6793 13.3674 31.005 13.3674H29.0889C28.697 13.3674 28.3794 13.685 28.3794 14.0768V17.7727L24.277 13.5806C24.1436 13.4442 23.9608 13.3674 23.77 13.3674H12.2303C12.0395 13.3674 11.8568 13.4442 11.7233 13.5806L7.61898 17.7731V14.0768C7.61898 13.685 7.30138 13.3674 6.90953 13.3674H4.85057C4.17522 13.3674 3.62573 12.825 3.62573 12.1583V3.40783C3.62573 2.74219 4.17515 2.20057 4.85057 2.20057H31.0049C31.6792 2.20057 32.2277 2.74212 32.2277 3.40783V5.84641C32.2277 6.23826 32.5454 6.55586 32.9372 6.55586C33.329 6.55586 33.6466 6.23826 33.6466 5.84641V3.40783C33.6467 1.95982 32.4616 0.781738 31.0049 0.781738H4.85057C3.39285 0.781738 2.20689 1.95982 2.20689 3.40783V12.1582C2.20689 13.6073 3.39285 14.7862 4.85057 14.7862H6.2V18.9984C3.96541 19.62 2.32129 21.6585 2.32129 24.0724C2.32129 24.7232 2.44146 25.3463 2.65957 25.9223C1.09146 27.323 0.202148 29.2862 0.202148 31.3903V33.9783C0.202219 35.5241 1.46658 36.7817 3.02076 36.7817H4.44895C4.8408 36.7817 5.1584 36.4641 5.1584 36.0722C5.1584 35.6804 4.8408 35.3628 4.44895 35.3628H3.02076C2.24901 35.3628 1.62112 34.7417 1.62112 33.9782V31.3902C1.62112 29.8053 2.24866 28.3185 3.36487 27.2069C4.33307 28.5027 5.88458 29.3442 7.63058 29.3442C9.37658 29.3442 10.9281 28.5026 11.8963 27.2069C13.0125 28.3185 13.64 29.8054 13.64 31.3902V33.9782C13.64 34.7417 13.0121 35.3628 12.2404 35.3628H10.8122C10.4204 35.3628 10.1028 35.6804 10.1028 36.0722C10.1028 36.4641 10.4204 36.7817 10.8122 36.7817H12.2404C13.7945 36.7817 15.0589 35.5241 15.0589 33.9782V31.3902C15.0589 29.2861 14.1696 27.323 12.6015 25.9223C12.8196 25.3463 12.9397 24.7231 12.9397 24.0724C12.9397 21.4683 11.0266 19.3007 8.52256 18.8783L12.5286 14.7862H23.4717L27.4765 18.8786C24.9731 19.3016 23.0606 21.4688 23.0606 24.0724C23.0606 24.7227 23.1806 25.3456 23.3985 25.9213C21.8295 27.3232 20.9395 29.2869 20.9395 31.3903V33.9783C20.9395 35.5241 22.2048 36.7817 23.76 36.7817H32.9795C34.5336 36.7817 35.7981 35.5241 35.7981 33.9783V31.3903C35.798 29.287 34.9081 27.3234 33.3392 25.9214ZM11.5208 24.0724C11.5208 26.1969 9.77567 27.9254 7.63051 27.9254C5.48535 27.9254 3.7402 26.197 3.7402 24.0724C3.7402 21.9489 5.48535 20.2214 7.63051 20.2214C9.77567 20.2214 11.5208 21.9489 11.5208 24.0724ZM28.3697 20.2213C30.5137 20.2213 32.258 21.9489 32.258 24.0724C32.258 26.1968 30.5137 27.9253 28.3697 27.9253C26.2245 27.9253 24.4793 26.1969 24.4793 24.0724C24.4794 21.9489 26.2246 20.2213 28.3697 20.2213ZM34.3791 33.9782C34.3791 34.7417 33.7512 35.3628 32.9794 35.3628H23.76C22.9871 35.3628 22.3583 34.7417 22.3583 33.9782V31.3902C22.3583 29.8061 22.9864 28.3188 24.1034 27.206C25.0716 28.5022 26.6234 29.3442 28.3698 29.3442C30.1154 29.3442 31.6664 28.5024 32.6343 27.2063C33.7511 28.3191 34.3792 29.8063 34.3792 31.3902L34.3791 33.9782Z"
                          fill="white"
                        />
                        <path
                          d="M7.9741 10.2378H27.8796C28.2714 10.2378 28.5891 9.92008 28.5891 9.5283C28.5891 9.13652 28.2714 8.81885 27.8796 8.81885H7.9741C7.58225 8.81885 7.26465 9.13652 7.26465 9.5283C7.26465 9.92008 7.58225 10.2378 7.9741 10.2378Z"
                          fill="white"
                        />
                        <path
                          d="M7.9741 6.04586H10.0711C10.4629 6.04586 10.7805 5.72819 10.7805 5.3364C10.7805 4.94462 10.4629 4.62695 10.0711 4.62695H7.9741C7.58225 4.62695 7.26465 4.94462 7.26465 5.3364C7.26465 5.72819 7.58225 6.04586 7.9741 6.04586Z"
                          fill="white"
                        />
                        <path
                          d="M27.8799 4.62695H15.0307C14.6389 4.62695 14.3213 4.94462 14.3213 5.3364C14.3213 5.72819 14.6389 6.04586 15.0307 6.04586H27.8799C28.2718 6.04586 28.5894 5.72819 28.5894 5.3364C28.5894 4.94462 28.2718 4.62695 27.8799 4.62695Z"
                          fill="white"
                        />
                        <path
                          d="M32.937 8.29297C32.5451 8.29297 32.2275 8.61057 32.2275 9.00242V9.00636C32.2275 9.39821 32.5451 9.71384 32.937 9.71384C33.3288 9.71384 33.6464 9.39427 33.6464 9.00242C33.6464 8.61057 33.3288 8.29297 32.937 8.29297Z"
                          fill="white"
                        />
                        <path
                          d="M7.63044 35.3628H7.62636C7.23451 35.3628 6.91895 35.6804 6.91895 36.0722C6.91895 36.4641 7.23859 36.7817 7.63044 36.7817C8.02229 36.7817 8.33989 36.4641 8.33989 36.0722C8.33982 35.6805 8.02222 35.3628 7.63044 35.3628Z"
                          fill="white"
                        />
                      </svg>
                    }
                    text={"Client Satisfaction"}
                    sectiontitle={sectiontitle}
                    delay={300}
                  />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {sectiontitle === "Who We We-Help" ? (
        <div className="grid grid-cols-5">
          <div>
            <Ourplus
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                >
                  <path
                    d="M18.2568 8.2262C17.4781 8.2262 16.7168 7.99527 16.0693 7.56261C15.4218 7.12995 14.9171 6.515 14.6191 5.79551C14.321 5.07603 14.2431 4.28433 14.395 3.52053C14.5469 2.75673 14.9219 2.05513 15.4726 1.50446C16.0233 0.953796 16.7249 0.578785 17.4887 0.426856C18.2525 0.274927 19.0442 0.352902 19.7637 0.650922C20.4831 0.948942 21.0981 1.45362 21.5307 2.10114C21.9634 2.74866 22.1943 3.50993 22.1943 4.2887C22.193 5.33257 21.7777 6.33329 21.0396 7.07141C20.3014 7.80954 19.3007 8.22482 18.2568 8.2262ZM18.2568 1.73581C17.7519 1.73581 17.2584 1.88554 16.8385 2.16605C16.4187 2.44657 16.0915 2.84527 15.8983 3.31175C15.7051 3.77823 15.6545 4.29153 15.753 4.78674C15.8515 5.28195 16.0946 5.73683 16.4517 6.09386C16.8087 6.45089 17.2636 6.69402 17.7588 6.79253C18.254 6.89103 18.7673 6.84048 19.2338 6.64725C19.7003 6.45403 20.099 6.12682 20.3795 5.707C20.66 5.28718 20.8097 4.79361 20.8097 4.2887C20.8088 3.61191 20.5395 2.96311 20.061 2.48455C19.5824 2.00599 18.9336 1.73673 18.2568 1.73581Z"
                    fill="white"
                  />
                  <path
                    d="M25.4052 19.8249H11.1113C10.9276 19.8249 10.7515 19.752 10.6217 19.6221C10.4919 19.4923 10.4189 19.3162 10.4189 19.1326V15.1384C10.4189 12.0291 12.9489 9.49915 16.0582 9.49915H20.4574C23.5667 9.49915 26.0967 12.0291 26.0967 15.1384V19.1326C26.0967 19.3161 26.0239 19.492 25.8942 19.6218C25.7646 19.7516 25.5887 19.8247 25.4052 19.8249ZM11.8036 18.4403H24.7129V15.1384C24.7117 14.0103 24.2629 12.9287 23.4651 12.131C22.6673 11.3334 21.5856 10.8848 20.4574 10.8838H16.0569C14.9291 10.8854 13.848 11.3342 13.0507 12.1318C12.2533 12.9294 11.8048 14.0106 11.8036 15.1384V18.4403Z"
                    fill="white"
                  />
                  <path
                    d="M22.7509 19.825C22.5673 19.825 22.3912 19.752 22.2614 19.6222C22.1315 19.4924 22.0586 19.3163 22.0586 19.1327V16.0973C22.0586 15.9137 22.1315 15.7376 22.2614 15.6078C22.3912 15.478 22.5673 15.405 22.7509 15.405C22.9345 15.405 23.1106 15.478 23.2404 15.6078C23.3703 15.7376 23.4432 15.9137 23.4432 16.0973V19.1327C23.4432 19.3163 23.3703 19.4924 23.2404 19.6222C23.1106 19.752 22.9345 19.825 22.7509 19.825Z"
                    fill="white"
                  />
                  <path
                    d="M13.7655 19.825C13.5819 19.825 13.4058 19.752 13.276 19.6222C13.1462 19.4924 13.0732 19.3163 13.0732 19.1327V16.0973C13.0732 15.9137 13.1462 15.7376 13.276 15.6078C13.4058 15.478 13.5819 15.405 13.7655 15.405C13.9492 15.405 14.1253 15.478 14.2551 15.6078C14.3849 15.7376 14.4579 15.9137 14.4579 16.0973V19.1327C14.4579 19.3163 14.3849 19.4924 14.2551 19.6222C14.1253 19.752 13.9492 19.825 13.7655 19.825Z"
                    fill="white"
                  />
                  <path
                    d="M22.956 30.5331H15.1892C15.0055 30.5331 14.8295 30.4602 14.6996 30.3304C14.5698 30.2005 14.4968 30.0244 14.4968 29.8408C14.4968 29.6572 14.5698 29.4811 14.6996 29.3513C14.8295 29.2215 15.0055 29.1485 15.1892 29.1485H22.956C23.3504 29.1418 23.7264 28.9804 24.003 28.6992C24.2795 28.4179 24.4345 28.0392 24.4345 27.6447C24.4345 27.2502 24.2795 26.8715 24.003 26.5902C23.7264 26.3089 23.3504 26.1476 22.956 26.1409H15.1701C15.1048 26.1409 13.5488 26.0868 11.606 25.2452L11.484 25.192C9.67709 24.3993 8.34959 23.9947 7.53872 23.9895C6.23113 23.9813 5.11046 24.2491 4.21132 24.7822C4.13316 24.8298 4.04634 24.8614 3.9559 24.8752C3.86545 24.889 3.77317 24.8847 3.68438 24.8626C3.5956 24.8405 3.51207 24.8011 3.43863 24.7465C3.36518 24.6919 3.30328 24.6234 3.25651 24.5447C3.20973 24.4661 3.179 24.379 3.1661 24.2884C3.1532 24.1978 3.15838 24.1056 3.18134 24.017C3.2043 23.9285 3.24459 23.8453 3.29987 23.7724C3.35516 23.6995 3.42435 23.6383 3.50344 23.5923C4.62238 22.9268 5.9819 22.5932 7.54781 22.6049C8.89911 22.614 10.7588 23.3621 12.04 23.9238L12.1568 23.9748C13.7747 24.6758 15.0918 24.7511 15.2026 24.7563H22.956C23.7159 24.7656 24.4416 25.074 24.9757 25.6146C25.5098 26.1553 25.8093 26.8847 25.8093 27.6447C25.8093 28.4047 25.5098 29.1341 24.9757 29.6747C24.4416 30.2154 23.7159 30.5238 22.956 30.5331Z"
                    fill="white"
                  />
                  <path
                    d="M18.1922 36.3513C17.8637 36.3513 17.5334 36.3358 17.2014 36.305C16.0486 36.1937 14.9213 35.8969 13.8631 35.4262L10.9892 34.1593C10.1143 33.7723 9.21699 33.438 8.30219 33.158C7.65055 32.9598 7.30699 32.8889 7.13392 32.8642C5.7307 32.6643 4.65502 32.6691 4.10507 32.8781C4.00012 32.9179 3.88706 32.9316 3.77562 32.9181C3.66418 32.9045 3.55771 32.864 3.46539 32.8002C3.37308 32.7363 3.29768 32.6509 3.24569 32.5514C3.19371 32.4519 3.1667 32.3413 3.16699 32.229V24.1459C3.16699 23.9623 3.23993 23.7862 3.36977 23.6564C3.4996 23.5265 3.67569 23.4536 3.8593 23.4536C4.04291 23.4536 4.219 23.5265 4.34884 23.6564C4.47867 23.7862 4.55161 23.9623 4.55161 24.1459V31.3753C5.28026 31.2948 6.20925 31.3346 7.32949 31.4943C7.65704 31.5406 8.10834 31.6518 8.70589 31.834C9.67381 32.1299 10.6231 32.4836 11.5487 32.8932L14.4231 34.1597C15.3448 34.5707 16.327 34.8299 17.3316 34.9273C18.0839 34.9992 18.8422 34.9757 19.5885 34.8572C20.537 34.704 21.9333 34.2324 22.4586 34.055L22.5481 34.0247C27.7976 32.2649 32.552 27.5343 34.3524 25.5872C34.5656 25.3605 34.7195 25.0846 34.8005 24.7841C34.8815 24.4836 34.8871 24.1678 34.8167 23.8646C34.7224 23.4713 34.4818 22.9395 33.4892 22.8586C33.039 22.824 32.5913 22.9509 32.2262 23.2165L25.5554 28.0319C25.4818 28.087 25.398 28.1269 25.3088 28.1492C25.2196 28.1716 25.1269 28.1759 25.0361 28.1621C24.9452 28.1482 24.858 28.1164 24.7796 28.0685C24.7011 28.0205 24.633 27.9575 24.5792 27.883C24.5254 27.8084 24.487 27.7239 24.4661 27.6344C24.4453 27.5449 24.4426 27.4521 24.458 27.3615C24.4734 27.2709 24.5067 27.1842 24.556 27.1066C24.6053 27.029 24.6695 26.962 24.7449 26.9095L31.4162 22.0941C32.0477 21.6348 32.8223 21.4157 33.6008 21.4762C34.9591 21.5869 35.8686 22.3195 36.1615 23.538C36.2854 24.0624 36.2778 24.6094 36.1395 25.1302C36.0011 25.6511 35.7362 26.1297 35.3684 26.5235C33.4957 28.5533 28.5405 33.4747 22.9873 35.3366L22.9008 35.366C22.3452 35.5534 20.8697 36.0519 19.8079 36.2215C19.2737 36.3077 18.7334 36.3511 18.1922 36.3513Z"
                    fill="white"
                  />
                  <path
                    d="M2.4087 35.0562C1.83643 35.0556 1.28775 34.828 0.883054 34.4234C0.478356 34.0188 0.250687 33.4702 0.25 32.8979V23.1455C0.25 22.573 0.477388 22.0241 0.882142 21.6193C1.2869 21.2146 1.83586 20.9872 2.40827 20.9872C2.98068 20.9872 3.52964 21.2146 3.9344 21.6193C4.33915 22.0241 4.56654 22.573 4.56654 23.1455V32.8979C4.56596 33.4701 4.33845 34.0186 3.93392 34.4232C3.52938 34.8279 2.98086 35.0555 2.4087 35.0562ZM2.4087 22.3722C2.20359 22.3723 2.00689 22.4538 1.86177 22.5988C1.71665 22.7437 1.63496 22.9403 1.63462 23.1455V32.8979C1.63462 33.1031 1.71612 33.2999 1.86121 33.445C2.0063 33.59 2.20308 33.6716 2.40827 33.6716C2.61345 33.6716 2.81024 33.59 2.95532 33.445C3.10041 33.2999 3.18192 33.1031 3.18192 32.8979V23.1455C3.18169 22.9405 3.10016 22.7439 2.9552 22.599C2.81024 22.454 2.6137 22.3725 2.4087 22.3722Z"
                    fill="white"
                  />
                </svg>
              }
              text={"nonprofit organizations"}
              sectiontitle={sectiontitle}
            />
          </div>
          <div>sagol</div>
          <div>salam</div>
          <div>sagol</div>
          <div>salam</div>
        </div>
      ) : (
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
      )}
    </section>
  );
};

export default ServiceWhyUs;
