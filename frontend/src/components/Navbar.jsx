import React from "react";
import {
    Link,
    NavLink
} from "react-router-dom";


const Navbar = ({
    menuOpen,
    setMenuOpen
}) => {

    const primaryLinks = [
        {
            name: "Dashboard",
            path: "/dashboard",
        },
        {
            name: "Problems",
            path: "/problems",
        },
        {
            name: "Contest",
            path: "/contests",
        },
        {
            name: "CP",
            path: "/cp",
        },
        {
            name: "DSA",
            path: "/dsa",
        },
    ];


    const navLinkClass = ({
        isActive
    }) => `
        relative
        px-2
        py-1
        font-mono
        text-sm
        transition-colors
        duration-200

        ${
            isActive
                ? "text-[#4AFFC4]"
                : "text-[#AEB9C7] hover:text-white"
        }
    `;


    return (
        <header
            className="
                sticky
                top-0
                z-50
                border-b
                border-[#1C2734]
                bg-[#060A10]
            "
        >

            <div
                className="
                    flex
                    h-16
                    items-center
                "
            >

                {/* =================================================
                    LOGO
                ================================================= */}

                <Link
                    to="/"
                    className="
                        ml-5
                        shrink-0
                        font-display
                        text-xl
                        font-bold
                        tracking-tight
                        text-white
                        md:ml-7
                    "
                >
                    Cp
                    <span className="text-[#4AFFC4]">
                        Hub
                    </span>
                </Link>


                {/* =================================================
                    PRIMARY NAVIGATION
                ================================================= */}

                <nav
                    className="
                        ml-8
                        hidden
                        items-center
                        gap-5
                        md:flex
                    "
                >

                    {primaryLinks.map(
                        (link) => (

                            <NavLink
                                key={
                                    link.path
                                }
                                to={
                                    link.path
                                }
                                className={
                                    navLinkClass
                                }
                            >
                                {
                                    link.name
                                }
                            </NavLink>

                        )
                    )}

                </nav>


                {/* =================================================
                    RIGHT SIDE
                ================================================= */}

                <div className="ml-auto">

                    <button
                        type="button"
                        onClick={() =>
                            setMenuOpen(
                                !menuOpen
                            )
                        }
                        aria-label={
                            menuOpen
                                ? "Close menu"
                                : "Open menu"
                        }
                        className="
                            mr-4
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-lg
                            border
                            border-[#1C2734]
                            text-[#AEB9C7]
                            transition
                            duration-200
                            hover:border-[#4AFFC4]/40
                            hover:text-[#4AFFC4]
                            md:mr-6
                        "
                    >

                        {menuOpen ? (

                            <span className="text-2xl leading-none">
                                ×
                            </span>

                        ) : (

                            <span className="text-lg leading-none">
                                ☰
                            </span>

                        )}

                    </button>

                </div>

            </div>

        </header>
    );
};


export default Navbar;