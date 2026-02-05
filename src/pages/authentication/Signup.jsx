import React, { useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!username) {
      newErrors.username = "Username is required!";
    }

    if (!email) {
      newErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format!";
    }

    if (!password) {
      newErrors.password = "Password is required!";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted ✅", { username, email, password });
      alert("Signup Successful!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary p-4">

      <div className="bg-base-100 w-full max-w-md p-8 rounded-2xl shadow-xl">

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-primary">Create Account ✨</h2>
          <p className="text-sm text-gray-500 mt-1">
            Sign up to access your dashboard
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className={`input input-bordered w-full ${errors.username ? "input-error" : ""}`}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">{errors.username}</p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`input input-bordered w-full ${errors.email ? "input-error" : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className={`input input-bordered w-full ${errors.password ? "input-error" : ""}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <button className="btn btn-primary w-full">
            Sign Up
          </button>

        </form>

        {/* Login Link */}
        <p className="text-sm text-center mt-5">
          Already have an account?{" "}
          <a href="/login" className="text-primary font-semibold">
            Login
          </a>
        </p>

      </div>
    </div>
  );
};

export default SignUp;
