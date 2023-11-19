"use client";

import React from "react";
import ImageUpload from "../image-upload";

const ProductForm = () => {
  return (
    <>
      <label>Upload Image</label>
      <div className="flex items-start justify-start mt-2">
        <ImageUpload endpoint="imageUploader" onChange={() => {}} />
      </div>
      <form>
        <div className="grid grid-cols-2 w-full place-content-center gap-5">
          <div className="w-full">
            <input
              name="title"
              placeholder="Title"
              className="w-full p-2 bg-background-soft"
            />
          </div>
          <div className="w-full">
            <input
              placeholder="Price"
              className="w-full p-2 bg-background-soft"
            />
          </div>
          <div className="w-full">
            <input
              className="w-full p-2 bg-background-soft"
              placeholder="Title"
            />
          </div>
          <div className="w-full">
            <input
              className="w-full p-2 bg-background-soft"
              placeholder="Title"
            />
          </div>
          <div className="w-full">
            <input
              className="w-full p-2 bg-background-soft"
              placeholder="Title"
            />
          </div>
          <div className="w-full">
            <input
              className="w-full p-2 bg-background-soft"
              placeholder="Title"
            />
          </div>
        </div>
        <div className="w-full h-52 mt-2">
          <textarea
            className="w-full bg-transparent h-full p-2 rounded-md"
            placeholder="Description"
          />
        </div>
        <div className="mt-5">
          <button className="w-full bg-violet-500 p-2 rounded-md ">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ProductForm;
