import React, { useState } from "react";
import { dropdown_btn } from "@/Data";

const Faq = () => {
  const [rotation, setRotation] = useState(0);

  const [faq1Open, setFaq1Open] = useState(false); // State for the first FAQ

  const toggleFaq1 = () => {
    setFaq1Open(!faq1Open); // Toggle the state when clicked
  };

  const toggleRotation = () => {
    const newRotation = rotation === 0 ? -180 : 0;
    setRotation(newRotation);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="lg:section md:section my-[50px] flex-col inline-flex items-center">
        <div className="lg:w-[923px] md:w-[923px] w-full flex justify-center mb-10">
          <div className="h-20 flex-col items-center gap-1 inline-flex">
            <div className="text-center text-emerald-800 lg:text-[34px] md:text-[34px] text-base font-bold font-['Poppins'] capitalize lg:leading-10 md:leading-10 leading-7 tracking-wide">
              Yang ingin kamu tahu seputar eduskill bootcamp{" "}
            </div>
            <div className="w-96 h-6 text-center text-gray-400 lg:text-base md:text-base text-xs font-medium font-['Inter'] capitalize leading-snug tracking-tight">
              Yang ingin kamu tahu seputar eduskill bootcamp{" "}
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="flex-col lg:w-full md:w-full lg:mx-0 md:mx-0 mx-[20px] gap-6 inline-flex">
            <div
              className="justify-between lg:px-6 md:px-6 px-8 lg:py-3 md:py-3 py-3 bg-white rounded-lg shadow border border-teal-400 items-center inline-flex cursor-pointer"
              onClick={toggleFaq1}
            >
              <div className="lg:w-full md:w-full w-[290px] lg:h-7 md:h-7 h-full text-emerald-800 lg:text-base md:text-base text-xs font-semibold font-['Poppins'] leading-normal tracking-tight">
                Gimana caranya supaya orang-orang atau perusahaan percaya kalau
                saya udah lulus dari EduSkill Bootcamp?
              </div>
              <div>
                <img
                  src={dropdown_btn}
                  alt="dropdown-button"
                  className="lg:w-[19px] md:w-[19px] w-5 lg:h-3 md:h-3 h-3"
                />
              </div>
            </div>
            {faq1Open && (
              <div className="lg:px-6 md:px-6 px-8 lg:py-3 md:py-3 py-4 text-emerald-800 lg:text-base md:text-base text-sm font-semibold font-['Poppins'] leading-normal tracking-tight mt-2">
                {/* Display the answer when the FAQ is open */}
                Ini adalah jawaban dari pertanyaan ini. Contoh: Orang-orang atau
                perusahaan akan percaya jika Anda dapat menunjukkan proyek atau
                portofolio yang sudah Anda buat setelah lulus dari EduSkill
                Bootcamp.
              </div>
            )}
            <div
              className="justify-between lg:px-6 md:px-6 px-8 lg:py-3 md:py-3 py-4 bg-white rounded-lg shadow border border-teal-400 items-center inline-flex cursor-pointer"
              onClick={toggleFaq1}
            >
              <div className="lg:w-full md:w-full w-[290px] lg:h-7 md:h-7 h-full text-emerald-800 lg:text-base md:text-base text-xs font-semibold font-['Poppins'] leading-normal tracking-tight">
                Kapan agenda Bootcamp dimulai?{" "}
              </div>
              <div>
                <img
                  src={dropdown_btn}
                  alt="dropdown-button"
                  className="lg:w-[19px] md:w-[19px] w-5 lg:h-3 md:h-3 h-3"
                />
              </div>
            </div>
            {faq1Open && (
              <div className="lg:px-6 md:px-6 px-8 lg:py-3 md:py-3 py-4 text-emerald-800 lg:text-base md:text-base text-sm font-semibold font-['Poppins'] leading-normal tracking-tight mt-2">
                {/* Display the answer when the FAQ is open */}
                Ini adalah jawaban dari pertanyaan ini. Contoh: Orang-orang atau
                perusahaan akan percaya jika Anda dapat menunjukkan proyek atau
                portofolio yang sudah Anda buat setelah lulus dari EduSkill
                Bootcamp.
              </div>
            )}

            <div
              className="justify-between lg:px-6 md:px-6 px-8 lg:py-3 md:py-3 py-4 bg-white rounded-lg shadow border border-teal-400 items-center inline-flex cursor-pointer"
              onClick={toggleFaq1}
            >
              <div className="lg:w-full md:w-full w-[290px] lg:h-7 md:h-7 h-full text-emerald-800 lg:text-base md:text-base text-xs font-semibold font-['Poppins'] leading-normal tracking-tight">
                Apakah programnya full online?{" "}
              </div>
              <div>
                <img
                  src={dropdown_btn}
                  alt="dropdown-button"
                  className="lg:w-[19px] md:w-[19px] w-5 lg:h-3 md:h-3 h-3"
                />
              </div>
            </div>
            {faq1Open && (
              <div className="lg:px-6 md:px-6 px-8 lg:py-3 md:py-3 py-4 text-emerald-800 lg:text-base md:text-base text-sm font-semibold font-['Poppins'] leading-normal tracking-tight mt-2">
                {/* Display the answer when the FAQ is open */}
                Ini adalah jawaban dari pertanyaan ini. Contoh: Orang-orang atau
                perusahaan akan percaya jika Anda dapat menunjukkan proyek atau
                portofolio yang sudah Anda buat setelah lulus dari EduSkill
                Bootcamp.
              </div>
            )}

            <div
              className="justify-between lg:px-6 md:px-6 px-8 lg:py-3 md:py-3 py-4 bg-white rounded-lg shadow border border-teal-400 items-center inline-flex cursor-pointer"
              onClick={toggleFaq1}
            >
              <div className="lg:w-full md:w-full w-[290px] lg:h-7 md:h-7 h-full text-emerald-800 lg:text-base md:text-base text-xs font-semibold font-['Poppins'] leading-normal tracking-tight">
                Apakah sedang ada promo potongan harga?{" "}
              </div>
              <div>
                <img
                  src={dropdown_btn}
                  alt="dropdown-button"
                  className="lg:w-[19px] md:w-[19px] w-5 lg:h-3 md:h-3 h-3"
                />
              </div>
            </div>
            {faq1Open && (
              <div className="lg:px-6 md:px-6 px-8 lg:py-3 md:py-3 py-4 text-emerald-800 lg:text-base md:text-base text-sm font-semibold font-['Poppins'] leading-normal tracking-tight mt-2">
                {/* Display the answer when the FAQ is open */}
                Ini adalah jawaban dari pertanyaan ini. Contoh: Orang-orang atau
                perusahaan akan percaya jika Anda dapat menunjukkan proyek atau
                portofolio yang sudah Anda buat setelah lulus dari EduSkill
                Bootcamp.
              </div>
            )}

            <div
              className="justify-between lg:px-6 md:px-6 px-8 lg:py-3 md:py-3 py-4 bg-white rounded-lg shadow border border-teal-400 items-center inline-flex cursor-pointer"
              onClick={toggleFaq1}
            >
              <div className="lg:w-full md:w-full w-[290px] lg:h-7 md:h-7 h-full text-emerald-800 lg:text-base md:text-base text-xs font-semibold font-['Poppins'] leading-normal tracking-tight">
                Kalau udah lulus dari Eduskill Bootcamp, bisa dibantu cari
                kerja?{" "}
              </div>
              <div>
                <img
                  src={dropdown_btn}
                  alt="dropdown-button"
                  className="lg:w-[19px] md:w-[19px] w-5 lg:h-3 md:h-3 h-3"
                />
              </div>
            </div>
            {faq1Open && (
              <div className="lg:px-6 md:px-6 px-8 lg:py-3 md:py-3 py-4 text-emerald-800 lg:text-base md:text-base text-sm font-semibold font-['Poppins'] leading-normal tracking-tight mt-2">
                {/* Display the answer when the FAQ is open */}
                Ini adalah jawaban dari pertanyaan ini. Contoh: Orang-orang atau
                perusahaan akan percaya jika Anda dapat menunjukkan proyek atau
                portofolio yang sudah Anda buat setelah lulus dari EduSkill
                Bootcamp.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
