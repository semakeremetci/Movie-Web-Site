import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { onAuthStateChanged } from "firebase/auth";

function SignUpPage() {
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  // const [authUser, setAuthUser] = useState(null);
  const [isCardShown, setIsCardShown] = useState(false);

  const handleClick = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   const listen = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setAuthUser(user);
  //       console.log(authUser);
  //     } else {
  //       setAuthUser(null);
  //     }
  //   });
  //   return () => {
  //     listen();
  //   };
  // }, []);

  // function ConditionalLink({ children, condition, ...props }) {
  //   return !!condition && props.to ? (
  //     <Link {...props}>{children}</Link>
  //   ) : (
  //     <>{children}</>
  //   );
  // }

  const signupCard = (
    <div className="card w-full sm:w-5/6 md:w-3/5 lg:w-96 shadow-2xl bg-base-100">
      <div className="card-body">
        <p className="text-center m-2">Welcome! Please Sign Up</p>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            placeholder="Your Fullname or Nickname"
            className="input input-bordered"
            ref={userNameRef}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered"
            ref={emailRef}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered"
            ref={passwordRef}
          />
        </div>

        <div className="form-control mt-6 gap-2 ">
          {/* <ConditionalLink
        to="/Movie-Web-Site/"
        condition={authUser}
        className="flex"
      >
        <button onClick={handleClick} className="btn btn-primary grow">
          Sign Up
        </button>
      </ConditionalLink> */}

          <NavLink to="/Home" className="flex">
            <button onClick={handleClick} className="btn btn-primary grow">
              Sign Up
            </button>
          </NavLink>
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

  const showSignupCard = () => {
    setIsCardShown(true);
  };

  return (
    <div
      style={{
        backgroundImage: "url(https://picsum.photos/1920/1080/)",
      }}
      className="hero min-h-screen bg-base-200"
    >
      <div className="hero-content flex-col h-full w-full bg-black/[0.7]">
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
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold ">Hello there</h1>
            <p className="mb-5 text-lg ">
              See best movies and series, make watchlists, add favorites and
              more.
            </p>
            <button onClick={showSignupCard} className="btn btn-primary">
              Get Started
            </button>
          </div>
        )}
        {isCardShown && signupCard}
      </div>
    </div>
  );
}

export default SignUpPage;
