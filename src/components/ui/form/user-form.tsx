"use client";

import React, { useState } from "react";
import ImageUpload from "../image-upload";
import { createUser } from "@/lib/actions/user";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

const UserForm = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    phone: 0,
    address: "",
    isAdmin: false,
    imageUrl: "",
  });

  return (
    <>
      <form>
        <label>Upload Image</label>
        <div className="flex items-start justify-start mt-2">
          {userData.imageUrl ? (
            <div className="relative h-52 w-52 rounded-md overflow-hidden shadow mb-10 transition-all duration-500 ease-linear">
              <button
                className="absolute bg-red-500 top-1 right-1 z-[99999] rounded shadow"
                onClick={() => setUserData({ ...userData, imageUrl: "" })}
              >
                <MdDelete size={30} />
              </button>
              <Image src={userData.imageUrl} alt="image" fill />
            </div>
          ) : (
            <div className="transition-all duration-500 ease-linear">
              <ImageUpload
                endpoint="imageUploader"
                onChange={(url) =>
                  setUserData({ ...userData, imageUrl: url as string })
                }
              />
            </div>
          )}
        </div>
        <div className="grid  grid-cols-1  lg:grid-cols-2 w-full place-content-center gap-5">
          <div className="w-full">
            <input
              required
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
              placeholder="Username"
              className="w-full p-2 bg-background-soft"
            />
          </div>
          <div className="w-full flex gap-2 items-center">
            <input
              onChange={(e) =>
                setUserData({ ...userData, isAdmin: e.target.checked })
              }
              type="checkbox"
            />
            <label>IsAdmin</label>
          </div>
          <div className="w-full">
            <input
              className="w-full p-2 bg-background-soft"
              placeholder="Email"
              type="email"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              required
            />
          </div>

          <div className="w-full">
            <input
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.valueAsNumber })
              }
              type="number"
              name="phone"
              className="w-full p-2 bg-background-soft"
              placeholder="Phone"
            />
          </div>
          <div className="w-full">
            <input
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              name="password"
              type="text"
              className="w-full p-2 bg-background-soft"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="w-full h-52 mt-2">
          <textarea
            onChange={(e) =>
              setUserData({ ...userData, address: e.target.value })
            }
            className="w-full bg-transparent h-full p-2 rounded-md"
            placeholder="Address"
          />
        </div>

        <div className="mt-5">
          <button
            formAction={() => createUser(userData)}
            className="w-full bg-violet-500 p-2 rounded-md "
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
