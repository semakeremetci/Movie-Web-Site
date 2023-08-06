import React from "react";
// import { Outlet } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import ForgotPassword from "./pages/forgotPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/LoginPage" element={<LogInPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
