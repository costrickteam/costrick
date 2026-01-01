// frontend/src/pages/Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api.js";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    street: "",
    city: "",
    postalCode: "",
    country: "",
    businessType: "Local Shop",
    marketingOpt: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/register", form);
      alert("Registered successfully!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold text-center text-indigo-800 mb-6">
        Register Your Business
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="firstName"
          placeholder="First Name*"
          value={form.firstName}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-4 py-3"
        />
        <input
          name="lastName"
          placeholder="Last Name*"
          value={form.lastName}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-4 py-3"
        />
        <input
          name="email"
          type="email"
          placeholder="Email*"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-4 py-3"
        />
        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3"
        />
        <input
          name="businessName"
          placeholder="Business Name*"
          value={form.businessName}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-4 py-3"
        />
        <input
          name="street"
          placeholder="Street Address*"
          value={form.street}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-4 py-3"
        />
        <input
          name="city"
          placeholder="City*"
          value={form.city}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-4 py-3"
        />
        <input
          name="postalCode"
          placeholder="Postal Code*"
          value={form.postalCode}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-4 py-3"
        />
        <input
          name="country"
          placeholder="Country*"
          value={form.country}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-4 py-3"
        />

        <select
          name="businessType"
          value={form.businessType}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3"
        >
          <option>Local Shop</option>
          <option>Supplier</option>
          <option>Wholesaler</option>
        </select>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="marketingOpt"
            checked={form.marketingOpt}
            onChange={handleChange}
          />
          <span>Send me updates and offers</span>
        </label>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold"
        >
          Register Now
        </button>
      </form>
    </div>
  );
}
