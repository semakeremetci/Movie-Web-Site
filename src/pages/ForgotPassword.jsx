import React from "react";
import { NavLink } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col h-full w-full">
        <div className="text-center absolute top-2 left-4 sm:top-4 sm:left-6">
          <h1 className="btn normal-case text-2xl sm:text-2xl p-2 bg-transparent border-none hover:bg-transparent font-bold text-neutral-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              fill="rgb(255, 231, 163)"
            >
              <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm-96-32a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zM96 240c0-35 17.5-71.1 45.2-98.8S205 96 240 96c8.8 0 16-7.2 16-16s-7.2-16-16-16c-45.4 0-89.2 22.3-121.5 54.5S64 194.6 64 240c0 8.8 7.2 16 16 16s16-7.2 16-16z" />
            </svg>
            345Movie
          </h1>
        </div>

        <div className="card w-full sm:w-5/6 md:w-3/5  lg:w-96   shadow-2xl bg-base-100">
          <div className="card-body">
            <p className="text-accent">
              A reset link has been sent. Check your email.
            </p>
            <h2 className="text-center m-4 mb-0 text-lg">
              Trouble logging in?
            </h2>
            <p className="text-primary">
              Enter the email you signed up with below. We’ll send you a link to
              reset your password.
            </p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6 gap-2 ">
              <NavLink to="/Home" className="flex">
                <button className="btn btn-primary grow">Reset Password</button>
              </NavLink>
              <NavLink
                to="/"
                className="label-text-alt link link-hover text-center flex-none"
              >
                Go back to login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
