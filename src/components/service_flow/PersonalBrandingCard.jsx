//42

export default function PersonalBrandingCard() {
  return (
    <div className=" flex items-center justify-center bg-gray-100">
      <div className="flex items-center  w-[350px] h-[100px] bg-white rounded-2xl shadow-md p-3    ">
        {/* Left Black Section (Image Placeholder) */}
        <div className="bg-black w-[70px] h-[70px] rounded-lg"></div>

        {/* Right Content */}
        <div className="flex-1 ml-4">
          {/* Title */}
          <h3 className="text-[16px] font-bold text-gray-900">
            Build Personal Branding
          </h3>

          {/* Subtitle */}
          <p className="text-gray-500 text-sm mt-1">Web Designer</p>

          {/* Paid Tag */}
          <div className="mt-2">
            <span className="bg-emerald-700 text-white text-xs font-semibold px-3 py-1 shadow shadow-green-800 rounded-md">
              Paid
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}