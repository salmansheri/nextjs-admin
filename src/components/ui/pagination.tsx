import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = () => {
  return (
    <div className="flex items-center justify-between mt-5">
      <button className="bg-white text-black p-2 rounded shadow hover:bg-white/90 transition ease-linear">
        <FaAngleLeft size={20} />
      </button>
      <button className="bg-white text-black p-2 rounded shadow hover:bg-white/90 transition ease-linear">
        <FaAngleRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
