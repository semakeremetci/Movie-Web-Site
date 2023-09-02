import React from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <ul className="menu justify-center gap-5 p-3 sidebar hidden sm:flex h-screen bg-gradient-to-r from-black to-transparent z-40 fixed top-0 left-0">
      <li>
        <NavLink
          onClick={() => localStorage.removeItem("storedData")}
          to={"/Home"}
          className="tooltip tooltip-right"
          data-tip="Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5em"
            viewBox="0 0 576 512"
            fill="white"
          >
            <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
          </svg>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/Categories"}
          className="tooltip tooltip-right"
          data-tip="Categories"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.8em"
            viewBox="0 0 512 512"
            fill="white"
          >
            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
          </svg>
        </NavLink>
      </li>

      <li>
        <a className="tooltip tooltip-right" data-tip="Make Watchlist">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2em"
            viewBox="0 0 448 512"
            fill="white"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
        </a>
      </li>
    </ul>
  );
}

export default SideBar;
