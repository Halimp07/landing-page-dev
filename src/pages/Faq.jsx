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
      <div className="section my-[50px] flex-col inline-flex items-center">
        <div className="w-[923px] flex justify-center mb-10">
          <div className="h-20 flex-col items-center gap-1 inline-flex">
            <div className="text-center text-emerald-800 text-[34px] font-bold font-['Poppins'] capitalize leading-10 tracking-wide">
              Yang ingin kamu tahu seputar eduskill bootcamp{" "}
            </div>
            <div className="w-96 h-6 text-center text-gray-400 text-base font-medium font-['Inter'] capitalize leading-snug tracking-tight">
              Yang ingin kamu tahu seputar eduskill bootcamp{" "}
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="flex-col w-full gap-6 inline-flex">
            <div
              className="justify-between px-6 py-3 bg-white rounded-lg shadow border border-teal-400  items-center inline-flex cursor-pointer"
              onClick={toggleFaq1}
            >
              <div className="h-7 text-emerald-800 text-base font-semibold font-['Poppins'] leading-normal tracking-tight">
                Gimana caranya supaya orang-orang atau perusahaan percaya kalau
                saya udah lulus dari EduSkill Bootcamp?
              </div>
              <div
              >
                <img src={dropdown_btn} alt="dropdown-button" className="w-[19px] h-[9.5px]"/>
              </div>
            </div>
            {faq1Open && (
              <div className=" px-6 py-3 text-emerald-800 text-base font-semibold font-['Poppins'] leading-normal tracking-tight mt-2">
                {/* Display the answer when the FAQ is open */}
                Ini adalah jawaban dari pertanyaan ini. Contoh: Orang-orang atau
                perusahaan akan percaya jika Anda dapat menunjukkan proyek atau
                portofolio yang sudah Anda buat setelah lulus dari EduSkill
                Bootcamp.
              </div>
            )}
            <div className="self-stretch px-6 py-3 bg-white rounded-lg shadow border border-teal-400 justify-between items-center inline-flex">
              <div className="h-7 text-emerald-800 text-base font-semibold font-['Poppins'] leading-normal tracking-tight">
                Kapan agenda Bootcamp dimulai?
              </div>
            </div>
            <div className="self-stretch px-6 py-3 bg-white rounded-lg shadow border border-teal-400 justify-between items-center inline-flex">
              <div className="h-7 text-emerald-800 text-base font-semibold font-['Poppins'] leading-normal tracking-tight">
                Apakah programnya full online?
              </div>
            </div>
            <div className="self-stretch px-6 py-3 bg-white rounded-lg shadow border border-teal-400 justify-between items-center inline-flex">
              <div className="h-7 text-emerald-800 text-base font-semibold font-['Poppins'] leading-normal tracking-tight">
                Apakah sedang ada promo potongan harga?
              </div>
            </div>
            <div className="self-stretch px-6 py-3 bg-white rounded-lg shadow border border-teal-400 justify-between items-center inline-flex">
              <div className="h-7 text-emerald-800 text-base font-semibold font-['Poppins'] leading-normal tracking-tight">
                Kalau udah lulus dari Eduskill Bootcamp, bisa dibantu cari
                kerja?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
