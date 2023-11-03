import React, { useState, useEffect } from "react";
import { faq, dropdown_btn, dropup_btn } from "@/Data";
import AOS from "aos";
import "aos/dist/aos.css";

const FaqItem = ({ item, toggleFaq, isItemOpen }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { id, question, answer } = item;

  // const aosProps =
  //   id === 0 || id === 2 || id === 4
  //     ? {
  //         "data-aos": "fade-up",
  //         "data-aos-offset": "300",
  //         "data-aos-easing": "ease-in-sine",
  //       }
  //     : {
  //         "data-aos": "fade-down",
  //         "data-aos-offset": "300",
  //         "data-aos-easing": "ease-in-sine",
  //       };

  return (
    <div
      // {...aosProps}
      className="justify-between lg:px-6 md:px-8 px-8 lg:py-3 md:py-3 py-4 bg-white rounded-lg shadow border border-teal-400 items-center inline-flex cursor-pointer"
      onClick={toggleFaq}
    >
      <div className="lg:w-full md:w-full w-[290px] 2xl:h-full xl:h-full lg:h-full md:h-full h-full text-emerald-800 2xl:text-base xl:text-base lg:text-sm text-xs font-semibold font-['Poppins'] leading-normal tracking-tight">
        {question}
      </div>
      <div>
        <img
          src={isItemOpen ? dropup_btn : dropdown_btn}
          alt="dropdown-button"
          className="lg:w-[19px] md:w-[19px] w-5 lg:h-3 md:h-3 h-3"
        />
      </div>
    </div>
  );
};

const Faq = () => {
  const [openFaqIds, setOpenFaqIds] = useState([]);

  const toggleFaq = (id) => {
    if (openFaqIds.includes(id)) {
      setOpenFaqIds(openFaqIds.filter((faqId) => faqId !== id));
    } else {
      setOpenFaqIds([...openFaqIds, id]);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="lg:section md:section lg:my-[50px] md:my-[50px] my-5 flex-col inline-flex items-center">
        <div className="2xl:mx-0 xl:mx-10 lg:mx-0 md:mx-0 mx-5">
          {faq.map((item) => (
            <div
              key={item.id}
              className="lg:mb-[25px] md:mb-[15px] mb-4 flex-col lg:w-full md:w-full inline-flex"
            >
              <FaqItem  
                item={item}
                toggleFaq={() => toggleFaq(item.id)}
                isItemOpen={openFaqIds.includes(item.id)}
              />
              {openFaqIds.includes(item.id) && (
                <div className="w-full lg:h-20 md:h-20 h-[5rem] lg:px-6 md:px-8 px-8 bg-emerald-50 rounded-tr rounded-br border-l-2 border-teal-700 justify-center items-center inline-flex">
                  <div className="lg:w-full md:w-full w-[290px] text-black 2xl:text-base xl:text-base lg:text-sm md:text-sm text-[11px] font-normal font-['Poppins'] leading-normal tracking-tight">
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
