import { useState } from "react";

export default function InputField({value, setValue, name, type="text"}) {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className={`text-sm text-gray-700 transition duration-500 ease-in-out ${
          value !== "" ? "opacity-100" : "opacity-0"
        }`}
      >
        {name}
      </label>
      <input
        type={type}
        placeholder={name}
        className={`px-4 py-3 rounded-lg bg-gray-100 w-full transition duration-500 ease-in-out ourline-none focus:outline-none border border-gray-100 focus:border-red-500`}
        id={name}
        value={value}
        onChange={(e)=>setValue(e.target.value)}
      ></input>
    </div>
  );
}
