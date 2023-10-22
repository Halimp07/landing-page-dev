import React from "react";
import { boot_1, boot_2, boot_3 } from "@/Data";
const Bootcamp = () => {
  return (
    <div className="w-full bg-orange-200 bg-opacity-20 flex justify-center">
      <div className="section my-[70px] flex-col gap-[50px] inline-flex">
        <div className="h-24 flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="text-teal-700 text-4xl font-bold font-['Poppins'] leading-10 tracking-wide">
            Bootcamp dan Course Menarik di Eduskill
          </div>
          <div className="w-96 h-10 text-teal-600 text-3xl font-semibold font-['Poppins'] leading-10 tracking-wide">
            Jadi Engineer Handal
          </div>
        </div>

        <div className="flex space-x-5">
          <div className="w-96 h-56 bg-white rounded-2xl shadow">
            <div className="flex mt-[32px]">
              <img
                className="ml-[56px] w-16"
                src={ boot_1 }
              />
              <div className="ml-[16.93px] w-32 h-14 text-teal-500 text-lg font-bold font-['Poppins'] capitalize leading-7 tracking-tight">
                Kelas Frontend Engineering
              </div>
            </div>
            <div className="ml-[31.08px] mt-[14.57px] mb-[33.02px] h-20 text-neutral-700 text-base font-light leading-7 tracking-tight">
              Belajar Kecerdasan buatan dari nol dengan menggunakan berbagai
              konsep seperti OCR, Maching Learning DLl
            </div>
          </div>
          <div className="w-96 h-56 bg-white rounded-2xl shadow">
            <div className="flex mt-[32px]">
              <img
                className="ml-[56px] w-16"
                src={ boot_2 }
              />
              <div className="ml-[16.93px] w-32 h-14 text-teal-500 text-lg font-bold font-['Poppins'] capitalize leading-7 tracking-tight">
                Kelas Frontend Engineering
              </div>
            </div>
            <div className="ml-[31.08px] mt-[14.57px] mb-[33.02px] h-20 text-neutral-700 text-base font-light leading-7 tracking-tight">
              Belajar Kecerdasan buatan dari nol dengan menggunakan berbagai
              konsep seperti OCR, Maching Learning DLl
            </div>
          </div>
          <div className="w-96 h-56 bg-white rounded-2xl shadow">
            <div className="flex mt-[32px]">
              <img
                className="ml-[56px] w-16"
                src={ boot_3 }
              />
              <div className="ml-[16.93px] w-32 h-14 text-teal-500 text-lg font-bold font-['Poppins'] capitalize leading-7 tracking-tight">
                Kelas Frontend Engineering
              </div>
            </div>
            <div className="ml-[31.08px] mt-[14.57px] mb-[33.02px] h-20 text-neutral-700 text-base font-light leading-7 tracking-tight">
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
