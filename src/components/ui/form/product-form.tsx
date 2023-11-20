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
        <div className="grid  grid-cols-1  lg:grid-cols-2 w-full place-content-center gap-5">
          <div className="w-full">
            <input
              required
              name="title"
              placeholder="Title"
              className="w-full p-2 bg-background-soft"
            />
          </div>
          <div className="w-full">
            <select className="w-full bg-transparent " name="category">
              <option className="text-black" value="general">
                Choose a Category
              </option>
              <option className="text-black" value="kitchen">
                Kitchen
              </option>
              <option className="text-black" value="phone">
                Phone
              </option>
              <option className="text-black" value="computer">
                Computer
              </option>
            </select>
          </div>
          <div className="w-full">
            <input
              className="w-full p-2 bg-background-soft"
              placeholder="Price"
              type="number"
              name="stock"
              required
            />
          </div>
          <div className="w-full">
            <input
              name="stock"
              type="number"
              className="w-full p-2 bg-background-soft"
              placeholder="Stock"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              name="color"
              className="w-full p-2 bg-background-soft"
              placeholder="color"
            />
          </div>
          <div className="w-full">
            <input
              name="size"
              type="text"
              className="w-full p-2 bg-background-soft"
              placeholder="Size"
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
          <button
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

export default ProductForm;
