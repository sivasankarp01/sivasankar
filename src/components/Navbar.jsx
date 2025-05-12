import React, { useState } from "react";
import "../App.css";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { name } from "../content";

function Navbar({ sendDataToParent }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
    sendDataToParent(false);
  };

  const handleMenu = () => {
    const newMenuState = !menuOpen;
    setMenuOpen(newMenuState);
    sendDataToParent(newMenuState);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-[#171C28] px-10 pt-8 pb-4 shadow-md max-md:px-4">
        <div className="flex justify-between items-center max-md:block">
          <div className="title flex justify-between w-full max-[426px]:items-center">
            <a href="/">
              <h1
                className="text-3xl max-md:text-xl italic font-bold signature text-white"
                onClick={handleLinkClick}
              >
                &lt;{name} /&gt;
              </h1>
            </a>
            <button
              className="text-2xl hidden max-md:block text-white"
              onClick={handleMenu}
            >
              {menuOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
          </div>

          <nav
            className={`flex gap-10 max-md:flex-col max-md:mt-12 ${
              menuOpen ? "max-md:flex" : "max-md:hidden"
            }`}
          >
            <ul className="flex gap-10 max-md:flex-col max-md:w-full">
              {["about", "skills", "projects", "certificates", "contact"].map(
                (id) => (
                  <li key={id} className="max-md:w-full">
                    <a
                      href={`#${id}`}
                      className="inline-block w-full text-[#7e9199] hover:text-white max-md:hover:border-none max-md:active:bg-purple-500 max-md:active:text-white max-md:px-2 hover:border-b pb-1 text-lg"
                      onClick={handleLinkClick}
                    >
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                  </li>
                )
              )}
            </ul>

            <ul className="hidden justify-around items-center mt-28 max-md:flex">
              <li>
                <a
                  href="https://github.com/talhashah-dev"
                  className="text-4xl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/talhashah-dev/"
                  className="text-4xl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/users/23691689/talha-shah"
                  className="text-4xl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaStackOverflow />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
