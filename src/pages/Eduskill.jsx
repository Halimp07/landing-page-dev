import React from "react";
import { eduskill, hero, logo } from "@/Data";

const Eduskill = () => {
  return (
    <div className="w-full h-[592px] bg-[#B0E4DE]/40 flex justify-center">
      <div className="section-eduskill ml-[85px] mr-[56.79px] flex justify-between">
        <div className="section-1 mt-[68px]">
          <div className="logo-eduskill">
            <img src={eduskill} alt="logo_eduskill" className="w-52 h-16" />
          </div>
          <div className="w-[603px] mt-3">
            <span className="text-black text-6xl font-extrabold font-[''] capitalize tracking-wide">
              Upgrade Skill Pemrogramanmu Bersama{" "}
            </span>
            <span className="text-orange-500 text-6xl font-extrabold font-[''] capitalize tracking-wide">
              Eduskill
            </span>
          </div>
          <div className="mt-5">
            <span className="text-black text-base font-normal font-[''] leading-loose tracking-tight">
              Jadi
            </span>
            <span className="text-black text-base font-bold font-['Poppins'] leading-loose tracking-tight">
              {" "}
              #SelangkahdiDepan
            </span>
            <span className="text-black text-base font-normal font-['Poppins'] leading-loose tracking-tight">
              {" "}
              kuasai digital skills dengan metode belajar yang fun!
              <br />
              Dapatkan materi sesuai kebutuhan industri dan disiapkan daftar
              kerja
            </span>
          </div>
          <div className="mt-6">
            <div className="w-52 h-14 px-6 py-3 bg-orange-400 rounded-xl justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-white text-lg font-semibold font-[''] leading-9 tracking-tight">
                Mulai Sekarang!
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-[125px]">
        
        <div className="w-[440px] relative">
          <div
            className="relative flex items-end justify-start bg-contain bg-no-repeat rounded-3xl text-left h-[285px]"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.7), transparent), url(${hero})`,
              backgroundPosition: "left 65px center",
            }}
          >
            <div className="absolute top-0 w-full h-[285px] bg-gradient-to-r from-orange-400 rounded-3xl"></div>
            <div className="left-8 top-[90px] absolute text-white text-xl font-bold font-['Inter'] capitalize leading-7 tracking-tight">
              Dari gak percaya diri,
              <br />
              <span className="font-semibold">hingga mampu <br/>menginspirasi</span>
            </div>
            <div className="left-8 top-[220px] absolute">
              <span className="text-white text-base font-medium font-['Inter'] leading-tight tracking-tight">
                Saatnya
              </span>
              <span className="text-white text-base font-bold font-['Inter'] leading-tight tracking-tight">
                {" "}
                #MulaiUpskilling
                <br />
              </span>
              <span className="text-white text-base font-medium font-['Inter'] leading-tight tracking-tight">
                Bersama Eduskill
              </span>
            </div>
            <img
              className="w-48 h-14 left-8 top-[20px] absolute"
              src={logo}
            />
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Eduskill;
