import React from "react";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="public/img/Logo_Movie.png" className="h-10" alt="Logo" />
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap text-white">
              MovieDQ
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-400" : "text-gray-200 hover:text-white"
                  }
                >
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/list-movie"
                  className={({ isActive }) =>
                   isActive ? "text-blue-400" : "text-gray-200 hover:text-white"
                  }
                >
                  Danh sách phim
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/list-theater"
                  className={({ isActive }) =>
                   isActive ? "text-blue-400" : "text-gray-200 hover:text-white"
                  }
                >
                  Danh sách rạp
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-blue-400" : "text-gray-200 hover:text-white"
                  }
                >
                  Giới Thiệu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/support"
                  className={({ isActive }) =>
                    isActive ? "text-blue-400" : "text-gray-200 hover:text-white"
                  }
                >
                  Hỗ trợ
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
