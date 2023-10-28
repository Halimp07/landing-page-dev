import React, { useEffect } from "react";
import { boot_1, boot_2, boot_3 } from "@/Data";
import AOS from "aos";
import "aos/dist/aos.css";

const Bootcamp = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full bg-orange-200 bg-opacity-20 lg:flex md:flex lg:justify-center md:justify-center justify-start">
      <div className="lg:section md:section lg:my-[70px] md:my-[40px] my-[30px] lg:mx-0 md:mx-0 mx-5 flex-col lg:gap-[50px] md:gap-[25px] gap-0 inline-flex">
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="400"
          data-aos-offset="0"
          className="lg:h-24 md:h-full h-full flex-col justify-start items-start lg:gap-2 md:gap-0 gap-0 inline-flex"
        >
          <div className="w-full text-teal-700 lg:text-4xl md:text-2xl text-xl font-bold font-['Poppins'] lg:leading-10 md:leading-10 leading-7 tracking-wide">
            Bootcamp dan Course Menarik di Eduskill
          </div>
          <div className="h-10 text-teal-600 lg:text-3xl md:text-xl text-lg font-semibold font-['Poppins'] lg:leading-10 md:leading-10 leading-7 tracking-wide">
            Jadi Engineer Handal
          </div>
        </div>

        <div className="lg:flex md:flex lg:space-x-5 md:space-x-5 space-x-0 justify-start items-center">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="lg:w-96 md:w-[400px] w-full lg:h-[14.5rem] md:h-44 h-44 bg-white rounded-2xl shadow"
          >
            <div className="flex lg:mt-[32px] md:mt-[12px] mt-2 lg:py-0 items-center md:py-0 py-3">
              <img
                className="lg:ml-12 md:ml-8 ml-8 lg:w-16 md:w-12 w-14"
                src={boot_1}
              />
              <div className="ml-[16.93px] w-full h-14 text-teal-500 lg:text-lg md:text-sm font-bold font-['Poppins'] capitalize leading-7 tracking-tight">
                Kelas Frontend Engineering
              </div>
            </div>
            <div className="lg:ml-[31.08px] md:ml-4 ml-4 lg:mr-0 md:mr-4 mr-4 font-['Poppins'] lg:mt-[14.57px] md:mt-[14.57px] mt-0 lg:mb-[33.02px] md:mb-0 mb-0 lg:h-28 md:h-20 text-neutral-700 lg:text-base md:text-[11px] text-xs font-light lg:leading-7 md:leading-5 leading-5 tracking-tight">
              Belajar pengembangan antarmuka pengguna (UI) dengan bahasa
              pemrograman HTML, CSS, dan JavaScript.
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1500"
            className="lg:w-96 md:w-[400px] w-full lg:h-[14.5rem] md:h-44 h-44 bg-white rounded-2xl shadow"
          >
         <div className="flex lg:mt-[32px] md:mt-[12px] mt-2 lg:py-0 items-center md:py-0 py-3">
              <img
                className="lg:ml-12 md:ml-8 ml-8 lg:w-16 md:w-14 w-14"
                src={boot_2}
              />
              <div className="ml-[16.93px] w-full h-14 text-teal-500 lg:text-lg md:text-sm font-bold font-['Poppins'] capitalize leading-7 tracking-tight">
                Kelas Full-Stack Web Development{" "}
              </div>
            </div>
            <div className="lg:ml-[31.08px] md:ml-4 ml-4 lg:mr-0 md:mr-4 mr-4 font-['Poppins'] lg:mt-[14.57px] md:mt-[14.57px] mt-0 lg:mb-[33.02px] md:mb-0 mb-0 lg:h-28 md:h-20 text-neutral-700 lg:text-base md:text-[11px] text-xs font-light lg:leading-7 md:leading-5 leading-5 tracking-tight">
              Belajar pengembangan antarmuka pengguna (UI) dengan HTML, CSS, dan
              JavaScript, serta pengembangan server, database, dan logika
              bisnis.
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="3000"
            className="xl:w-96 lg:w-96 md:w-[400px] w-full lg:h-[14.5rem] md:h-44 h-44 bg-white rounded-2xl shadow"
          >
             <div className="flex lg:mt-[32px] md:mt-[12px] mt-2 lg:py-0 items-center md:py-0 py-3">
              <img
                className="lg:ml-12 md:ml-8 ml-8 lg:w-16 md:w-14 w-14"
                src={boot_3}
              />{" "}
              <div className="ml-[16.93px] w-full h-14 text-teal-500 lg:text-lg md:text-sm font-bold font-['Poppins'] capitalize leading-7 tracking-tight">
                Kelas Artificial Intelligence (AI){" "}
              </div>
            </div>
            <div className="lg:ml-[31.08px] md:ml-4 ml-4 lg:mr-0 md:mr-4 mr-4 font-['Poppins'] lg:mt-[14.57px] md:mt-[14.57px] mt-0 lg:mb-[33.02px] md:mb-0 mb-0 lg:h-28 md:h-20 text-neutral-700 lg:text-base md:text-[11px] text-xs font-light lg:leading-7 md:leading-5 leading-5 tracking-tight">
              Belajar Kecerdasan buatan dari nol dengan menggunakan berbagai
              konsep seperti OCR, Maching Learning DLl
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bootcamp;
