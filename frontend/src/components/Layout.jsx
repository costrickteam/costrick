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
        <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full"></div>
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
                  <Link to="/" className="hover:text-blue-600 transition">
                    Home
                  </Link>
                  <Link to="/about" className="hover:text-blue-600 transition">
                    About
                  </Link>
                </>
              )}
              {!isAdmin && (
                <Link to="/register" className="hover:text-blue-600 transition">
                  Register
                </Link>
              )}
              {isAdmin ? (
                <>
                  <Link
                    to="/dashboard"
                    className="text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="hover:text-blue-600 transition"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="hover:text-blue-600 transition">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <main className="min-h-screen">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* About Us */}
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
                About Us
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/company-info"
                    className="text-gray-400 hover:text-white text-sm transition"
                  >
                    Company Information
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-gray-400 hover:text-white text-sm transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-conditions"
                    className="text-gray-400 hover:text-white text-sm transition"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sustainability"
                    className="text-gray-400 hover:text-white text-sm transition"
                  >
                    Sustainability Commitment
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cookie-policy"
                    className="text-gray-400 hover:text-white text-sm transition"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Vendors & Suppliers */}
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
                Vendors &amp; Suppliers
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/modern-slavery"
                    className="text-gray-400 hover:text-white text-sm transition"
                  >
                    Modern Slavery Statement
                  </Link>
                </li>
                <li>
                  <Link
                    to="/vendor-enquiry"
                    className="text-gray-400 hover:text-white text-sm transition"
                  >
                    Vendor Enquiries
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ethics-hotline"
                    className="text-gray-400 hover:text-white text-sm transition"
                  >
                    Ethics Hotline for Suppliers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/vendor-code-of-conduct"
                    className="text-gray-400 hover:text-white text-sm transition"
                  >
                    Vendor Code of Conduct
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-white text-sm transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-white text-sm transition"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="text-gray-400 hover:text-white text-sm transition"
                  >
                    Register Business
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="text-gray-400 hover:text-white text-sm transition"
                  >
                    Log in
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact + Socials */}
            <div>
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
                Contact
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 text-blue-400 mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z"
                    />
                  </svg>
                  <span className="text-gray-400 text-sm">
                    6 Ristol Road, Glasgow, G13 1UY, Scotland
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-blue-400 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0-8.953 5.469a1.5 1.5 0 0 1-1.594 0L2.25 6.75"
                    />
                  </svg>
                  <a
                    href="mailto:contact@costrick.com"
                    className="text-gray-400 hover:text-white text-sm transition"
                  >
                    contact@costrick.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-blue-400 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z"
                    />
                  </svg>
                  <span className="text-gray-400 text-sm">0141 959 1098</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-blue-400 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582"
                    />
                  </svg>
                  <a
                    href="https://costrick.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition"
                  >
                    costrick.com
                  </a>
                </li>
              </ul>
              {/* Social Icons */}
              <div className="flex gap-3 mt-5">
                <a
                  href="mailto:contact@costrick.com"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0-8.953 5.469a1.5 1.5 0 0 1-1.594 0L2.25 6.75"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-500 text-xs text-center md:text-left">
              © 2022 – {new Date().getFullYear()}, costrick.com . Costrick
              Limited. Private limited company registered in Scotland
              (SC806470). All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy-policy"
                className="text-gray-500 hover:text-gray-300 text-xs transition"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-conditions"
                className="text-gray-500 hover:text-gray-300 text-xs transition"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                to="/cookie-policy"
                className="text-gray-500 hover:text-gray-300 text-xs transition"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
