"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Login() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await axios.post(
        "http://localhost:5000/users/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      console.log("Login response:", res);
      setMessage(res.data.message || "Login successful!");

      // Optionally, save token to localStorage/sessionStorage if backend sends one
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      // Redirect to dashboard or homepage
      router.push("/");
    } catch (err) {
      console.error("Login error:", err.response || err);
      setMessage(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2 text-center">
          Login
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mb-6 text-center">
          Enter your credentials to access your account.
        </p>

        {message && (
          <div className="mb-4 p-3 text-center bg-yellow-100 text-yellow-800 rounded-md">
            {message}
          </div>
        )}

        <form className="space-y-5 text-black" onSubmit={handleSubmit}>
          {/* Email or Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password with toggle */}
      <div className="relative">
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Password <span className="text-red-500">*</span>
  </label>

  {/* Input Box */}
  <div className="relative">
    <input
      name="password"
      type={showPassword ? "text" : "password"}
      required
      value={formData.password}
      onChange={handleChange}
      placeholder="Enter your password"
      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-16"
    />

    {/* SHOW / HIDE inside input (right side) */}
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 text-sm"
    >
      {showPassword ? "Hide" : "Show"}
    </button>
  </div>

  {/* Forgot Password bottom-right */}
  <div className="flex justify-end mt-1">
    <Link
      href="/forgot-password"
      className="text-sm text-red-600 hover:underline"
    >
      Forgot password?
    </Link>
  </div>
</div>


          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full text-sm sm:text-base transition-colors duration-150 disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <span
              className="text-red-600 cursor-pointer hover:underline"
              onClick={() => router.push("/register")}
            >
              Register
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
