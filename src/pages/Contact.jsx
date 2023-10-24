import React from "react";
import { bg_overlay } from "@/Data";

const Contact = () => {
  return (
    <div className="w-full lg:h-72 md:h-72 h-56 bg-teal-600 flex justify-center relative">
      <div className="lg:section md:section flex justify-center">
        <img className="w-full lg:h-[283px] md:h-[283px] h-full absolute right-0 left-0 top-0" src={bg_overlay} />
        <div className="lg:h-72 md:h-72 h-56 py-12 flex-col justify-center items-center gap-6 inline-flex">
        <div className="lg:w-[830px] md:w-[830px] w-[300px] text-center text-white lg:text-4xl md:text-4xl text-base font-bold font-['Poppins'] lg:leading-10 md:leading-10 leading-7 tracking-wide relative">
            Mau Request Kelas Untuk Lembaga pendidikan mu? Bisa Dong
          </div>
          <div className="px-6 lg:py-3 md:py-3 py-2 bg-orange-400 rounded-xl justify-center items-center lg:gap-2 md:gap-2 gap-0 inline-flex relative">
            <div className="text-center text-white g:text-lg md:text-lg text-base font-semibold font-['Poppins'] leading-9 tracking-tight">
              <a href="https://wa.me/62895414873950">
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
