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
        <Route path="/Movie-Web-Site" element={<SignUpPage />} />
        <Route path="/Movie-Web-Site/LoginPage" element={<LogInPage />} />
        <Route path="/Movie-Web-Site/Home" element={<Home />} />
        <Route
          path="/Movie-Web-Site/ForgotPassword"
          element={<ForgotPassword />}
        />
      </Routes>
    </>
  );
}

export default App;
