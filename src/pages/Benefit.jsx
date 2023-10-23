import React from "react";
import { eduskill_left, consultant, prev, next } from "@/Data";

const Benefit = () => {
  return (
      <div className="w-full section bg-teal-400 my-[50px] mx-auto relative">
        <div className="w-full relative py-[40px] pr-[67px] overflow-hidden">
          <div className="bg-teal-400 h-[25px] w-full rotate-[105deg] absolute z-20 left-[45%] top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="bg-orange-400 w-[100%] md:ml-[42%] xl:ml-[50%] absolute left-0 top-0 h-full -skew-x-[15deg] z-10"></div>
          <div className="flex"></div>
          <div className=" text-white text-[27px] flex justify-end font-extrabold mr-10 font-['Inter'] capitalize leading-loose tracking-wide relative z-20">
            Tenang, ada Eduskill Consultant!
          </div>

          {consultant.map((item) => (
            <div
              key={item.id}
              className="flex justify-end space-x-3 relative z-20"
            >
              <div>
                {item.textLabel && (
                  <div className="text-right text-white text-lg font-normal font-['Inter'] capitalize leading-loose tracking-tight my-auto">
                    {item.textLabel}
                  </div>
                )}
              </div>
              <div className="my-auto">
                {item.additionalElements && (
                  <div>
                    {item.additionalElements.map((element) => (
                      <div key={element.id}>
                        <img
                          src={element.icon}
                          alt="Check Icon"
                          className="w-7"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-teal-400 absolute w-full top-0">
          <div className="py-[40px] pl-[100px]">
            <div className="pt-2.5 pb-2.5 left-0 top-0 absolute bg-white rounded-tr-full rounded-br-full flex-col justify-start items-start gap-2.5 inline-flex">
              <img className="w-20 h-6" src={eduskill_left} />
            </div>

            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div className="w-96 h-36 flex-col justify-start items-start gap-1 inline-flex">
                <div className="px-2 py-0.5 bg-orange-400 justify-center items-center gap-2.5 inline-flex">
                  <div className="text-white text-lg font-extrabold font-['Poppins'] capitalize leading-9 tracking-tight">
                    Mau ikut bootcamp
                  </div>
                </div>
                <div className="w-96 h-28 text-white text-4xl font-extrabold font-['Poppins'] capitalize leading-10 tracking-wide">
                  tapi takut salah <br />
                  pilih course?
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:w-[1600px]  xl:w-[1324px] md:w-[1080px] sm:w-[700px] h-16 absolute flex justify-between items-center z-20 left-1/2 transform -translate-x-1/2 top-1/2">
            <div className="w-16 h-16 absolute  left-0">
              <img
                src={prev}
                alt=""
                className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="w-16 h-16 absolute right-0">
              <img
                src={next}
                alt=""
                className="w-16 h-16 absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Benefit;
