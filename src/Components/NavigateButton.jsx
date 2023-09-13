import React from "react";
import { NavLink } from "react-router-dom";

function NavigateButton(props) {
  return (
    <div className="join grid grid-cols-2 fixed bottom-4 z-50">
      <NavLink
        to={"/Watchlist"}
        className={`join-item btn btn-outline ${props.customClass}`}
      >
        My Watchlist
      </NavLink>
      <NavLink
        to={"/Watched"}
        className={`join-item btn btn-outline ${props.customClass2}`}
      >
        Watched
      </NavLink>
    </div>
  );
}

export default NavigateButton;
