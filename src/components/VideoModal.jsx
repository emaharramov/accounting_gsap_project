import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import AboutUsImg from "../assets/images/about-us-img.jpg";
import { FaCirclePlay } from "react-icons/fa6";
import AnimatedButton from "./AnimatedButton";

const VideoModal = () => {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
    console.log("kliked");
  };

  return (
    <>
      <div className="h-[508px] mt-14 mb-5 relative">
        <img
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="700"
          src={AboutUsImg}
          className="h-full overflow-hidden rounded-[40px] object-cover aspect-[1/0.40]"
        />
        <div onClick={openModal}>
          <AnimatedButton
            text={"Play Video"}
            addclass="play-btn"
            icon={<FaCirclePlay size={24} color="white" />}
          />
        </div>
      </div>
      <div>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="Y-x0efG1seA"
          onClose={() => setOpen(false)}
        />
      </div>
    </>
  );
};

export default VideoModal;
