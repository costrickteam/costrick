import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import About from "./pages/About.jsx";
import CompanyInfo from "./pages/CompanyInfo.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";
import Sustainability from "./pages/Sustainability.jsx";
import CookiePolicy from "./pages/CookiePolicy.jsx";
import ModernSlavery from "./pages/ModernSlavery.jsx";
import VendorEnquiry from "./pages/VendorEnquiry.jsx";
import EthicsHotline from "./pages/EthicsHotline.jsx";
import VendorCodeOfConduct from "./pages/VendorCodeOfConduct.jsx";
import api, { setAuthToken } from "./services/api.js";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
}

export default function App() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setAuthToken(token);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/company-info" element={<CompanyInfo />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/modern-slavery" element={<ModernSlavery />} />
          <Route path="/vendor-enquiry" element={<VendorEnquiry />} />
          <Route path="/ethics-hotline" element={<EthicsHotline />} />
          <Route
            path="/vendor-code-of-conduct"
            element={<VendorCodeOfConduct />}
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
