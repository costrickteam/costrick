// frontend/src/pages/Register.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api.js";
import promoHeineken from "../assets/images/promo-heineken.jpeg";
import promoCocaCola from "../assets/images/promo-cocacola.jpeg";
import promoBudweiser from "../assets/images/promo-budweiser.jpeg";

const promos = [
  {
    img: promoHeineken,
    title: "Exclusive Wholesale Deals",
    desc: "Access the best prices on top brands like Heineken — directly from verified wholesalers across Scotland.",
  },
  {
    img: promoCocaCola,
    title: "Stock What Sells",
    desc: "Keep your shelves full of customer favourites like Coca-Cola with real-time price comparisons and smart ordering.",
  },
  {
    img: promoBudweiser,
    title: "Grow Your Business",
    desc: "Discover premium promotions on brands like Budweiser and boost your margins with Costrick's data-driven platform.",
  },
];

export default function Register() {
  const navigate = useNavigate();
  const [activePromo, setActivePromo] = useState(0);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    street: "",
    city: "",
    postalCode: "",
    businessType: "Local Shop",
    marketingOpt: false,
  });

  useEffect(() => {
    const timer = setInterval(
      () => setActivePromo((prev) => (prev + 1) % promos.length),
      4000,
    );
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/register", {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        businessName: form.businessName,
        businessType: form.businessType,
        street: form.street,
        city: form.city,
        postalCode: form.postalCode,
        marketingOpt: form.marketingOpt,
      });
      alert("Registered successfully!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-0 bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left — Registration Form */}
        <div className="p-8 md:p-10">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">
            Register Your Business
          </h1>
          <p className="text-gray-500 mb-8">
            Join Scotland's growing network of convenience retailers and
            wholesalers.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                name="firstName"
                placeholder="First Name*"
                value={form.firstName}
                onChange={handleChange}
                required
                className="w-full bg-gray-50 rounded-lg px-4 py-3 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
              <input
                name="lastName"
                placeholder="Last Name*"
                value={form.lastName}
                onChange={handleChange}
                required
                className="w-full bg-gray-50 rounded-lg px-4 py-3 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            <input
              name="email"
              type="email"
              placeholder="Email*"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-50 rounded-lg px-4 py-3 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
            <input
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-gray-50 rounded-lg px-4 py-3 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
            <input
              name="businessName"
              placeholder="Business Name*"
              value={form.businessName}
              onChange={handleChange}
              required
              className="w-full bg-gray-50 rounded-lg px-4 py-3 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                name="street"
                placeholder="Street Address*"
                value={form.street}
                onChange={handleChange}
                required
                className="w-full bg-gray-50 rounded-lg px-4 py-3 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
              <input
                name="city"
                placeholder="City*"
                value={form.city}
                onChange={handleChange}
                required
                className="w-full bg-gray-50 rounded-lg px-4 py-3 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                name="postalCode"
                placeholder="Postal Code*"
                value={form.postalCode}
                onChange={handleChange}
                required
                className="w-full bg-gray-50 rounded-lg px-4 py-3 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
              <select
                name="businessType"
                value={form.businessType}
                onChange={handleChange}
                className="w-full bg-gray-50 rounded-lg px-4 py-3 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition"
              >
                <option>Local Shop</option>
                <option>Supplier</option>
                <option>Wholesaler</option>
              </select>
            </div>

            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                name="marketingOpt"
                checked={form.marketingOpt}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 rounded"
              />
              <span className="text-sm">Send me updates and offers</span>
            </label>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition shadow-lg shadow-blue-600/25"
            >
              Register Now
            </button>
          </form>
        </div>

        {/* Right — Promo Image Slider */}
        <div className="hidden lg:flex flex-col relative overflow-hidden">
          {/* Full-bleed image slider */}
          <div className="flex-1 relative min-h-full">
            {promos.map((promo, idx) => (
              <img
                key={idx}
                src={promo.img}
                alt={promo.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  idx === activePromo ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
          </div>

          {/* Text overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
            {promos.map((promo, idx) => (
              <div
                key={idx}
                className={`transition-all duration-500 ${
                  idx === activePromo
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 absolute bottom-8 left-8 right-8"
                }`}
              >
                <h3 className="text-xl font-bold text-white mb-1">
                  {promo.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {promo.desc}
                </p>
              </div>
            ))}

            {/* Slide indicators */}
            <div className="flex gap-2 mt-4">
              {promos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActivePromo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activePromo
                      ? "bg-white w-8"
                      : "bg-white/30 w-4 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
