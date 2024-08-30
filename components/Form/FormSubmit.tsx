"use client";
import React, { useEffect } from "react";

const FormSubmit = () => {
  return (
    <form
      id="my-form"
      method="POST"
      action="https://script.google.com/macros/s/AKfycbxot4jfC82QCLNsiH3L-ujQgWe1yGURvAw0CXikg4fzTqEKebQRazcbrZpgCZJ1SdGs/exec"
      //   onSubmit={(e) => sumitForm(e)}
    >
      <div className="relative w-[366px] ">
        <input
          type="text"
          id="address"
          name="address"
          className="block w-full p-4 ps-4 text-sm text-white border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500  bg-white bg-opacity-15"
          placeholder="Enter your Address"
          required
        />

        {/* <div className=" absolute end-2 top-0 h-full flex justify-center items-center w-[80px]"></div> */}
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="underline text-white px-4 py-3 bg-[#D5A2FE]  top-4 rounded-md mt-4"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormSubmit;
