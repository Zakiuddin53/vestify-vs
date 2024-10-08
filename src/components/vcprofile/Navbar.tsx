import React from "react";

function Navbar({ profile }) {
  return (
    <div className="w-full p-[34.15px] justify-between items-start gap-[934px] inline-flex">
      <div className="w-full justify-start items-center gap-[17.07px] flex">
        <div className="text-[#18191c] text-[25.61px] font-extrabold font-['Plus Jakarta Sans'] leading-10">
          Hi, {profile?.name}
        </div>
      </div>

      <div className="p-[10px] min-w-[100px] bg-indigo-600 rounded-[5px] items-center gap-2.5 flex">
        <span className="text-white text-md font-semibold font-['Urbanist'] leading-tight">
          Join Now
        </span>
      </div>
    </div>
  );
}

export default Navbar;
