import React from "react";
import { eduskill, hero, logo } from "@/Data";

const Eduskill = () => {
  return (
    <div className="w-full h-[592px] bg-[#B0E4DE]/40 ">
      <div className="container mx-auto ">
        <div className="lg:flex md:flex justify-between md:space-x-4">
          <div className="section-1 lg:mt-[68px] md:mt-[68px] mt-0 lg:pt-0 md:pt-0 pt-3 lg:mx-0 md:mx-0 mx-[20px]">
            <div className="logo-eduskill flex lg:justify-start md:justify-start justify-start mr-3">
              <img
                src={eduskill}
                alt="logo_eduskill"
                className="lg:w-48 md:w-52 w-36 lg:h-16 md:h-16 h-12"
              />
            </div>

            <div className="lg:w-[603px] md:w-[603px] w-full lg:mt-3 md:mt-3 mt-4 lg:text-start md:text-start text-start">
              <span className="text-black lg:text-6xl md:text-6xl text-lg font-extrabold font-[''] capitalize tracking-wide">
                Upgrade Skill Pemrogramanmu Bersama{" "}
              </span>
              <span className="text-orange-500 lg:text-6xl md:text-6xl text-lg  font-extrabold font-[''] capitalize tracking-wide">
                Eduskill
              </span>
            </div>
            <div className="lg:mt-5 md:mt-5 mt-2 text-justify">
              <span className="text-black text-base font-normal font-[''] lg:leading-loose md:leading-loose leading-none lg:tracking-tight md:tracking-tight tracking-normal">
                Jadi{" "}
              </span>
              <span className="text-black text-base font-bold font-[''] lg:leading-loose md:leading-loose leading-none lg:tracking-tight md:tracking-tight tracking-normal">
                #SelangkahdiDepan
              </span>
              <span className="text-black text-base font-normal font-[''] lg:leading-loose md:leading-loose leading-none lg:tracking-tight md:tracking-tight tracking-normal">
                {" "}
                kuasai digital skills dengan metode belajar yang fun!
                <br />
                Dapatkan materi sesuai kebutuhan industri dan disiapkan daftar
                kerja
              </span>
            </div>
            <div className="lg:mt-6 md:mt-6 mt-3">
              <div className="lg:w-52 md:w-52 w-[164px] h-14 px-6 lg:py-3 md:py-3 py-2 bg-orange-400 rounded-xl justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-white lg:text-lg md:text-lg text-base font-semibold font-[''] leading-9 tracking-tight">
                  <a href="http://linktr.ee/eduskill">Mulai Sekarang!</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex lg:mt-[125px] md:mt-[125px] mt-[40px] lg:mx-0 md:mx-0 mx-[20px]">
            <div className="lg:w-[440px] md:w-[440px] w-full relative">
              <div
                className="relative flex items-end justify-start bg-contain bg-no-repeat lg:rounded-3xl md:rounded-3xl rounded-2xl text-left lg:h-[285px] md:h-[285px] h-[180px]"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.7), transparent), url(${hero})`,
                  backgroundPosition: "left 65px center",
                  backgroundSize: "100% 100%",
                }}
              >
                <div className="absolute top-0 w-full lg:h-[285px] md:h-[285px] h-[180px] bg-gradient-to-r from-orange-400 lg:rounded-3xl md:rounded-3xl rounded-2xl"></div>
                <div className="lg:left-8 md:left-8 left-3 lg:top-[90px] md:top:[90px] top-[45px] absolute text-white lg:text-xl md:text-xl text-base lg:font-bold md:font-bold font-semibold font-[''] capitalize lg:leading-7 md:leading-7 leading-1 lg:tracking-tight md:tracking-tight tracking-normal">
                  Dari gak percaya diri,
                  <br />
                  <span>
                    hingga mampu <br />
                    menginspirasi
                  </span>
                </div>
                <div className="lg:left-8 md:left-8 left-3 lg:top-[220px] md:top-[220px] top-[125px] absolute">
                  <span className="text-white lg:text-base md:text-base text-sm font-medium font-[] lg:leading-tight md:leading-tight leading-none tracking-tight">
                    Saatnya
                  </span>
                  <span className="text-white lg:text-base md:text-base text-sm font-bold font-[] lg:leading-tight md:leading-tight leading-none tracking-tight">
                    {" "}
                    #MulaiUpskilling
                    <br />
                  </span>
                  <span className="text-white lg:text-base md:text-base text-sm font-medium font-[] lg:leading-tight md:leading-tight leading-none tracking-tight">
                    Bersama Eduskill
                  </span>
                </div>
                <img
                  className="lg:w-48 md:w-48 w-28 lg:h-14 md:h-14 h-10 lg:left-8 md:left-8 left-3 lg:top-5 md:top-5 top-1 absolute"
                  src={logo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eduskill;
