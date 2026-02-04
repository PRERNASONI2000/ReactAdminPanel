import React, { useState } from "react";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({}); // custom error messages


    const validateForm = () => {
        let newErrors = {};

        // username validation
        if (!username) {
            newErrors.username = "Username is required!";
        }

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
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form Submitted ✅", { email, password });
            alert("Login Successful!");
        }
    };





    return (
        <div className="w-full h-screen relative bg-white">
            {/* Top Image Section */}
            <div className="w-full h-1/2 bg-lime-600">

            </div>

            {/* Signup Card (Overlap on image + bottom area) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6">
                <div className="bg-white p-8 rounded shadow-xl">
                    <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
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
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
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
                        <button className="btn btn-outline btn-primary">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default SignUp;