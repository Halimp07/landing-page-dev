import React, { useEffect } from "react";
import { boot_1, boot_2, boot_3 } from "@/Data";
import AOS from "aos";
import "aos/dist/aos.css";

const Bootcamp = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full bg-orange-200 bg-opacity-20 2xl:pb-0 xl:pb-0 lg:pb-0 md:pb-0 pb-2 lg:flex md:flex lg:justify-center md:justify-center justify-start">
      <div className="2xl:section xl:section lg:section md:section lg:my-[70px] md:my-[40px] my-[30px]">
        <div className="2xl:mx-0 xl:mx-20 lg:mx-[85px] md:mx-0 mx-5">
          <div className="flex-col">
            <div
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="400"
              data-aos-offset="0"
              className="lg:h-24 md:h-full h-full flex-col justify-start items-start 2xl:gap-2 xl:gap-2 lg:gap-1 md:gap-0 gap-0 inline-flex 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-4"
            >
              <div className="w-full text-teal-700 2xl:text-4xl xl:text-4xl lg:text-2xl md:text-2xl text-xl font-bold font-['Poppins'] lg:leading-10 md:leading-10 leading-7 tracking-wide">
                Bootcamp dan Course Menarik di Eduskill
              </div>
              <div className="h-10 text-teal-600 2xl:text-3xl xl:text-3xl lg:text-xl md:text-xl text-lg font-semibold font-['Poppins'] lg:leading-10 md:leading-10 leading-7 tracking-wide">
                Jadi Engineer Handal
              </div>
            </div>

            <div className="2xl:mt-[50px] xl:mt-[50px] lg:mt-4 mt-5 lg:flex md:flex lg:space-x-5 md:space-x-5 space-x-0 2xl:space-y-0 xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-4 2xl:justify-between xl:justify-start lg:justify-start md:justify-start justify-start items-center">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className="lg:w-96 md:w-[400px] w-full 2xl:h-[14.5rem] xl:h-[14.5rem] lg:h-44 md:h-44 h-[170px] bg-white rounded-2xl shadow 2xl:py-0 xl:py-0 lg:py-0 md:py-0 py-0"
              >
                <div className="flex 2xl:mt-[32px] xl:mt-[32px] lg:mt-2 md:mt-3 mt-2 lg:py-0 items-center md:py-0 py-3">
                  <img
                    className="2xl:ml-12 xl:ml-12 lg:ml-9 md:ml-8 ml-8 2xl:w-16 xl:w-16 lg:w-14 md:w-14 w-14"
                    src={boot_1}
                  />
                  <div className="ml-[16.93px] 2xl:w-full xl:w-full lg:w-full md:w-full w-[200px] h-14 text-teal-500 2xl:text-lg xl:text-lg lg:text-base md:text-sm font-bold font-['Poppins'] capitalize leading-7 tracking-tight">
                    Kelas Frontend Engineering
                  </div>
                </div>
                <div className="2xl:ml-[31.08px] xl:ml-[31.08px] lg:ml-5 md:ml-4 ml-4 lg:mr-0 md:mr-4 mr-4 font-['Poppins'] lg:mt-[14.57px] md:mt-[14.57px] mt-0 lg:mb-[33.02px] md:mb-0 mb-0 2xl:h-28 xl:h-28 lg:h-20 md:h-20 text-neutral-700 2xl:text-base xl:text-base lg:text-sm md:text-[11px] text-xs font-light 2xl:leading-7 xl:leading-7 lg:leading-5 md:leading-5 leading-5 tracking-tight">
                  Belajar pengembangan antarmuka pengguna (UI) dengan bahasa
                  pemrograman HTML, CSS, dan JavaScript.
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1500"
                className="lg:w-96 md:w-[400px] w-full 2xl:h-[14.5rem] xl:h-[14.5rem] lg:h-44 md:h-44 h-[170px] bg-white rounded-2xl shadow 2xl:py-0 xl:py-0 lg:py-0 md:py-0 py-0"
              >
                <div className="flex 2xl:mt-[32px] xl:mt-[32px] lg:mt-2 md:mt-3 mt-2 lg:py-0 items-center md:py-0 py-3">
                  <img
                    className="2xl:ml-12 xl:ml-12 lg:ml-9 md:ml-8 ml-8 2xl:w-16 xl:w-16 lg:w-14 md:w-14 w-14"
                    src={boot_2}
                  />
                  <div className="ml-[16.93px] 2xl:w-full xl:w-full lg:w-full md:w-full w-[200px] h-14 text-teal-500 2xl:text-lg xl:text-lg lg:text-base md:text-sm font-bold font-['Poppins'] capitalize leading-7 tracking-tight">
                    Kelas Full-Stack Web Development{" "}
                  </div>
                </div>
                <div className="2xl:ml-[31.08px] xl:ml-[31.08px] lg:ml-5 md:ml-4 ml-4 lg:mr-0 md:mr-4 mr-4 font-['Poppins'] lg:mt-[14.57px] md:mt-[14.57px] mt-0 lg:mb-[33.02px] md:mb-0 mb-0 2xl:h-28 xl:h-28 lg:h-20 md:h-20 text-neutral-700 2xl:text-base xl:text-base lg:text-sm md:text-[11px] text-xs font-light 2xl:leading-7 xl:leading-7 lg:leading-5 md:leading-5 leading-5 tracking-tight">
                  Belajar pengembangan antarmuka pengguna (UI) dengan HTML, CSS,
                  dan JavaScript, serta pengembangan server, database, dan
                  logika bisnis.
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="3000"
                className="lg:w-96 md:w-[400px] w-full 2xl:h-[14.5rem] xl:h-[14.5rem] lg:h-44 md:h-44 h-[170px] bg-white rounded-2xl shadow 2xl:py-0 xl:py-0 lg:py-0 md:py-0 py-0"
              >
                <div className="flex 2xl:mt-[32px] xl:mt-[32px] lg:mt-2 md:mt-3 mt-2 lg:py-0 items-center md:py-0 py-3">
                  <img
                    className="2xl:ml-12 xl:ml-12 lg:ml-9 md:ml-8 ml-8 2xl:w-16 xl:w-16 lg:w-14 md:w-14 w-14"
                    src={boot_3}
                  />{" "}
                  <div className="ml-[16.93px] 2xl:w-full xl:w-full lg:w-full md:w-full w-[200px] h-14 text-teal-500 2xl:text-lg xl:text-lg lg:text-base md:text-sm font-bold font-['Poppins'] capitalize leading-7 tracking-tight">
                    Kelas Artificial Intelligence (AI){" "}
                  </div>
                </div>
                <div className="2xl:ml-[31.08px] xl:ml-[31.08px] lg:ml-5 md:ml-4 ml-4 lg:mr-0 md:mr-4 mr-4 font-['Poppins'] lg:mt-[14.57px] md:mt-[14.57px] mt-0 lg:mb-[33.02px] md:mb-0 mb-0 2xl:h-28 xl:h-28 lg:h-20 md:h-20 text-neutral-700 2xl:text-base xl:text-base lg:text-sm md:text-[11px] text-xs font-light 2xl:leading-7 xl:leading-7 lg:leading-5 md:leading-5 leading-5 tracking-tight">
                  Belajar Kecerdasan buatan dari nol dengan menggunakan berbagai
                  konsep seperti OCR, Machine Learning DLl
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bootcamp;
