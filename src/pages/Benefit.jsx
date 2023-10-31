import React, { useEffect } from "react";
import { eduskill_left, consultant, prev, next } from "@/Data";
import AOS from "aos";
import "aos/dist/aos.css";

const Benefit = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1000"
      className="w-full bg section lg:my-[50px] md:my-[30px] my-5 lg:mx-auto md:mx-auto mx-auto relative"
    >
      <div className="2xl:mx-0 xl:mx-20 lg:mx-10 md:mx-0 mx-5">
        <div className="w-full relative bg-teal-400 2xl:py-[40px] xl:py-[40px] lg:py-[40px] md:py-[40px] py-7 2xl:pr-[85px] xl:pr-[60px] lg:pr-[80px] md:pr-[50px] pr-0 overflow-hidden">
          <div className="absolute left-0 w-full top-0">
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="z-20 2xl:py-2.5 xl:py-2 lg:py-2.5 md:py-1 py-2.5 left-0 top-0 absolute bg-white rounded-tr-full rounded-br-full flex-col justify-start items-start gap-2.5 inline-flex"
          >
            <img
              className="2xl:w-20 xl:w-16 lg:w-20 md:w-16 w-20 2xl:h-6 xl:h-5 lg:h-6 md:h-6 h-6"
              src={eduskill_left}
            />
          </div>
          <div className="lg:py-[55px] md:py-[45px] 2xl:pl-[80px] xl:pl-[60px] lg:pl-[80px] md:pl-[50px] pl-0">
            <div className="flex-col lg:mt-0 md:mt-0 mt-16 justify-start items-start gap-1 lg:inline-flex md:inline-flex">
              <div
                data-aos="fade-down"
                data-aos-duration="2000"
                className="lg:w-96 md:w-96 w-44 lg:h-28 md:h-14 h-full flex-col lg:mx-0 md:mx-0 mx-auto justify-start items-start gap-1 lg:inline-flex md:inline-flex"
              >
                <div className="lg:text-start text-center px-2 py-0.5 bg-orange-400 lg:mx-0 md:mx-0 mx-auto justify-center items-center gap-2.5 lg:inline-flex md:inline-flex">
                  <div className="text-white lg:text-lg md:text-sm text-sm sm:text-center font-extrabold font-['Poppins'] capitalize leading-9 tracking-tight">
                    Mau ikut bootcamp
                  </div>
                </div>
                <div className="lg:w-96 md:w-96 w-full h-full lg:text-start md:text-start sm:text-center text-center text-white lg:text-4xl md:text-2xl text-base font-extrabold font-['Poppins'] capitalize lg:leading-10 md:leading-7 leading-7 tracking-wide">
                  tapi takut salah <br />
                  pilih course?
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="lg:visible md:visible invisible bg-teal-400 2xl:h-[45px] xl:h-[35px] lg:h-[20px] md:h-[25px] w-full rotate-[105deg] absolute z-20 2xl:left-[50%] xl:left-[43%] lg:left-[43.5%] md:left-[47%] top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="bg-orange-400 w-[100%] 2xl:ml-[45%] xl:ml-[38%] lg:ml-[41%] md:ml-[42%] absolute left-0 lg:top-0 md:top-0 bottom-0 lg:h-full md:h-full h-1/2 lg:-skew-x-[15deg] md:-skew-x-[15deg]-skew-x-0 z-10"></div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className=" text-white xl:text-[27px] lg:text-[25px] md:text-lg lg:mt-4 md:mt-0 mt-56 text-base xl:flex lg:flex md:flex flex lg:justify-end md:justify-end justify-center xl:text-start lg:text-start md:text-start text-center font-extrabold xl:mr-10 lg:mr-10 md:mr-10 mr-0 font-['Poppins'] capitalize leading-loose tracking-wide relative z-20"
          >
            Tenang, ada Eduskill Consultant!
          </div>

          {consultant.map((item) => (
            <div
              key={item.id}
              data-aos="fade-left"
              data-aos-duration="2000"
              className="flex lg:justify-end md:justify-end justify-between xl:px-0 lg:px-0 md:px-0 px-16 space-x-3 relative z-20"
            >
              <div>
                {item.textLabel && (
                  <div className="lg:text-right md:text-right text-center text-white lg:text-lg md:text-sm text-sm font-normal font-['Poppins'] capitalize leading-loose tracking-tight my-auto">
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
                          className="xl:w-7 lg:w-7 md:w-5 w-5"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="2xl:invisible xl:invisible lg:invisible md:invisible visible 2xl:w-[1575px] xl:w-[1170px] lg:w-full md:w-[815px] w-full lg:h-9 md:h-16 h-[50px] absolute flex justify-between items-center z-20 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 top-1/2">
          
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="xl:w-16 lg:w-14 md:w-12 w-12 xl:h-16 lg:h-14 md:h-12 h-12 absolute left-0"
          >
            <button>
              <img
                src={prev}
                alt=""
                className="xl:w-16 lg:w-14 md:w-12 w-12 xl:h-16 lg:h-14 md:h-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </button>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="xl:w-16 lg:w-14 md:w-12 w-12 xl:h-16 lg:h-14 md:h-12 h-12 absolute right-0"
          >
            <button>
              <img
                src={next}
                alt=""
                className="xl:w-16 lg:w-14 md:w-12 w-12 xl:h-16 lg:h-14 md:h-12 h-12 absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2"
              />
            </button>
          </div>
        </div>
        
        

        <div className="2xl:visible xl:visible lg:visible md:visible invisible 2xl:w-[1575px] xl:w-[1170px] lg:w-[1000px] md:w-[815px] w-full lg:h-9 md:h-16 h-[250px] absolute flex justify-between items-center z-20 left-1/2 transform -translate-x-1/2 top-1/2">
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="xl:w-16 lg:w-14 md:w-12 w-12 xl:h-16 lg:h-14 md:h-12 h-12 absolute left-0"
          >
            <button>
              <img
                src={prev}
                alt=""
                className="xl:w-16 lg:w-14 md:w-12 w-12 xl:h-16 lg:h-14 md:h-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </button>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="xl:w-16 lg:w-14 md:w-12 w-12 xl:h-16 lg:h-14 md:h-12 h-12 absolute right-0"
          >
            <button>
              <img
                src={next}
                alt=""
                className="xl:w-16 lg:w-14 md:w-12 w-12 xl:h-16 lg:h-14 md:h-12 h-12 absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
