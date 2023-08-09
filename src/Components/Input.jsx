import React from "react";

function Input(props) {
  return (
    <div
      className={`form-control flex-row justify-center items-center backdrop-blur-lg border-2 border-primary-content rounded-3xl ${props.customClass}`}
    >
      <input
        type="text"
        placeholder="Search Movies or Series"
        className="input text-primary placeholder:text-primary placeholder:font-bold md:w-auto  focus:outline-none bg-transparent border-none"
      />
      <div className="btn btn-ghost rounded-full p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" h-7 w-10 flex justify-center items-center"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Input;
