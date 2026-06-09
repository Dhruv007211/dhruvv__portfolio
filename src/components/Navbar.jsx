import React, { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar({ dark, setDark }) {
  // Apply dark/light mode to body on toggle
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-colors duration-500 ${
        dark
          ? "bg-black/40 border-b border-white/10"
          : "bg-white/40 border-b border-black/10"
      } backdrop-blur-md`}
    >
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Name */}
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-md flex items-center justify-center font-bold ${
              dark
                ? "bg-gradient-to-br from-indigo-600 to-cyan-400 text-black"
                : "bg-gradient-to-br from-yellow-400 to-pink-500 text-white"
            }`}
          >
           DS
          </div>
          <div>
            <div
              className={`text-sm font-semibold ${
                dark ? "text-white" : "text-black"
              }`}
            >
              Dhruv Singh
            </div>
            <div
              className={`text-xs ${
                dark ? "text-gray-400" : "text-gray-700"
              } opacity-80`}
            >
              Data Science • ML
            </div>
          </div>
        </div>

        {/* Links and Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#projects"
            className={`text-sm hover:underline hidden md:inline ${
              dark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Projects
          </a>
          <a
            href="#skills"
            className={`text-sm hover:underline hidden md:inline ${
              dark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Skills
          </a>
          <a
            href="#achievements"
            className={`text-sm hover:underline hidden md:inline ${
              dark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Achievements
          </a>
          <a
            href="#contact"
            className={`text-sm hover:underline ${
              dark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Contact
          </a>

          {/* Toggle Button */}
          <button
            onClick={() => setDark(!dark)}
            className={`p-2 rounded-md border transition-all duration-300 ${
              dark
                ? "border-white/10 bg-gradient-to-r from-indigo-500 to-cyan-500 text-black hover:scale-110"
                : "border-black/10 bg-gradient-to-r from-yellow-400 to-pink-500 text-white hover:scale-110"
            }`}
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
