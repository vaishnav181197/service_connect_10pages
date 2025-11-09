//103
import React from "react";

export default function ChooseAdType() {
  const ads = [
    {
      title: "Banner Ads",
      price: "Rs : 350 /month",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
      height: "h-32 sm:h-36",
    },
    {
      title: "CARD Ads",
      price: "Rs : 150 /month",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      height: "h-24 sm:h-28 w-60 sm:w-64 mx-auto",
    },
    {
      title: "Popup Ads",
      price: "Rs : 50 /month",
      color: "bg-gray-900",
      height: "h-14 sm:h-16 w-full",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center py-8 px-4 sm:px-6">
      {/* Heading */}
      <h2 className="text-sm sm:text-base font-semibold text-gray-800 mb-5 self-start">
        Choose Your Ad type
      </h2>

      {/* Ad Type List */}
      <div className="w-full max-w-md flex flex-col gap-6">
        {ads.map((ad, index) => (
          <div
            key={index}
            className={`relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer ${
              ad.color ? ad.color : ""
            } ${ad.height}`}
            style={{
              backgroundImage: ad.image ? "" : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className={`absolute inset-0 ${
                ad.image ? "bg-black/40" : "bg-transparent"
              }`}
            ></div>

            {/* Text Content */}
            <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between text-white">
              <h3 className="text-sm sm:text-base font-semibold">
                {ad.title}
              </h3>
              <p className="text-xs sm:text-sm">{ad.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
