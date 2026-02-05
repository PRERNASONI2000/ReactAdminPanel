import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200">
      
      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-2xl p-8">
        
        <h2 className="text-2xl font-bold text-center mb-2">
          Forgot Password?
        </h2>
        
        <p className="text-sm text-center text-gray-500 mb-6">
          Enter your email and we’ll send you a reset link.
        </p>

        <form className="space-y-4">
          
          <div>
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          <button className="btn btn-primary w-full">
            Send Reset Link
          </button>

        </form>

        <div className="text-center mt-5">
          <Link to="/login" className="text-sm text-primary hover:underline">
            ← Back to Login
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;
