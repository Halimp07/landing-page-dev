import React from "react";
import { bg_overlay, eduskill_head } from "@/Data";

const Footer = () => {
  return (
    <div>
      <div className="w-full h-72 bg-orange-400 flex justify-center relative">
        <div className="section flex justify-center ">
          <img
            className="w-full h-[283px]  absolute rotate-180 left-0 top-0"
            src={bg_overlay}
          />{" "}
          <div className="h-72 py-12 flex-col justify-center items-center gap-6 inline-flex">
            <div className="w-[830px] text-center text-white text-4xl font-bold font-['Poppins'] leading-10 tracking-wide">
              Yuk, Jadi Talenta Handal di Industri Digital Sekarang!{" "}
            </div>
            <div className="px-6 py-3 bg-teal-600 rounded-xl justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-white text-lg font-semibold font-['Poppins'] leading-9 tracking-tight">
                Mulai Sekarang!{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full my-[25px] h-24 bg-gray-200 flex justify-center items-center">
        <div className="flex-col text-center">
          <img className="w-12 h-16 mx-auto" src={eduskill_head} />{" "}
          {/* Added mx-auto to center the image horizontally */}
          <div className="w-64 h-6 text-zinc-500 text-sm font-semibold font-['Inter'] leading-tight tracking-tight">
            2023 Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
