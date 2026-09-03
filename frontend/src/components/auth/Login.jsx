import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { loginUser } from "../../api/auth.api";
import { useAuth } from "../../context/AuthContext.jsx";

import AuthLayout from "./AuthLayout.jsx";

/*
|--------------------------------------------------------------------------
| Background Code
|--------------------------------------------------------------------------
| These snippets are purely decorative.
| They create the competitive-programming / C++ atmosphere
| without interfering with the actual login form.
|--------------------------------------------------------------------------
*/

const backgroundCode = [
    {
        className: "left-[4%] top-[12%]",
        code: `#include <cphub.h>
#include <algorithm>
#include <vector>

using namespace std;
using namespace cphub;`,
    },
    {
        className: "right-[5%] top-[16%]",
        code: `Contest contest;

contest.start();
solve();
submit();

if (accepted) {
    improve();
}`,
    },
    {
        className: "left-[6%] bottom-[18%]",
        code: `for (auto problem : contest) {
    solve(problem);
    submit(problem);
}

// think
// code
// repeat`,
    },
    {
        className: "right-[7%] bottom-[16%]",
        code: `if (rating > previous_rating) {
    cout << "LEVEL UP";
}

// consistency > motivation`,
    },
    {
        className: "left-[30%] top-[7%]",
        code: `vector<int> problems;
sort(problems.begin(),
     problems.end());`,
    },
    {
        className: "right-[28%] bottom-[7%]",
        code: `while (!solved) {
    practice();
    try_again();
}`,
    },
];

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
                password: formData.password,
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
        <div className="relative min-h-screen overflow-hidden bg-[#060A10] font-body text-[#EDF2F7] antialiased">

            {/* =========================================================
                BACKGROUND
            ========================================================= */}

            {/* Grid */}
            <div
                className="
                    pointer-events-none
                    absolute inset-0
                    opacity-[0.18]
                    [background-image:linear-gradient(rgba(28,39,52,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(28,39,52,0.45)_1px,transparent_1px)]
                    [background-size:42px_42px]
                "
            />

            {/* Large ambient glow */}
            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-[600px]
                    w-[600px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#4AFFC4]/[0.035]
                    blur-[140px]
                "
            />

            {/* Secondary glows */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -left-32
                    top-1/4
                    h-[350px]
                    w-[350px]
                    rounded-full
                    bg-[#4AFFC4]/[0.015]
                    blur-[100px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-32
                    bottom-1/4
                    h-[350px]
                    w-[350px]
                    rounded-full
                    bg-[#4AFFC4]/[0.015]
                    blur-[100px]
                "
            />

            {/* =========================================================
                BACKGROUND CODE
            ========================================================= */}

            <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">

                {backgroundCode.map((item, index) => (
                    <pre
                        key={index}
                        className={`
                            absolute
                            ${item.className}
                            whitespace-pre
                            font-mono
                            text-[10px]
                            leading-5
                            text-[#7F8B9C]
                            opacity-[0.45]
                            select-none
                            transition-opacity
                            duration-700
                        `}
                    >
                        {item.code}
                    </pre>
                ))}

            </div>

            {/* =========================================================
                FLOATING CP DECORATIONS
            ========================================================= */}

            {/* Top-left status */}
            <div
                className="
                    pointer-events-none
                    absolute
                    left-6
                    top-6
                    hidden
                    font-mono
                    text-[9px]
                    leading-5
                    text-[#556275]
                    opacity-50
                    lg:block
                "
            >
                <div>
                    <span className="text-[#4AFFC4]">CPHUB_CORE</span>
                    {" "}v1.0
                </div>

                <div>
                    status:{" "}
                    <span className="text-[#4AFFC4]">
                        online
                    </span>
                </div>
            </div>

            {/* Top-right terminal */}
            <div
                className="
                    pointer-events-none
                    absolute
                    right-6
                    top-6
                    hidden
                    font-mono
                    text-[9px]
                    leading-5
                    text-[#556275]
                    opacity-40
                    lg:block
                "
            >
                <div>cphub@contestant:~$ ./login</div>
                <div>
                    server:{" "}
                    <span className="text-[#4AFFC4]">
                        connected
                    </span>
                </div>
            </div>

            {/* Bottom-left */}
            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-7
                    left-7
                    hidden
                    font-mono
                    text-[9px]
                    leading-5
                    text-[#556275]
                    opacity-35
                    lg:block
                "
            >
                <div>problems: 1000+</div>
                <div>contests: active</div>
                <div>community: online</div>
            </div>

            {/* Bottom-right */}
            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-7
                    right-7
                    hidden
                    font-mono
                    text-[9px]
                    leading-5
                    text-[#556275]
                    opacity-35
                    lg:block
                "
            >
                <div>
                    &gt; ready_for_submission
                </div>
                <div>
                    <span className="text-[#4AFFC4]">█</span>
                </div>
            </div>

            {/* =========================================================
                LOGIN CONTENT
            ========================================================= */}

            <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-16">

                <div className="w-full max-w-md">

                    {/* Login card */}
                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-xl
                            border
                            border-[#1C2734]
                            bg-[#080E16]/95
                            p-6
                            shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                            backdrop-blur-xl
                            sm:p-8
                        "
                    >

                        {/* Top accent line */}
                        <div
                            className="
                                pointer-events-none
                                absolute
                                left-1/2
                                top-0
                                h-px
                                w-2/3
                                -translate-x-1/2
                                bg-gradient-to-r
                                from-transparent
                                via-[#4AFFC4]/60
                                to-transparent
                            "
                        />

                        {/* Subtle card glow */}
                        <div
                            className="
                                pointer-events-none
                                absolute
                                left-1/2
                                top-0
                                h-32
                                w-64
                                -translate-x-1/2
                                rounded-full
                                bg-[#4AFFC4]/[0.025]
                                blur-3xl
                            "
                        />

                        <div className="relative">

                            {/* Small identifier */}
                            <div className="mb-6 flex items-center justify-between">

                                <div className="font-mono text-[10px] text-[#556275]">
                                    <span className="text-[#4AFFC4]">
                                        01
                                    </span>
                                    {" "}· authentication
                                </div>

                                <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#556275]">
                                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4AFFC4]" />
                                    secure
                                </div>

                            </div>

                            {/* Logo / Heading */}
                            <div className="mb-8">

                                <div className="mb-4 flex items-center gap-3">

                                    <div
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            items-center
                                            justify-center
                                            rounded-md
                                            border
                                            border-[#4AFFC4]/20
                                            bg-[#4AFFC4]/5
                                            font-mono
                                            text-sm
                                            font-bold
                                            text-[#4AFFC4]
                                        "
                                    >
                                        &gt;_
                                    </div>

                                    <div>
                                        <div className="font-mono text-sm font-bold text-[#EDF2F7]">
                                            cp
                                            <span className="text-[#4AFFC4]">
                                                /
                                            </span>
                                            dsa
                                            <span className="text-[#556275]">
                                                _club
                                            </span>
                                        </div>

                                        <div className="font-mono text-[9px] text-[#556275]">
                                            competitive programming
                                        </div>
                                    </div>

                                </div>

                                <h1 className="font-display text-2xl font-semibold tracking-tight text-[#EDF2F7]">
                                    Welcome back
                                </h1>

                                <p className="mt-2 text-sm text-[#7F8B9C]">
                                    Sign in to continue your journey.
                                </p>

                            </div>

                            {/* =================================================
                                FORM
                            ================================================= */}

                            <form
                                onSubmit={handleSubmit}
                                className={`
                                    space-y-5
                                    transition-opacity
                                    duration-200
                                    ${
                                        loading
                                            ? "pointer-events-none opacity-50"
                                            : "opacity-100"
                                    }
                                `}
                            >

                                {/* Email / Username */}
                                <div>

                                    <label
                                        htmlFor="emailOrUsername"
                                        className="
                                            mb-2
                                            block
                                            font-mono
                                            text-[11px]
                                            text-[#AEB9C7]
                                        "
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
                                            w-full
                                            rounded-md
                                            border
                                            border-[#1C2734]
                                            bg-[#060A10]
                                            px-4
                                            py-3
                                            font-mono
                                            text-sm
                                            text-[#EDF2F7]
                                            outline-none
                                            transition
                                            placeholder:text-[#3E4A5B]
                                            hover:border-[#2A3341]
                                            focus:border-[#4AFFC4]/60
                                            focus:ring-1
                                            focus:ring-[#4AFFC4]/10
                                        "
                                    />

                                </div>

                                {/* Password */}
                                <div>

                                    <div className="mb-2 flex items-center justify-between">

                                        <label
                                            htmlFor="password"
                                            className="
                                                font-mono
                                                text-[11px]
                                                text-[#AEB9C7]
                                            "
                                        >
                                            password
                                        </label>

                                        <button
                                            type="button"
                                            disabled={loading}
                                            className="
                                                font-mono
                                                text-[10px]
                                                text-[#556275]
                                                transition
                                                hover:text-[#4AFFC4]
                                            "
                                        >
                                            forgot_password?
                                        </button>

                                    </div>

                                    <div className="relative">

                                        <input
                                            id="password"
                                            name="password"
                                            disabled={loading}
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="••••••••••••"
                                            autoComplete="current-password"
                                            required
                                            className="
                                                w-full
                                                rounded-md
                                                border
                                                border-[#1C2734]
                                                bg-[#060A10]
                                                px-4
                                                py-3
                                                pr-11
                                                font-mono
                                                text-sm
                                                text-[#EDF2F7]
                                                outline-none
                                                transition
                                                placeholder:text-[#3E4A5B]
                                                hover:border-[#2A3341]
                                                focus:border-[#4AFFC4]/60
                                                focus:ring-1
                                                focus:ring-[#4AFFC4]/10
                                            "
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(
                                                    (prev) => !prev
                                                )
                                            }
                                            disabled={loading}
                                            aria-label={
                                                showPassword
                                                    ? "Hide password"
                                                    : "Show password"
                                            }
                                            className="
                                                absolute
                                                right-3
                                                top-1/2
                                                -translate-y-1/2
                                                text-[#556275]
                                                transition
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
                                    disabled={loading}
                                    className="
                                        group
                                        flex
                                        w-full
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-md
                                        border
                                        border-[#4AFFC4]
                                        bg-[#4AFFC4]
                                        px-4
                                        py-3
                                        font-mono
                                        text-[13px]
                                        font-bold
                                        text-[#06120D]
                                        transition
                                        duration-200
                                        hover:bg-transparent
                                        hover:text-[#4AFFC4]
                                        disabled:cursor-not-allowed
                                        disabled:opacity-50
                                    "
                                >
                                    {loading ? (
                                        <>
                                            <span
                                                className="
                                                    h-4
                                                    w-4
                                                    animate-spin
                                                    rounded-full
                                                    border-2
                                                    border-[#06120D]
                                                    border-t-transparent
                                                "
                                            />

                                            signing_in...
                                        </>
                                    ) : (
                                        <>
                                            sign_in

                                            <ArrowRight
                                                size={15}
                                                className="
                                                    transition-transform
                                                    group-hover:translate-x-1
                                                "
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
                                        mt-2
                                        inline-flex
                                        items-center
                                        gap-1
                                        font-mono
                                        text-xs
                                        text-[#4AFFC4]
                                        transition
                                        hover:text-[#72FFD2]
                                    "
                                >
                                    create_account

                                    <ArrowRight size={12} />
                                </Link>

                            </div>

                        </div>

                    </div>

                    {/* Bottom label */}
                    <div className="mt-5 text-center">

                        <span className="font-mono text-[9px] text-[#3E4A5B]">
                            cp/dsa_club
                            {" "}·{" "}
                            <span className="text-[#556275]">
                                think · code · compete
                            </span>
                        </span>

                    </div>

                </div>

            </main>

        </div>
    );
};

export default Login;