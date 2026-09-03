import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { loginUser } from "../../api/auth.api";
import { useAuth } from "../../context/AuthContext.jsx";

import AuthLayout from "./AuthLayout.jsx";

const Login = () => {
  const navigate = useNavigate();
  const { checkAuth } = useAuth();
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        setLoading(true);

        const response = await loginUser({
            email: formData.emailOrUsername,
            password: formData.password
        });

        console.log("Login successful:", response);

        await checkAuth();

        navigate("/dashboard");
    } catch (error) {
        console.error(
            "Login failed:",
            error.response?.data || error
        );

        setLoading(false);
    }
};

  return (
    <AuthLayout mode="login">
      <form
        onSubmit={handleSubmit}
        className={`space-y-5 transition-opacity duration-200 ${loading
            ? "opacity-50 pointer-events-none"
            : "opacity-100"
          }`}
      >
        {/* Email / Username */}
        <div>
          <label
            htmlFor="emailOrUsername"
            className="mb-2 block font-mono text-[11px] text-[#AEB9C7]"
          >
            email_or_username
          </label>

          <input
            id="emailOrUsername"
            name="emailOrUsername"
            type="text"
            disabled={loading}
            value={formData.emailOrUsername}
            onChange={handleChange}
            placeholder="you@example.com"
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

        {/* Password */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="password"
              className="font-mono text-[11px] text-[#AEB9C7]"
            >
              password
            </label>

            <button
              type="button"
              disabled={loading}
              className="font-mono text-[10px] text-[#556275] transition hover:text-[#4AFFC4]"
            >
              forgot_password?
            </button>
          </div>

          <div className="relative">
            <input
              id="password"
              name="password"
              disabled={loading}
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••••••"
              autoComplete="current-password"
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
              aria-label={showPassword ? "Hide password" : "Show password"}
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
          {loading ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#06120D] border-t-transparent" />
              signing_in...
            </>
          ) : (
            <>
              sign_in
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </>
          )}
        </button>
      </form>

      {/* Register */}
      <div className="mt-7 border-t border-[#1C2734] pt-6 text-center">
        <p className="text-xs text-[#7F8B9C]">
          Don't have an account?
        </p>

        <Link
          to="/register"
          className="
            mt-2 inline-flex items-center gap-1
            font-mono text-xs text-[#4AFFC4]
            transition hover:text-[#72FFD2]
          "
        >
          create_account
          <ArrowRight size={12} />
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Login;