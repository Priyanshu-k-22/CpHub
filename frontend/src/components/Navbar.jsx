import React, { useEffect, useState } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import Container from "../ui/Container.jsx";
import { useAuth } from "../context/AuthContext.jsx";

const PUBLIC_NAV_LINKS = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/events", label: "Events" },
    { path: "/contests", label: "Contests" },
    { path: "/leaderboard", label: "Leaderboard" },
    { path: "/team", label: "Our Team" },
    { path: "/achievements", label: "Achievements" },
    { path: "/gallery", label: "Gallery" },
];

const AUTH_NAV_LINKS = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/problems", label: "Problems" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [loggingOut, setLoggingOut] = useState(false);

    const { user, loading, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 8);
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const closeMenu = () => {
        setOpen(false);
    };

    const handleLogout = async () => {
        try {
            setLoggingOut(true);

            await logout();

            setOpen(false);
            navigate("/");
        } catch (error) {
            console.error("Logout failed:", error);
        } finally {
            setLoggingOut(false);
        }
    };

    return (
        <header
            className={`sticky top-0 z-50 transition-colors duration-300 ${
                scrolled
                    ? "bg-[#060A10]/90 backdrop-blur border-b border-[#1C2734]"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            <Container className="flex h-16 items-center justify-between">

                {/* Logo */}
                <Link
                    to={user ? "/dashboard" : "/"}
                    onClick={closeMenu}
                    className="flex items-center gap-2 font-mono text-[15px] font-bold text-[#EDF2F7]"
                >
                    <span className="flex h-8 w-8 items-center justify-center rounded-md border border-[#2A3341] bg-[#0C1420] text-[#4AFFC4]">
                        <Terminal size={16} strokeWidth={2.5} />
                    </span>

                    <span>
                        cp<span className="text-[#4AFFC4]">/</span>dsa
                        <span className="text-[#556275]">_club</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-1 lg:flex">

                    {!loading && user ? (
                        <>
                            {/* Authenticated Links */}
                            {AUTH_NAV_LINKS.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="rounded px-3 py-2 font-mono text-[13px] text-[#AEB9C7] transition-colors hover:text-[#4AFFC4]"
                                >
                                    {link.label}
                                </Link>
                            ))}

                            {/* Public Links Except Home */}
                            {PUBLIC_NAV_LINKS
                                .filter((link) => link.path !== "/")
                                .map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className="rounded px-3 py-2 font-mono text-[13px] text-[#AEB9C7] transition-colors hover:text-[#4AFFC4]"
                                    >
                                        {link.label}
                                    </Link>
                                ))}

                            {/* Logout */}
                            <button
                                onClick={handleLogout}
                                disabled={loggingOut}
                                className="
                                     ml-2
        rounded-md
        border border-red-500/40
        bg-red-500/10
        px-4 py-2
        font-mono text-xs
        text-red-400
        transition
        hover:border-red-500
        hover:bg-red-500
        hover:text-white
        disabled:cursor-not-allowed
        disabled:opacity-50
                                "
                            >
                                {loggingOut ? "Logging out..." : "Logout"}
                            </button>
                        </>
                    ) : (
                        <>
                            {/* Public Links */}
                            {PUBLIC_NAV_LINKS.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="rounded px-3 py-2 font-mono text-[13px] text-[#AEB9C7] transition-colors hover:text-[#4AFFC4]"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </>
                    )}
                </nav>

                {/* Desktop Auth */}
                {!loading && !user && (
                    <div className="hidden items-center gap-2 lg:flex">

                        <Link
                            to="/login"
                            className="
                                rounded-md
                                border border-[#1C2734]
                                px-4 py-2
                                font-mono text-xs
                                text-[#AEB9C7]
                                transition
                                hover:border-[#4AFFC4]/50
                                hover:text-[#4AFFC4]
                            "
                        >
                            Login
                        </Link>

                        <Link
                            to="/register"
                            className="
                                rounded-md
                                border border-[#4AFFC4]
                                bg-[#4AFFC4]
                                px-4 py-2
                                font-mono text-xs font-semibold
                                text-[#060A10]
                                transition
                                hover:bg-transparent
                                hover:text-[#4AFFC4]
                            "
                        >
                            Register
                        </Link>

                    </div>
                )}

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-[#EDF2F7]"
                    onClick={() => setOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>

            </Container>

            {/* Mobile Menu */}
            {open && (
                <div className="border-t border-[#1C2734] bg-[#060A10] lg:hidden">

                    <Container className="flex flex-col py-3">

                        {!loading && user ? (
                            <>
                                {/* Authenticated Links */}
                                {AUTH_NAV_LINKS.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={closeMenu}
                                        className="
                                            rounded
                                            px-2 py-3
                                            font-mono text-[14px]
                                            text-[#AEB9C7]
                                            transition-colors
                                            hover:text-[#4AFFC4]
                                        "
                                    >
                                        {link.label}
                                    </Link>
                                ))}

                                {/* Public Links Except Home */}
                                {PUBLIC_NAV_LINKS
                                    .filter((link) => link.path !== "/")
                                    .map((link) => (
                                        <Link
                                            key={link.path}
                                            to={link.path}
                                            onClick={closeMenu}
                                            className="
                                                rounded
                                                px-2 py-3
                                                font-mono text-[14px]
                                                text-[#AEB9C7]
                                                transition-colors
                                                hover:text-[#4AFFC4]
                                            "
                                        >
                                            {link.label}
                                        </Link>
                                    ))}

                                {/* Mobile Logout */}
                                <button
                                    onClick={handleLogout}
                                    disabled={loggingOut}
                                    className="
                                         mt-2
        rounded-md
        border border-red-500/40
        bg-red-500/10
        px-2 py-3
        text-left
        font-mono text-[14px]
        text-red-400
        transition
        hover:border-red-500
        hover:bg-red-500
        hover:text-white
        disabled:cursor-not-allowed
        disabled:opacity-50
                                    "
                                >
                                    {loggingOut
                                        ? "Logging out..."
                                        : "Logout"}
                                </button>
                            </>
                        ) : (
                            <>
                                {/* Public Links */}
                                {PUBLIC_NAV_LINKS.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={closeMenu}
                                        className="
                                            rounded
                                            px-2 py-3
                                            text-left
                                            font-mono text-[14px]
                                            text-[#AEB9C7]
                                            transition-colors
                                            hover:text-[#4AFFC4]
                                        "
                                    >
                                        {link.label}
                                    </Link>
                                ))}

                                {/* Mobile Auth */}
                                <div className="mt-2 grid grid-cols-2 gap-2 border-t border-[#1C2734] pt-4">

                                    <Link
                                        to="/login"
                                        onClick={closeMenu}
                                        className="
                                            flex items-center justify-center
                                            rounded-md
                                            border border-[#1C2734]
                                            px-4 py-3
                                            font-mono text-xs
                                            text-[#AEB9C7]
                                            transition
                                            hover:border-[#4AFFC4]/50
                                            hover:text-[#4AFFC4]
                                        "
                                    >
                                        Login
                                    </Link>

                                    <Link
                                        to="/register"
                                        onClick={closeMenu}
                                        className="
                                            flex items-center justify-center
                                            rounded-md
                                            border border-[#4AFFC4]
                                            bg-[#4AFFC4]
                                            px-4 py-3
                                            font-mono text-xs font-semibold
                                            text-[#060A10]
                                            transition
                                            hover:bg-transparent
                                            hover:text-[#4AFFC4]
                                        "
                                    >
                                        Register
                                    </Link>

                                </div>
                            </>
                        )}

                    </Container>
                </div>
            )}
        </header>
    );
};

export default Navbar;