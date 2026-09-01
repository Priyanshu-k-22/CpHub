import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

import AuthLayout from "./AuthLayout.jsx";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    console.log("Register:", formData);
  };

  return (
    <AuthLayout mode="register">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Username */}
        <div>
          <label
            htmlFor="username"
            className="mb-2 block font-mono text-[11px] text-[#AEB9C7]"
          >
            username
          </label>

          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            placeholder="choose_username"
            autoComplete="username"
            required
            className="
              w-full rounded-md border border-[#1C2734]
              bg-[#060A10] px-4 py-3
              font-mono text-sm text-[#EDF2F7]
              outline-none transition
              placeholder:text-[#3E4A5B]
              hover:border-[#2A3341]
              focus:border-[#4AFFC4]/60
              focus:ring-1 focus:ring-[#4AFFC4]/10
            "
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-mono text-[11px] text-[#AEB9C7]"
          >
            email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            autoComplete="email"
            required
            className="
              w-full rounded-md border border-[#1C2734]
              bg-[#060A10] px-4 py-3
              font-mono text-sm text-[#EDF2F7]
              outline-none transition
              placeholder:text-[#3E4A5B]
              hover:border-[#2A3341]
              focus:border-[#4AFFC4]/60
              focus:ring-1 focus:ring-[#4AFFC4]/10
            "
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="mb-2 block font-mono text-[11px] text-[#AEB9C7]"
          >
            password
          </label>

          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              placeholder="create_password"
              autoComplete="new-password"
              required
              className="
                w-full rounded-md border border-[#1C2734]
                bg-[#060A10] px-4 py-3 pr-11
                font-mono text-sm text-[#EDF2F7]
                outline-none transition
                placeholder:text-[#3E4A5B]
                hover:border-[#2A3341]
                focus:border-[#4AFFC4]/60
                focus:ring-1 focus:ring-[#4AFFC4]/10
              "
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="
                absolute right-3 top-1/2 -translate-y-1/2
                text-[#556275] transition
                hover:text-[#4AFFC4]
              "
            >
              {showPassword ? (
                <EyeOff size={16} />
              ) : (
                <Eye size={16} />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-2 block font-mono text-[11px] text-[#AEB9C7]"
          >
            confirm_password
          </label>

          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="repeat_password"
            autoComplete="new-password"
            required
            className="
              w-full rounded-md border border-[#1C2734]
              bg-[#060A10] px-4 py-3
              font-mono text-sm text-[#EDF2F7]
              outline-none transition
              placeholder:text-[#3E4A5B]
              hover:border-[#2A3341]
              focus:border-[#4AFFC4]/60
              focus:ring-1 focus:ring-[#4AFFC4]/10
            "
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="
            group flex w-full items-center justify-center gap-2
            rounded-md border border-[#4AFFC4]
            bg-[#4AFFC4] px-4 py-3
            font-mono text-[13px] font-bold
            text-[#06120D]
            transition
            hover:bg-transparent hover:text-[#4AFFC4]
          "
        >
          create_account
          <ArrowRight
            size={15}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </form>

      {/* Login */}
      <div className="mt-7 border-t border-[#1C2734] pt-6 text-center">
        <p className="text-xs text-[#7F8B9C]">
          Already have an account?
        </p>

        <Link
          to="/login"
          className="
            mt-2 inline-flex items-center gap-1
            font-mono text-xs text-[#4AFFC4]
            transition hover:text-[#72FFD2]
          "
        >
          sign_in
          <ArrowRight size={12} />
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Register;