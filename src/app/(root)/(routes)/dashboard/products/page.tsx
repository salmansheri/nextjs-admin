import Dropdown from "@/components/ui/dropdown";
import Pagination from "@/components/ui/pagination";
import { formatter } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import { MdSearch } from "react-icons/md";

export default function ProductsPage() {
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
          <Link href="/dashboard/products/add">
            <button className="p-2 bg-violet-500 rounded-md shadow hover:bg-violet-500/80 transition ease-linear flex items-center justify-center gap-x-2">
              <IoMdAdd className="lg:hidden" size={20} />
              <span className="hidden lg:block">Add New</span>
            </button>
          </Link>
        </div>
      </div>
      {/* Table  */}
      <div className="w-full overflow-y-auto ">
        <table className=" w-full text-left">
          <thead>
            <tr>
              <th className="p-2">Title </th>
              <th className="p-2">Description</th>
              <th className="p-2">Price</th>
              <th className="p-2">Created at </th>
              <th className="p-2">Stock</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="flex items-center gap-x-2">
                <Image
                  src="/noproduct.jpg"
                  alt="No Avatar"
                  height={50}
                  width={50}
                  className="rounded-full "
                />
                product 1
              </td>
              <td>Hello</td>
              <td>{formatter.format(12)}</td>
              <td>12.10.2023</td>
              <td>Instock</td>
              <td>something</td>
              <td>
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
