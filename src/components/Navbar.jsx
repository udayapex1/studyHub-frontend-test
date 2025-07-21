import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext.jsx";

const Navbar = () => {
  const { isAuntheticated, logOut, user } = useAuth();
  const navigate = useNavigate();
  const [showCard, setShowCard] = useState(false);
  const profileRef = useRef();

  // Click outside to close on mobile
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowCard(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gray-900">Studyhub</div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {["/", "/College", "/Contribute", "/Contact"].map((path, i) => (
                  <Link
                    key={i}
                    to={path}
                    className="text-gray-900 hover:text-blue-500 px-3 py-2 text-md font-medium transition-colors"
                  >
                    {path === "/" ? "Home" : path.replace("/", "")}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4 relative">
              {!isAuntheticated ? (
                <>
                  <Link
                    to="/Login"
                    className="text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/Register"
                    className="bg-blue-500 text-white hover:text-gray-900 px-4 py-2 text-sm font-medium transition-colors rounded-2xl"
                  >
                    SignUp
                  </Link>
                </>
              ) : (
                <div
                  ref={profileRef}
                  className="relative group flex items-center gap-2 px-4 py-1 rounded-full hover:bg-gray-100 transition duration-200 cursor-pointer"
                  onClick={() => setShowCard(!showCard)}
                >
                  <img
                    src={user.profile?.url}
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover border border-gray-300"
                  />
                  <p className="text-sm font-medium text-gray-700">
                    Hi, {user.firstName}
                  </p>

                  {/* Hover (desktop) + Click (mobile) */}
                  <div
                    className={`absolute top-14 right-0 w-64 p-5 bg-white rounded-lg shadow-lg border border-gray-200 transition-opacity duration-300 z-50
                      group-hover:opacity-100 group-hover:pointer-events-auto
                      ${
                        showCard
                          ? "opacity-100 pointer-events-auto"
                          : "opacity-0 pointer-events-none"
                      }
                    `}
                  >
                    <p className="text-sm font-semibold text-gray-900">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="text-sm text-gray-600">s{user.email}</p>
                    <p className="text-sm text-gray-500">
                      Branch: {user.branchName}
                    </p>
                    <p className="text-sm text-gray-500">Year: {user.year}</p>

                    <button
                      onClick={() => {
                        logOut();
                        navigate("/login");
                      }}
                      className="mt-3 w-full bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition"
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
