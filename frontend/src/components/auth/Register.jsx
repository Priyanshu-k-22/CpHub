import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { registerUser } from "../../api/auth.api";

import AuthLayout from "./AuthLayout.jsx";

/*
|--------------------------------------------------------------------------
| Background Code
|--------------------------------------------------------------------------
| Decorative competitive-programming code.
| It stays behind the registration form and does not affect interaction.
|--------------------------------------------------------------------------
*/

const backgroundCode = [
    {
        className: "left-[4%] top-[10%]",
        code: `#include <cphub.h>
#include <algorithm>
#include <vector>

using namespace std;
using namespace cphub;`,
    },
    {
        className: "right-[5%] top-[14%]",
        code: `Contestant user;

user.register();
user.practice();
user.compete();

if (user.ready()) {
    enter_contest();
}`,
    },
    {
        className: "left-[5%] bottom-[15%]",
        code: `for (auto problem : problems) {
    solve(problem);
    submit(problem);
}

// think
// code
// repeat`,
    },
    {
        className: "right-[6%] bottom-[17%]",
        code: `if (rating > previous_rating) {
    cout << "LEVEL UP";
}

// consistency > motivation`,
    },
    {
        className: "left-[29%] top-[6%]",
        code: `vector<int> skills;

sort(
    skills.begin(),
    skills.end()
);`,
    },
    {
        className: "right-[28%] bottom-[7%]",
        code: `while (!solved) {
    practice();
    try_again();
}`,
    },
];

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
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

        if (formData.password !== formData.confirmPassword) {
            console.log("Passwords do not match");
            return;
        }

        try {
            setLoading(true);

            const response = await registerUser({
                username: formData.username,
                email: formData.email,
                password: formData.password,
            });

            console.log("Register successful:", response);

            navigate("/");
        } catch (error) {
            console.error(
                "Register failed:",
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
                    absolute
                    inset-0
                    opacity-[0.18]
                    [background-image:linear-gradient(rgba(28,39,52,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(28,39,52,0.45)_1px,transparent_1px)]
                    [background-size:42px_42px]
                "
            />

            {/* Main ambient glow */}
            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-[650px]
                    w-[650px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#4AFFC4]/[0.035]
                    blur-[150px]
                "
            />

            {/* Secondary glow - left */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -left-40
                    top-1/3
                    h-[400px]
                    w-[400px]
                    rounded-full
                    bg-[#4AFFC4]/[0.018]
                    blur-[110px]
                "
            />

            {/* Secondary glow - right */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    bottom-1/3
                    h-[400px]
                    w-[400px]
                    rounded-full
                    bg-[#4AFFC4]/[0.018]
                    blur-[110px]
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
                            text-[11px]
                            leading-6
                            text-[#7F8B9C]
                            opacity-[0.45]
                            select-none
                        `}
                    >
                        {item.code}
                    </pre>
                ))}

            </div>

            {/* =========================================================
                TERMINAL DECORATIONS
            ========================================================= */}

            {/* Top-left */}
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
                    <span className="text-[#4AFFC4]">
                        CPHUB_CORE
                    </span>{" "}
                    v1.0
                </div>

                <div>
                    status:{" "}
                    <span className="text-[#4AFFC4]">
                        online
                    </span>
                </div>
            </div>

            {/* Top-right */}
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
                <div>
                    cphub@contestant:~$ ./register
                </div>

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
                    &gt; create_new_contestant
                </div>

                <div>
                    <span className="text-[#4AFFC4]">
                        █
                    </span>
                </div>
            </div>

            {/* =========================================================
                REGISTER CONTENT
            ========================================================= */}

            <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">

                <div className="w-full max-w-md">

                    {/* Register Card */}
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

                        {/* Top accent */}
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

                        {/* Card glow */}
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

                            {/* Header status */}
                            <div className="mb-6 flex items-center justify-between">

                                <div className="font-mono text-[10px] text-[#556275]">
                                    <span className="text-[#4AFFC4]">
                                        02
                                    </span>{" "}
                                    · registration
                                </div>

                                <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#556275]">
                                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4AFFC4]" />
                                    secure
                                </div>

                            </div>

                            {/* Header */}
                            <div className="mb-7">

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
                                            join the community
                                        </div>
                                    </div>

                                </div>

                                <h1 className="font-display text-2xl font-semibold tracking-tight text-[#EDF2F7]">
                                    Create account
                                </h1>

                                <p className="mt-2 text-sm text-[#7F8B9C]">
                                    Create your competitive programming profile.
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

                                {/* Username */}
                                <div>

                                    <label
                                        htmlFor="username"
                                        className="
                                            mb-2
                                            block
                                            font-mono
                                            text-[11px]
                                            text-[#AEB9C7]
                                        "
                                    >
                                        username
                                    </label>

                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        disabled={loading}
                                        value={formData.username}
                                        onChange={handleChange}
                                        placeholder="choose_username"
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

                                {/* Email */}
                                <div>

                                    <label
                                        htmlFor="email"
                                        className="
                                            mb-2
                                            block
                                            font-mono
                                            text-[11px]
                                            text-[#AEB9C7]
                                        "
                                    >
                                        email
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        disabled={loading}
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        autoComplete="email"
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

                                    <label
                                        htmlFor="password"
                                        className="
                                            mb-2
                                            block
                                            font-mono
                                            text-[11px]
                                            text-[#AEB9C7]
                                        "
                                    >
                                        password
                                    </label>

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
                                            placeholder="create_password"
                                            autoComplete="new-password"
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

                                {/* Confirm Password */}
                                <div>

                                    <label
                                        htmlFor="confirmPassword"
                                        className="
                                            mb-2
                                            block
                                            font-mono
                                            text-[11px]
                                            text-[#AEB9C7]
                                        "
                                    >
                                        confirm_password
                                    </label>

                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        disabled={loading}
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="repeat_password"
                                        autoComplete="new-password"
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

                                            creating_account...
                                        </>
                                    ) : (
                                        <>
                                            create_account

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

                            {/* Login */}
                            <div className="mt-7 border-t border-[#1C2734] pt-6 text-center">

                                <p className="text-xs text-[#7F8B9C]">
                                    Already have an account?
                                </p>

                                <Link
                                    to="/login"
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
                                    sign_in

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

export default Register;