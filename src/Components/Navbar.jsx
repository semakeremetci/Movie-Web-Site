const Navbar = () => {
  return (
    <div className="navbar bg-base-100 p-4 sm:px-20 fixed top-0 left-0 right-0 z-50">
      <div className="navbar-start ">
        <div className="dropdown sm:hidden z-50">
          <label tabIndex={0} className="btn btn-ghost p-2 text-accent">
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
              <a>Submenu 2</a>
            </li>

            <li className="place-content-start">
              <a className="btn btn-primary w-24 btn-sm">LogIn</a>
            </li>
            <li className="place-content-start">
              <a className="btn btn-primary w-24 btn-sm">SignUp</a>
            </li>
          </ul>
        </div>
        <a className="btn normal-case text-2xl p-2 bg-transparent border-none hover:bg-transparent font-bold text-accent">
          345Movie
        </a>
      </div>
      <div className="navbar-center font-bold hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
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
      <div>
        <input
          type="text"
          placeholder="Search Movie"
          className="input ml-3 input-ghost bg-base-300 flex-end  focus:outline-none w-full max-w-xs"
        />
      </div>
      <div className="navbar-end gap-2 hidden sm:flex">
        <a className="btn btn-ghost">LogIn</a>
        <a className="btn btn-primary">SignUp</a>
      </div>
    </div>
  );
};

export default Navbar;
