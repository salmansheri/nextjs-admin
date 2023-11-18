"use client";

import { MdHdrPlus, MdSearch } from "react-icons/md";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import React, { useState } from "react";

export default function UsersPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="bg-background-soft rounded-md shadow lg:p-6 p-2 w-full space-y-3">
      {/* Top  */}
      <div className=" flex justify-between items-center">
        {/* search  */}
        <div className="relative flex items-center ">
          <MdSearch className="absolute ml-2" size={20} />
          <input
            placeholder="Search..."
            className="bg-transparent  w-full h-full pl-7 rounded-md p-2"
          />
        </div>
        <div>
          <button className="p-2 bg-violet-500 rounded-md shadow hover:bg-violet-500/80 transition ease-linear flex items-center justify-center gap-x-2">
            <IoMdAdd className="lg:hidden" size={20} />
            <span className="hidden lg:block">Add New</span>
          </button>
        </div>
      </div>
      {/* Table  */}
      <div className="w-full overflow-y-auto">
        <table className=" w-full text-left">
          <thead>
            <tr>
              <th className="p-2">Name </th>
              <th className="p-2">Email</th>
              <th className="p-2">Created at </th>
              <th className="p-2">Role</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="flex items-center gap-x-2">
                <Image
                  src="/noavatar.png"
                  alt="No Avatar"
                  height={50}
                  width={50}
                  className="rounded-full "
                />
                Salman
              </td>
              <td className="">sheriffsalman@gmail.com</td>
              <td className="">Oct 30 2023</td>
              <td className="">client</td>
              <td className="">Passive</td>
              <td className="relative  w-52">
                <button onClick={() => setIsOpen((prev) => !prev)}>
                  <BsThreeDotsVertical className="cursor-pointer" />
                </button>
                {isOpen && (
                  <div className="w-52 flex flex-col gap-y-2 absolute z-[99999] bg-neutral-200 text-black p-2 rounded top-10 transition-all duration-500 ease-linear">
                    <span className="cursor-pointer">View</span>
                    <span className="cursor-pointer">Delete</span>
                  </div>
                )}
              </td>
            </tr>
          </tbody>
        </table>
        {/* BOTTOM  */}
        <div className="flex items-center justify-between mt-5">
          <button className="bg-white text-black p-2 rounded shadow hover:bg-white/90 transition ease-linear">
            <FaAngleLeft size={20} />
          </button>
          <button className="bg-white text-black p-2 rounded shadow hover:bg-white/90 transition ease-linear">
            <FaAngleRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
