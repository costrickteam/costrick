import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api, { setAuthToken } from "../services/api.js";

export default function Login() {
  const [creds, setCreds] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await api.post("/auth/login", creds);

      // Save token
      localStorage.setItem("token", data.token);
      setAuthToken(data.token);

      // ONLY ADMIN CAN ACCESS DASHBOARD
      if (data.is_admin) {
        navigate("/dashboard", { replace: true });
      } else {
        alert("Access Denied: Admin login only.");
        localStorage.removeItem("token");
        setAuthToken(null);
      }
    } catch (err) {
      const message = err.response?.data?.error || "Invalid email or password";
      alert(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-800 mb-6">
          Admin Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Admin, please enter email"
              value={creds.email}
              onChange={(e) =>
                setCreds((p) => ({ ...p, email: e.target.value }))
              }
              required
              disabled={loading}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Admin, please enter your password"
              value={creds.password}
              onChange={(e) =>
                setCreds((p) => ({ ...p, password: e.target.value }))
              }
              required
              disabled={loading}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-medium transition ${
              loading
                ? "bg-indigo-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Only admin can access dashboard</p>
          <p className="mt-1 font-mono text-indigo-700">
          </p>
        </div>
      </div>
    </div>
  );
}
