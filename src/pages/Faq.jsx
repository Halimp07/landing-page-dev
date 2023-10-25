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
            <div className="lg:w-96 md:w-96 w-full h-6 text-center text-gray-400 lg:text-base md:text-base text-xs font-medium font-['Inter'] capitalize leading-snug tracking-tight">
              Yang ingin kamu tahu seputar eduskill bootcamp{" "}
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="flex-col lg:w-full md:w-full gap-6 inline-flex">
            <div
              className="justify-between lg:px-6 md:px-6 px-8 lg:py-3 md:py-3 py-3 bg-white rounded-lg shadow border border-teal-400 items-center inline-flex cursor-pointer"
              onClick={toggleFaq1}
            >
              <div className="lg:w-full md:w-full w-[290px] lg:h-7 md:h-7 h-full text-emerald-800 lg:text-base md:text-base text-xs font-semibold font-['Poppins'] leading-normal tracking-tight">
                Bagaimana cara membeli kelas atau bootcamp di Eduskill?
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
                Untuk membeli kelas atau bootcamp, Anda dapat mengunjungi link:
                <a href="https://linktr.ee/eduskill" target="_blank" rel="noopener noreferrer" className="italic">
                  https://linktr.ee/eduskill{" "}
                </a>{" "}
                dan pilih program yang Anda minati. Ikuti langkah-langkah
                selanjutnya untuk menyelesaikan pembelian.
              </div>
            )}
            <div
              className="justify-between lg:px-6 md:px-6 px-8 lg:py-3 md:py-3 py-4 bg-white rounded-lg shadow border border-teal-400 items-center inline-flex cursor-pointer"
              onClick={toggleFaq1}
            >
              <div className="lg:w-full md:w-full w-[290px] lg:h-7 md:h-7 h-full text-emerald-800 lg:text-base md:text-base text-xs font-semibold font-['Poppins'] leading-normal tracking-tight">
                Bagaimana saya dapat meminta kelas khusus untuk lembaga atau
                kelompok?{" "}
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
                Untuk permintaan kelas khusus untuk lembaga atau kelompok,
                silakan hubungi tim admin di nomor  <a
                  href="https://wa.me/62895414873950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inter"
                >
                  +62895414873950.
                </a> atau melalui
                formulir kontak di situs web kami.
              </div>
            )}

            <div
              className="justify-between lg:px-6 md:px-6 px-8 lg:py-3 md:py-3 py-4 bg-white rounded-lg shadow border border-teal-400 items-center inline-flex cursor-pointer"
              onClick={toggleFaq1}
            >
              <div className="lg:w-full md:w-full w-[290px] lg:h-7 md:h-7 h-full text-emerald-800 lg:text-base md:text-base text-xs font-semibold font-['Poppins'] leading-normal tracking-tight">
                Apakah tersedia layanan bantuan atau dukungan teknis jika saya
                mengalami kesulitan?
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
                Ya, tim dukungan kami siap membantu Anda. Silakan hubungi kami
                melalui nomor  <a
                  href="https://wa.me/62895414873950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inter"
                >
                  +62895414873950.
                </a> atau gunakan fitur chat live di
                situs web kami untuk mendapatkan bantuan
              </div>
            )}

            <div
              className="justify-between lg:px-6 md:px-6 px-8 lg:py-3 md:py-3 py-4 bg-white rounded-lg shadow border border-teal-400 items-center inline-flex cursor-pointer"
              onClick={toggleFaq1}
            >
              <div className="lg:w-full md:w-full w-[290px] lg:h-7 md:h-7 h-full text-emerald-800 lg:text-base md:text-base text-xs font-semibold font-['Poppins'] leading-normal tracking-tight">
                Apa manfaat berlangganan premium di Eduskill?{" "}
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
                Berlangganan premium memberikan akses ke konten eksklusif,
                proyek-proyek lanjutan, dan bimbingan pribadi yang lebih
                mendalam dengan MentorBot.
              </div>
            )}

            <div
              className="justify-between lg:px-6 md:px-6 px-8 lg:py-3 md:py-3 py-4 bg-white rounded-lg shadow border border-teal-400 items-center inline-flex cursor-pointer"
              onClick={toggleFaq1}
            >
              <div className="lg:w-full md:w-full w-[290px] lg:h-7 md:h-7 h-full text-emerald-800 lg:text-base md:text-base text-xs font-semibold font-['Poppins'] leading-normal tracking-tight">
                Bagaimana saya bisa mendapatkan informasi lebih lanjut tentang
                program bootcamp yang ditawarkan oleh Eduskill?
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
                Untuk informasi lebih lanjut tentang program bootcamp kami,
                silakan kunjungi situs web kami atau hubungi tim admin di nomor{" "}
                <a
                  href="https://wa.me/62895414873950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inter"
                >
                  +62895414873950.
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
