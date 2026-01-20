import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api, { setAuthToken } from "../services/api.js";

export default function Layout() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
      api
        .get("/register")
        .then(() => {
          setIsAdmin(true);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setAuthToken(null);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuthToken(null);
    setIsAdmin(false);
    navigate("/login");
  };

  const showHomeAbout = !isAdmin;

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full"></div>
      </div>
    );

  return (
    <>
      {/* WHITE NAVBAR WITH LOGO ONLY */}
      <nav className="bg-white text-gray-900 shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* LOGO ONLY — Click to Home */}
            <Link to="/" className="flex items-center">
              <img
                src="https://costrick.com/wp-content/uploads/2025/05/dfbdfbfdb.png"
                alt="Costrick Logo"
                className="h-10 w-auto" // 40px height
              />
            </Link>

            {/* NAV LINKS */}
            <div className="hidden md:flex space-x-8 items-center font-medium">
              {showHomeAbout && (
                <>
                  <Link to="/" className="hover:text-indigo-600 transition">
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="hover:text-indigo-600 transition"
                  >
                    About
                  </Link>
                </>
              )}
              {!isAdmin && (
                <Link
                  to="/register"
                  className="hover:text-indigo-600 transition"
                >
                  Register
                </Link>
              )}
              {isAdmin ? (
                <>
                  <Link
                    to="/dashboard"
                    className="text-indigo-600 font-semibold hover:text-indigo-700"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="hover:text-indigo-600 transition"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="hover:text-indigo-600 transition">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <main className="min-h-screen bg-gray-50">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="bg-purple-600 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p>
            Copyright © 2023 Costrick Limited, Costrick is a private limited
            company registered in Scotland under company registration number
            SC806470. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
