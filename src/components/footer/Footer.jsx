import React, { useEffect } from "react";
import { bg_overlay, eduskill_head } from "@/Data";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="w-full lg:h-72 md:h-56 h-56 bg-orange-400 flex justify-center relative">
        <div className="lg:section md:section flex justify-center">
          <img
            className="w-full lg:h-[283px] md:h-[225px] h-full absolute right-0 left-0 top-0"
            src={bg_overlay}
          />{" "}
          <div className="lg:h-72 md:h-56 h-56 xpy-12 flex-col justify-center items-center gap-6 inline-flex">
            <div
              data-aos="zoom-out-up"
              className="2xl:w-[830px] xl:w-[830px] lg:w-[600px] md:w-[600px] w-[300px] text-center text-white 2xl:text-4xl xl:tet-4xl lg:text-3xl md:text-2xl text-base font-bold font-['Poppins'] lg:leading-10 md:leading-7 leading-7 tracking-wide relative"
              >
              Yuk, Jadi Talenta Handal di Industri Digital Sekarang!{" "}
            </div>
            <a
              href="http://linktr.ee/eduskill
            "
              target="_blank"
              rel="noopener noreferrer"
            >
            <div
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              className="px-6 2xl:py-3 xl:py-3 lg:py-2 md:py-2 py-2 bg-teal-600 2xl:rounded-xl xl:rounded-xl lg:rounded-lg md:rounded-lg rounded-xl justify-center items-center lg:gap-2 md:gap-0 gap-0 inline-flex relative"
              >
            <div className="text-center text-white g:text-lg md:text-base text-base font-semibold font-['Poppins'] leading-9 tracking-tight">
                  Mulai Sekarang!{" "}
              </div>
            </div>
                </a>
          </div>
        </div>
      </div>

      <div className="w-full 2xl:my-[25px] xl:my-[25px] lg:my-2 md:my-[25px] my-[25px] h-24 bg-gray-200 flex justify-center items-center">
        <div
          className="flex-col text-center"
        >
          <img
            className="2xl:w-12 xl:w-12 lg:w-11 md:w-12 w-10 2xl:h-15 xl:h-16 lg:h-14 md:h-14 h-12 mx-auto"
            src={eduskill_head}
          />{" "}
          {/* Added mx-auto to center the image horizontally */}
          <div className="w-full h-6 text-zinc-500 2xl:text-sm xl:text-sm lg:text-xs md:text-sm text-xs font-semibold font-['Poppins'] leading-tight tracking-tight">
            Copyright © 2023 Eduskill.id. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
