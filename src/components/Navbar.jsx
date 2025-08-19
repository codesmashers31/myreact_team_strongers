import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="bg-white/90 backdrop-blur-md flex justify-between items-center p-4 fixed w-full z-50 shadow-md">
      <div className="flex items-center">
        <img src="./logo/logo.png" alt="Logo" className="h-10" />
      </div>
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
        <Link 
          to="/usestate" 
          className={`px-3 py-2 rounded-lg transition-all duration-300 ${
            location.pathname === "/usestate" 
              ? "bg-amber-500 text-white font-medium" 
              : "hover:bg-gray-100"
          }`}
        >
          Use State Part 1
        </Link>
        <Link 
          to="/tarneroy_op" 
          className={`px-3 py-2 rounded-lg transition-all duration-300 ${
            location.pathname === "/tarneroy_op" 
              ? "bg-amber-500 text-white font-medium" 
              : "hover:bg-gray-100"
          }`}
        >
          TrO Use State 2
        </Link>
        <Link 
          to="/part3" 
          className={`px-3 py-2 rounded-lg transition-all duration-300 ${
            location.pathname === "/part3" 
              ? "bg-amber-500 text-white font-medium" 
              : "hover:bg-gray-100"
          }`}
        >
          Use State Part 3
        </Link>
      </div>
    </div>
  );
};

export default Navbar;