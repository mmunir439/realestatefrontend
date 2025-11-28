"use client";
import { useState } from "react";
import axios from "axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgot = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post("http://localhost:5000/users/forgot-password", { email });
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 text-black p-6">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>

        <form onSubmit={handleForgot} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your registered email"
            className="w-full px-4 py-2 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            disabled={loading}
            className="w-full bg-blue-600  py-2 rounded-lg hover:bg-blue-700 font-semibold"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-green-600 font-medium">{message}</p>
        )}
      </div>
    </div>
  );
}
