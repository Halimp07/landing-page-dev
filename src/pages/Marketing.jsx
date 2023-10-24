import React from "react";

const Marketing = () => {
  return (
    <div className="lg:mb-[50px] md:mb-[50px] mb-[30px] lg:flex md:flex justify-center lg:mx-0 md:mx-0 mx-[20px]">
      <div className="lg:section md:section">

      <div className="lg:flex md:flex">
        <div className="w-full lg:h-72 md:h-72 h-64 flex-col justify-start items-start lg:gap-6 md:gap-6 gap-3 inline-flex">
          <div className="lg:mr-20 md:mr-20 mr-14 text-orange-500 lg:text-3xl md:text-3xl text-lg font-bold font-['Poppins'] lg:leading-10 md:leading-10 leading-1 tracking-wide">
            Mengapa Eduskill menjadi Pilihan Terbaik untuk Upskilling?
          </div>
          <div className=" text-black lg:text-lg md:text-lg text-base lg:text-start md:text-start text-justify font-light font-['Poppins'] leading-normal tracking-tight">
            Eduskill Berfokus pada bidang Pemrograman dan AI berbasis Real
            Project Industri
            <br />
            <br />
            Di Dukung dengan Mentorbot yang bisa di akses kapan saja, serta
            kurikulum berbasis praktek
          </div>
        </div>

        <div className="w-full flex-col lg:gap-6 md:gap-6 gap-3 inline-flex items-start">
          <div className="w-full lg:h-40 md:h-40 h-28 lg:px-4 md:px-4 px-2 py-9 bg-white rounded-2xl border border-neutral-300 justify-start items-center inline-flex">
            <div className="lg:w-16 md:w-16 w-12 lg:h-16 md:h-16 h-12 lg:mr-[25px] md:mr-[25px] mr-2 bg-teal-500 rounded-full" />
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div className="text-teal-600 lg:text-xl md:text-xl text-base font-bold font-['Poppins'] leading-9 tracking-tight">
                Real Cases, Real Projects
              </div>
              <div className="lg:w-96 md:w-96 w-full text-neutral-500 lg:text-base md:text-base text-xs font-normal lg:leading-7 md:leading-7 leading-6 tracking-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Etiam commodo eros a lacus placerat, eget porttitor
              </div>
            </div>
          </div>

          <div className="w-full lg:h-40 md:h-40 h-28 lg:px-4 md:px-4 px-2 py-9 bg-white rounded-2xl border border-neutral-300 justify-start items-center inline-flex">
            <div className="lg:w-16 md:w-16 w-12 lg:h-16 md:h-16 h-12 lg:mr-[25px] md:mr-[25px] mr-2 bg-teal-500 rounded-full" />
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div className="text-teal-600 lg:text-xl md:text-xl text-base font-bold font-['Poppins'] leading-9 tracking-tight">
                Real Cases, Real Projects
              </div>
              <div className="lg:w-96 md:w-96 w-full text-neutral-500 lg:text-base md:text-base text-xs font-normal lg:leading-7 md:leading-7 leading-6 tracking-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Etiam commodo eros a lacus placerat, eget porttitor
              </div>
            </div>
          </div>

        </div>
      </div>
      </div>
    </div>
  );
};

export default Marketing;
