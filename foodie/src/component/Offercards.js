import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Offercards = () => {
  return (
    <div className="flex items-center mt-11 ml-36">
      <div className="">
        <div className="flex items-center flex-wrap">
          <h3 className=" text-2xl font-bold ">Best offers for you</h3>
          <div className="flex justify-evenly ml-[800px]">
            <span className="bg-slate-300 rounded-full h-7 w-7 px-1.5 py-0.5">
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>
            <span className="bg-slate-300 rounded-full h-7 w-7 px-1.5 py-0.5">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </div>
        </div>
        <div>
          <div className="inline-flex my-5 flex-row overflow-scroll w-[1080px] no-scrollbar">
            <div className="pr-6">
              <img
                className="w-[425px] h-[252px] max-w-none"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/e41986d6a954dd3ef63a880db408abb9"
                alt="Flat deals"
              />
            </div>
            <div className=" pr-6">
              <img
                className="w-[425px] h-[252px] max-w-none"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/e41986d6a954dd3ef63a880db408abb9"
                alt="Flat deals"
              />
            </div>
            <div className="pr-6">
              <img
                className="w-[425px] h-[252px] max-w-none"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/e41986d6a954dd3ef63a880db408abb9"
                alt="Flat deals"
              />
            </div>
            <div className="pr-6">
              <img
                className="w-[425px] h-[252px] max-w-none"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/e41986d6a954dd3ef63a880db408abb9"
                alt="Flat deals"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offercards;
