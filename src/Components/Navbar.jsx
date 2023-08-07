import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Navbar = () => {
  const logoutNavigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        logoutNavigate("/LoginPage");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-base-100 p-4 sm:px-20 w-full flex-col items-start sm:flex-row fixed top-0 left-0 right-0 z-50">
      <div className="navbar-start px-2 flex flex-1">
        <div className="dropdown sm:hidden z-50">
          <label
            tabIndex={0}
            className="btn btn-ghost p-0 text-neutral-content"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm bg-primary-focus dropdown-content mt-3 z-[1] p-2 gap-1 rounded-box w-40"
          >
            <li>
              <a>Movies</a>
            </li>
            <li>
              <a>Tv Shows</a>
            </li>

            <li>
              <a>Make Watchlists</a>
            </li>
            <li>
              <a>Favorites</a>
            </li>

            <li className="place-content-start">
              <button
                onClick={handleLogout}
                className="btn btn-primary w-full btn-sm bg-neutral text-base-content"
              >
                Log Out
              </button>
            </li>
          </ul>
        </div>
        <div className="btn normal-case text-xl sm:text-2xl  bg-transparent border-none hover:bg-transparent font-bold text-neutral-content">
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
      </div>

      <div className="navbar-center font-bold hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ml-16">
          <li>
            <a>Movies</a>
          </li>
          <li>
            <a>Tv Shows</a>
          </li>
          <li tabIndex={0}>
            <details className="active:rounded-lg">
              <summary className="active:text-white">More</summary>
              <ul className="p-4 z-50">
                <li>
                  <a>Make Watchlists</a>
                </li>
                <li>
                  <a>Favorites</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="navbar-end sm:ml-16 w-full">
        <input
          type="text"
          placeholder="Search Movie"
          className="text-primary input w-full sm:mr-16 bg-base-300 focus:outline-none"
        />
        <button
          onClick={handleLogout}
          className="btn btn-primary hidden sm:flex"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
