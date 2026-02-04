import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({}); // custom error messages

    const validateForm = () => {
        let newErrors = {};

        // email validation
        if (!email) {
            newErrors.email = "Email is required!";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Invalid email format!";
        }

        // password validation
        if (!password) {
            newErrors.password = "Password is required!";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters!";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0; // return true if no errors
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form Submitted ✅", { email, password });
            alert("Login Successful!");
        }
    };

    return (
        <div className="card shadow-sm bg-base-100 w-full h-screen relative bg-white">
            <div className="w-full h-1/2 bg-lime-600"></div>

            <div className="bg-white p-8 rounded shadow-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6">
                <h2 className="font-bold text-center text-2xl">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}

                    </div>
                    <div className="form-control mt-3">
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
                            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                        )}
                    </div>

                    <button className="btn btn-outline btn-primary">Login</button>
                </form>
                <p className="text-sm text-center mt-3">
                    Don’t have an account?{" "}
                    <a href="/signup" className="text-primary font-semibold">
                        Signup
                    </a>
                </p>
                {/* <input className="input validator w-full" type="email" required placeholder="mail@site.com" />
<div className="validator-hint">Enter valid email address</div>
<input type="password" className="input validator" required placeholder="Password" minlength="8" 
  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
<p className="validator-hint">
  Must be more than 8 characters, including
  <br/>At least one number
  <br/>At least one lowercase letter
  <br/>At least one uppercase letter
</p> */}
            </div>
        </div>

    )
}

export default Login;