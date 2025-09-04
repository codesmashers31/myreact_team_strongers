import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isUseStateOpen, setIsUseStateOpen] = useState(false);
  const [isUseEffectOpen, setIsUseEffectOpen] = useState(false);
  const [isUseContextOpen, setIsContextOpen] = useState(false);

  const useStateRef = useRef(null);
  const useEffectRef = useRef(null);
  const useContextRef = useRef(null);

  // Close dropdowns when outside is clicked
  useEffect(() => {
    function handleClickOutside(event) {
      if (useStateRef.current && !useStateRef.current.contains(event.target)) {
        setIsUseStateOpen(false);
      }
      if (useEffectRef.current && !useEffectRef.current.contains(event.target)) {
        setIsUseEffectOpen(false);
      }
        if (useContextRef.current && !useContextRef.current.contains(event.target)) {
        setIsContextOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white/90 backdrop-blur-md flex justify-between items-center p-4 fixed w-full z-50 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/logo/logo.png" alt="Logo" className="h-10" />
      </div>

      {/* Navbar */}
      <div className="text-black flex gap-6 items-center">
        <Link
          to="/"
          className={`px-3 py-2 rounded-lg transition-all duration-300 ${
            location.pathname === "/"
              ? "bg-amber-500 text-white font-medium"
              : "hover:bg-gray-100"
          }`}
        >
          Home
        </Link>

        {/* useState Dropdown (align left) */}
        <div className="relative" ref={useStateRef}>
          <button
            onClick={() => setIsUseStateOpen(!isUseStateOpen)}
            className={`px-3 py-2 rounded-lg transition-all duration-300 flex items-center ${
              ["/usestate", "/ternary_op", "/part3"].some((path) =>
                location.pathname.startsWith(path)
              )
                ? "bg-amber-500 text-white font-medium"
                : "hover:bg-gray-100"
            }`}
          >
            useState
            <svg
              className={`ml-2 w-4 h-4 transition-transform ${isUseStateOpen ? "rotate-180" : ""}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          {isUseStateOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
              <Link to="/usestate"
                className={`block px-4 py-2 transition-colors ${location.pathname === "/usestate" ? "bg-amber-100 text-amber-700 font-medium" : "hover:bg-gray-100"}`}
                onClick={() => setIsUseStateOpen(false)}>
                useState Part 1
              </Link>
              <Link to="/ternary_op"
                className={`block px-4 py-2 transition-colors ${location.pathname === "/ternary_op" ? "bg-amber-100 text-amber-700 font-medium" : "hover:bg-gray-100"}`}
                onClick={() => setIsUseStateOpen(false)}>
                Ternary Operator Example
              </Link>
              <Link to="/part3"
                className={`block px-4 py-2 transition-colors ${location.pathname === "/part3" ? "bg-amber-100 text-amber-700 font-medium" : "hover:bg-gray-100"}`}
                onClick={() => setIsUseStateOpen(false)}>
                useState Part 3
              </Link>
            </div>
          )}
        </div>
        
        {/* useEffect Dropdown (align right) */}
        <div className="relative" ref={useEffectRef}>
          <button
            onClick={() => setIsUseEffectOpen(!isUseEffectOpen)}
            className={`px-3 py-2 rounded-lg transition-all duration-300 flex items-center ${
              ["/useeffect-basic", "/useeffectapifetch", "/useeffect-cleanup", "/useeffect-dependencies"].some((path) =>
                location.pathname.startsWith(path)
              )
                ? "bg-amber-500 text-white font-medium"
                : "hover:bg-gray-100"
            }`}
          >
            useEffect
            <svg
              className={`ml-2 w-4 h-4 transition-transform ${isUseEffectOpen ? "rotate-180" : ""}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          {/* Note the change: right-0 instead of left-0 */}
          {isUseEffectOpen && (
            <div className="absolute top-full right-0 mt-2 w-60 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
              <Link to="/useeffect-basic"
                className={`block px-4 py-2 transition-colors ${location.pathname === "/useeffect-basic" ? "bg-amber-100 text-amber-700 font-medium" : "hover:bg-gray-100"}`}
                onClick={() => setIsUseEffectOpen(false)}>
                useEffect Basics
              </Link>
              <Link to="/useeffectapifetch"
                className={`block px-4 py-2 transition-colors ${location.pathname === "/useeffectapifetch" ? "bg-amber-100 text-amber-700 font-medium" : "hover:bg-gray-100"}`}
                onClick={() => setIsUseEffectOpen(false)}>
                useEffect API Fetch
              </Link>
              <Link to="/useeffect-cleanup"
                className={`block px-4 py-2 transition-colors ${location.pathname === "/useeffect-cleanup" ? "bg-amber-100 text-amber-700 font-medium" : "hover:bg-gray-100"}`}
                onClick={() => setIsUseEffectOpen(false)}>
                useEffect Cleanup
              </Link>
              <Link to="/useeffect-dependencies"
                className={`block px-4 py-2 transition-colors ${location.pathname === "/useeffect-dependencies" ? "bg-amber-100 text-amber-700 font-medium" : "hover:bg-gray-100"}`}
                onClick={() => setIsUseEffectOpen(false)}>
                useEffect Dependencies
              </Link>
            </div>
          )}
        </div>




        <div className="relative" ref={useEffectRef}>
          <button
            onClick={() => setIsContextOpen(!isUseEffectOpen)}
            className={`px-3 py-2 rounded-lg transition-all duration-300 flex items-center ${
              ["/muiltform", ].some((path) =>
                location.pathname.startsWith(path)
              )
                ? "bg-amber-500 text-white font-medium"
                : "hover:bg-gray-100"
            }`}
          >
            UseContext
            <svg
              className={`ml-2 w-4 h-4 transition-transform ${isUseEffectOpen ? "rotate-180" : ""}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          {/* Note the change: right-0 instead of left-0 */}
          {isUseContextOpen && (
            <div className="absolute top-full right-0 mt-2 w-60 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
              <Link to="/muiltform"
                className={`block px-4 py-2 transition-colors ${location.pathname === "/muiltform" ? "bg-amber-100 text-amber-700 font-medium" : "hover:bg-gray-100"}`}
                onClick={() => setIsContextOpen(false)}>
                Muilti Form
              </Link>
             
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
