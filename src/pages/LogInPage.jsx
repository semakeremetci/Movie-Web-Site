import React from "react";
import { NavLink } from "react-router-dom";

function LogInPage() {
  return (
    <div
      style={{
        backgroundImage: "url(https://picsum.photos/1920/1080/)",
      }}
      className="hero min-h-screen bg-base-200"
    >
      <div className="hero-content flex-col h-full w-full bg-black/[0.6]">
        <div className="absolute top-0 left-0 w-full flex justify-between p-4">
          <div className="btn normal-case text-2xl bg-transparent border-none hover:bg-transparent font-bold text-neutral-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              fill="rgb(255, 231, 163)"
            >
              <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm-96-32a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zM96 240c0-35 17.5-71.1 45.2-98.8S205 96 240 96c8.8 0 16-7.2 16-16s-7.2-16-16-16c-45.4 0-89.2 22.3-121.5 54.5S64 194.6 64 240c0 8.8 7.2 16 16 16s16-7.2 16-16z" />
            </svg>
            345Movie
          </div>
          <div>
            <NavLink
              className="btn btn-ghost text-neutral-content text-xl hover:bg-transparent"
              to="/Movie-Web-Site/"
            >
              Sign Up
            </NavLink>
          </div>
        </div>

        <div className="card w-full sm:w-5/6 md:w-3/5 lg:w-96  shadow-2xl bg-base-100">
          <div className="card-body">
            <p className="text-center m-4">Welcome! Please Log In</p>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="Your Password"
                className="input input-bordered"
              />
              <label className="label">
                <NavLink
                  to={"/Movie-Web-Site/ForgotPassword"}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </NavLink>
              </label>
            </div>
            <div className="form-control mt-6 gap-2 ">
              <NavLink to="/Movie-Web-Site/home" className="flex">
                <button className="btn btn-primary grow">Log in</button>
              </NavLink>
              <NavLink
                to="/Movie-Web-Site/"
                className="label-text-alt link link-hover text-center flex-none"
              >
                Don't have an account? Register
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
