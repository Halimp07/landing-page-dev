import React from "react";
import { bg_overlay } from "@/Data";

const Contact = () => {
  return (
    <div className="w-full h-72 bg-teal-600 flex justify-center relative">
      <div className="section flex justify-center">
        <img className="w-full h-[283px] absolute right-0 left-0 top-0" src={bg_overlay} />
        <div className="h-72 py-12 flex-col justify-center items-center gap-6 inline-flex">
          <div className="w-[830px] text-center text-white text-4xl font-bold font-['Poppins'] leading-10 tracking-wide">
            Mau Request Kelas Untuk Lembaga pendidikan mu? Bisa Dong
          </div>
          <div className="px-6 py-3 bg-orange-400 rounded-xl justify-center items-center gap-2.5 inline-flex relative">
            <div className="text-center text-white text-lg font-semibold font-['Poppins'] leading-9 tracking-tight">
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
