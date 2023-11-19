import Dropdown from "@/components/ui/dropdown";
import Pagination from "@/components/ui/pagination";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import { MdSearch } from "react-icons/md";

export default function UsersPage() {
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
              <td className="">
                <Dropdown />
              </td>
            </tr>
          </tbody>
        </table>
        {/* BOTTOM  */}
        <Pagination />
      </div>
    </div>
  );
}
