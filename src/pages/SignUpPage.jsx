import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUpPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isCardShown, setIsCardShown] = useState(false);
  const [signupError, setSignupError] = useState(null);
  const [emptyError, setEmptyError] = useState(false);
  const navigate = useNavigate();

  const handleSignup = () => {
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    if (email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/Home");
          console.log("account created successfully");
        })
        .catch((error) => {
          const errorCode = error.code;
          setSignupError(errorCode);
          setEmptyError(false);
        });
    } else {
      setEmptyError(true);
      setSignupError(null);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSignup();
    }
  };

  const showSignupCard = () => {
    setIsCardShown(true);
  };

  const signupCard = (
    <div className="card w-full sm:w-5/6 md:w-3/5 lg:w-96 bg-base-100 mt-8">
      <div className="card-body">
        {emptyError && (
          <div className="alert alert-error flex bg-red-700 py-1 px-2 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>Email or Password can not be empty.</span>
          </div>
        )}
        {signupError && (
          <div className="alert alert-error flex bg-red-700 p-2 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>{signupError}</span>
          </div>
        )}
        <h1 className="text-center text-primary-focus m-1 text-2xl">Sign Up</h1>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered text-primary"
            ref={emailRef}
            onKeyDown={handleKeyPress}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered text-primary"
            ref={passwordRef}
            onKeyDown={handleKeyPress}
          />
        </div>

        <div className="form-control mt-6 gap-2 ">
          <button onClick={handleSignup} className="btn btn-primary grow">
            Sign Up
          </button>

          <NavLink
            to="/LoginPage"
            className="label-text-alt link link-hover text-center flex-none"
          >
            Already have an account? Log in
          </NavLink>
        </div>
      </div>
    </div>
  );

  return (
    <div
      style={{
        backgroundImage: "url(https://picsum.photos/1920/1080/)",
      }}
      className="hero min-h-screen"
    >
      <div className="hero-overlay bg-black/[0.7] flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full flex justify-between p-4 pl-0 sm:pl-4">
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
              to="/LoginPage"
            >
              Log In
            </NavLink>
          </div>
        </div>

        {isCardShown == false && (
          <div className="hero-content text-center flex text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-6xl font-bold ">Hello there</h1>
              <p className="mb-5 text-lg ">
                See best movies and series, watch trailers, make watchlists and
                more.
              </p>
              <button onClick={showSignupCard} className="btn btn-primary">
                Get Started
              </button>
            </div>
          </div>
        )}
        {isCardShown && signupCard}
      </div>
    </div>
  );
}

export default SignUpPage;
