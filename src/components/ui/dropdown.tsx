"use client";

import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative w-52">
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <BsThreeDotsVertical className="cursor-pointer" />
      </button>
      {isOpen && (
        <div className="w-52 flex flex-col gap-y-2 absolute z-[99999] bg-neutral-200 text-black p-2 rounded top-10 transition-all duration-500 ease-linear">
          <span className="cursor-pointer">View</span>
          <span className="cursor-pointer">Delete</span>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
