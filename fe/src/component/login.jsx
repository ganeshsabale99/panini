import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("https://blogverse-6.onrender.com/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/home");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4">
      <div className="w-full max-w-md bg-white/30 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/50">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">BlogVerse</h1>
          <p className="mt-1 text-sm text-gray-600">Welcome back 👋 Please log in</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-3 bg-white/80 rounded-xl border border-gray-300 text-sm text-gray-800 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-3 bg-white/80 rounded-xl border border-gray-300 text-sm text-gray-800 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition duration-200 disabled:opacity-60"
          >
            {isLoading ? "Logging in..." : "Sign in"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-700">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-purple-600 font-medium hover:underline"
          >
            Sign up now
          </button>
        </div>
      </div>

      <footer className="absolute bottom-4 text-xs text-gray-500 text-center">
        &copy; 2025 BlogVerse. All rights reserved.
      </footer>
    </div>
  );
};

export default Login;
