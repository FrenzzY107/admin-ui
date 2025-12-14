import React from "react";

function Labeledinput({ 
  label = "Email Address", 
  type = "email", 
  placeholder = "kakapurnama@gmail.com",
  id = "email"
}) {
  return (
    <>
      <label htmlFor={id} className="block text-sm">{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="p-2 text-sm rounded-md w-full bg-special-mainBg border border-gray-300 text-gray-700 focus:border-black focus:outline-none focus:ring-0 my-2"
      />
    </>
  );
}

export default Labeledinput;
