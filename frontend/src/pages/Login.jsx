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
    <div
      className="min-h-screen flex items-center justify-center px-4 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 30%, #93c5fd 70%, #60a5fa 100%)",
      }}
    >
      {/* Animated blob CSS */}
      <style>{`
        @keyframes blobRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes blobRotateReverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        .blob-shape {
          position: relative;
          width: 460px;
          height: 460px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .blob-shape .blob-one,
        .blob-shape .blob-two,
        .blob-shape .blob-three {
          position: absolute;
          width: 100%;
          height: 100%;
          transition: 0.5s;
        }
        .blob-shape .blob-one {
          border: 2px solid rgba(37,99,235,0.25);
          border-radius: 32% 58% 69% 43% / 48% 32% 59% 55%;
          animation: blobRotate 6s linear infinite;
        }
        .blob-shape .blob-two {
          border: 2px solid rgba(37,99,235,0.25);
          border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
          animation: blobRotate 6s linear infinite;
        }
        .blob-shape .blob-three {
          border: 2px solid rgba(37,99,235,0.25);
          border-radius: 31% 45% 74% 35% / 38% 56% 51% 37%;
          animation: blobRotateReverse 10s linear infinite;
        }
        .blob-shape:hover .blob-one,
        .blob-shape:hover .blob-two,
        .blob-shape:hover .blob-three {
          border: none;
          background: rgba(59, 130, 246, 0.15);
        }
        @media (max-width: 1024px) {
          .blob-shape { display: none; }
        }
      `}</style>

      <div className="max-w-5xl w-full flex items-center justify-center gap-12 lg:gap-20">
        {/* Left — Animated Blob */}
        <div className="hidden lg:flex flex-col items-center">
          <div className="blob-shape">
            <span className="blob-one"></span>
            <span className="blob-two"></span>
            <span className="blob-three"></span>
            <div className="relative z-10 text-center px-10">
              <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-3">
                Costrick
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                All wholesalers on a single tab — compare, order, and grow your
                convenience store.
              </p>
            </div>
          </div>
        </div>

        {/* Right — Login Form */}
        <div className="max-w-md w-full">
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-blue-100 shadow-2xl">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
              Admin Login
            </h1>
            <p className="text-center text-gray-500 text-sm mb-8">
              Company administrator access only
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={creds.email}
                  onChange={(e) =>
                    setCreds((p) => ({
                      ...p,
                      email: e.target.value.toLowerCase(),
                    }))
                  }
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 bg-white/80 border border-blue-200 rounded-lg text-gray-800 placeholder-blue-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={creds.password}
                  onChange={(e) =>
                    setCreds((p) => ({ ...p, password: e.target.value }))
                  }
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 bg-white/80 border border-blue-200 rounded-lg text-gray-800 placeholder-blue-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg font-semibold tracking-wide uppercase transition ${
                  loading
                    ? "bg-blue-200 text-blue-400 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-400/25"
                }`}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <p className="mt-6 text-center text-gray-400 text-xs">
              All Wholesalers on single tab...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
