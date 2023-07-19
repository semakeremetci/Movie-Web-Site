import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
