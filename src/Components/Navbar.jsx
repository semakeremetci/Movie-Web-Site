import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [userEmail, setUserEmail] = useState();
  const navigateLogin = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("userId");
        localStorage.removeItem("storedData");
        navigateLogin("/LoginPage");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        // const uid = user.uid;
        setUserEmail(user.email);
        console.log(user.email);
      } else {
        // User is signed out
        navigateLogin("/LoginPage");
        localStorage.removeItem("userId");
        localStorage.removeItem("storedData");
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("userId")) {
      navigateLogin("/LoginPage");
      localStorage.removeItem("storedData");
    }
  }, []);

  const changeBackground = () => {
    // console.log(window.scrollY);
    const windowWidth = window.innerWidth;

    if (windowWidth >= 1024) {
      // Laptop genişliği
      if (window.scrollY >= 300) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    } else if (windowWidth >= 768) {
      // Tablet genişliği
      if (window.scrollY >= 52) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    } else {
      // Telefon genişliği
      if (window.scrollY >= 72) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div
      style={{ backgroundColor: navbar ? "black" : "transparent" }}
      className="navbar bg-gradient-to-b from-black to-transparent py-2 px-4 sm:pr-16 sm:pl-28 fixed top-0 left-0 right-0 z-[99]"
    >
      <div className="flex-1">
        <NavLink
          onClick={() => localStorage.removeItem("storedData")}
          to={"/Home"}
          className="btn normal-case text-xl sm:text-2xl p-0 bg-transparent border-none hover:bg-transparent font-bold text-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            fill="red"
          >
            <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm-96-32a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zM96 240c0-35 17.5-71.1 45.2-98.8S205 96 240 96c8.8 0 16-7.2 16-16s-7.2-16-16-16c-45.4 0-89.2 22.3-121.5 54.5S64 194.6 64 240c0 8.8 7.2 16 16 16s16-7.2 16-16z" />
          </svg>
          345Movie
        </NavLink>
      </div>
      <div className="flex justify-end gap-4 ml-6 z-[999]">
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar btn-lg"
          >
            <div className="w-4/5 h-4/5 rounded-full bg-neutral">
              <h6 className="flex h-full justify-center items-center text-xl">
                {userEmail && userEmail.charAt(0).toUpperCase()}
              </h6>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3  p-2 shadow menu menu-sm dropdown-content bg-neutral rounded-box w-52 gap-2"
          >
            <li>
              <a>Profile</a>
            </li>

            <li>
              <a>Settings</a>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="btn btn-sm btn-secondary flex"
              >
                Log out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
