//101
import React, { useState } from "react";
import { Plus } from "lucide-react";

import {CheckCircle2 } from "lucide-react";
import { FiEdit } from "react-icons/fi";

export default function AdsList101({ }) {
  const ads = [
    {
      type: "Card Ad",
      title: "Title",
      adId: "Ad ID",
      views: 420,
      hits: 50,
      color: "text-orange-500",
    },
    {
      type: "Banner Ad",
      title: "Title",
      adId: "Ad ID",
      views: 420,
      hits: 50,
      color: "text-orange-500",
    },
  ];
   const [selected, setSelected] = useState();
          const options = ["Active", "Saved"];

  return (
    <div className="min-h-screen bg-gray-100 ">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-18 xl:px-20 space-y-6 ">

      {/* Tabs */}
          <div className="flex items-center bg-[#787574] text-white rounded-full shadow-md w-[90%] sm:w-[80%] md:w-[60%] mx-auto px-1 py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => setSelected(option)}
                className={`flex-1 py-2 text-center text-sm sm:text-base font-medium rounded-full transition-all duration-300 ${
                  selected === option
                    ? "bg-white text-gray-900 shadow"
                    : "bg-transparent text-white"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

      {/* ===== AD LIST ===== */}
      <main className="flex-1 w-full  px-4 mt-6 mb-8">
        <div className=" mx-auto space-y-4">
          {ads.map((ad, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md flex items-center relative hover:shadow-lg "
            >
              {/* Thumbnail */}
              <div className=" w-28  sm:w-28 h-28 bg-black  rounded-l-xl  "></div>

              {/* Ad Details */}
              <div className=" px-4  ">
                <p
                  className={text-xs font-semibold ${ad.color} flex items-center}
                >
                  {ad.type}
                  < FiEdit 
                    size={16}
                    className="ml-4 text-black cursor-pointer"
                  />
                </p>
                <h3 className="text-sm font-bold text-gray-900 mt-1">{ad.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{ad.adId}</p>
                <div className="flex items-center  text-sm font-bold text-gray-900 mt-1 ml-4 gap-10  mx-auto">
                  <span>{ad.views} Views</span>
                  <span>|</span>
                  <span>{ad.hits} Hits</span>
                </div>
             

              {/* Status Icon */}
             <div className="bg-green-500 rounded-full absolute -top-1.5 right-4 ">
              <CheckCircle2
                size={26}
                className="text-green-50  "
              />
            </div>
           
             </div>
              </div>
          ))}
        
</div>
       
      </main>
{/* Add Card Button */}
<div className=" w-[90%] sm:w-[80%] md:w-[60%] mx-auto px-2 py-2 mb-2 space-y-4">
      <button
        type="submit"
       className="w-full flex items-center justify-center bg-[#1D1F2A] text-white font-semibold py-3 rounded-full shadow-md relative hover:bg-[#232738] transition"
     >
                        
                        <span className="mr-2">
                          <Plus/>
                        </span>
                        <span>Create Ad</span>
                      </button>
      </div>
</div>
</div>

 
  );
}
