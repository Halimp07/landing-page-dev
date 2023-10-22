import React from "react";

const Marketing = () => {
  return (
    <div className=" mb-[50px] flex justify-center">
      <div className="section">

      <div className="flex">
        <div className="h-72 flex-col justify-start items-start gap-6 inline-flex">
          <div className="mr-20 text-orange-500 text-3xl font-bold font-['Poppins'] leading-10 tracking-wide">
            Mengapa Eduskill menjadi Pilihan Terbaik untuk Upskilling?
          </div>
          <div className=" text-black text-lg font-light font-['Poppins'] leading-normal tracking-tight">
            Eduskill Berfokus pada bidang Pemrograman dan AI berbasis Real
            Project Industri
            <br />
            <br />
            Di Dukung dengan Mentorbot yang bisa di akses kapan saja, serta
            kurikulum berbasis praktek
          </div>
        </div>

        <div className=" flex-col gap-6 inline-flex items-center">
          <div className="h-40 px-4 py-9 bg-white rounded-2xl border border-neutral-300 justify-start items-center inline-flex">
            <div className="w-16 h-16 mr-[25px] bg-teal-500 rounded-full" />
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div className="text-teal-600 text-xl font-bold font-['Poppins'] leading-9 tracking-tight">
                Real Cases, Real Projects
              </div>
              <div className="w-96 text-neutral-500 text-base font-normal  leading-7 tracking-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Etiam commodo eros a lacus placerat, eget porttitor
              </div>
            </div>
          </div>

          <div className="h-40 px-4 py-9 bg-white rounded-2xl border border-neutral-300 justify-start items-center gap-6 inline-flex">
            <div className="w-16 h-16 bg-teal-500 rounded-full" />
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div className="text-teal-600 text-xl font-bold font-['Poppins'] leading-9 tracking-tight">
                Real Cases, Real Projects
              </div>
              <div className="w-96 text-neutral-500 text-base font-normal leading-7 tracking-tight">
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
