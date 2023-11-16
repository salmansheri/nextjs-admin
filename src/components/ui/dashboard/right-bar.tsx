import Image from "next/image";
import React from "react";
import { MdPlayCircleFilled, MdWatch, MdWatchLater } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className="space-y-5 hidden lg:block overflow-y-auto">
      <div className="bg-background-soft p-3 rounded-md ">
        {/* item  */}
        <div className="space-y-5 relative">
          <div className=" absolute right-0 bottom-0 h-1/2 w-1/2">
            <div className="relative h-20 w-20">
              <Image
                className="object-cover opacity-[0.2]"
                src="/astronaut.png"
                alt="astronaut"
                fill
              />
            </div>
          </div>
          <div className="z-50 ">
            <div className="space-y-5">
              <p>Available Now</p>
              <h3 className="">
                How to use the new version of the admin dashboard
              </h3>
              <span>Takes 4 minutes to learn</span>
              <p className="text-text-soft">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
                fugiat reprehenderit sint quaerat veniam beatae, dignissimos
              </p>
              <button className="bg-violet-500 flex items-center justify-center gap-2 p-2 rounded-md shadow hover:bg-violet-500/90 transition ease-linear">
                <MdPlayCircleFilled />
                Watch
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background-soft p-3 rounded-md shadow ">
        {/* item  */}
        <div className=" relative space-y-5">
          <div className="absolute right-0 bottom-0">
            <div className="relative h-20 w-20">
              <Image
                className="absolute bottom-0 right-0"
                src="/astronaut.png"
                alt="astronaut"
                fill
              />
            </div>
          </div>
          <div className="">
            <div className="space-y-5">
              <p>Available Now</p>
              <h3 className="">
                How to use the new version of the admin dashboard
              </h3>
              <span>Takes 4 minutes to learn</span>
              <p className="text-text-soft">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
                fugiat reprehenderit sint quaerat veniam beatae, dignissimos
              </p>
              <button className="bg-violet-500 flex items-center justify-center gap-2 p-2 rounded-md shadow hover:bg-violet-500/90 transition ease-linear">
                <MdPlayCircleFilled />
                Watch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
