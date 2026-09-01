import React, { useEffect, useState } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../ui/Container.jsx";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "events", label: "Events" },
  { id: "contests", label: "Contests" },
  { id: "leaderboard", label: "Leaderboard" },
  { id: "team", label: "Our Team" },
  { id: "achievements", label: "Achievements" },
  { id: "gallery", label: "Gallery" },
  { id: "join", label: "Join Us" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const go = (id) => {
    setOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
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
        <button
          onClick={() => go("home")}
          className="flex items-center gap-2 font-mono text-[15px] font-bold text-[#EDF2F7]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-[#2A3341] bg-[#0C1420] text-[#4AFFC4]">
            <Terminal size={16} strokeWidth={2.5} />
          </span>

          <span>
            cp<span className="text-[#4AFFC4]">/</span>dsa
            <span className="text-[#556275]">_club</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.slice(0, -1).map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="rounded px-3 py-2 font-mono text-[13px] text-[#AEB9C7] transition-colors hover:text-[#4AFFC4]"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop Auth */}
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
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
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
              </button>
            ))}

            {/* Mobile Auth */}
            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-[#1C2734] pt-4">
              <Link
                to="/login"
                onClick={() => setOpen(false)}
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
                onClick={() => setOpen(false)}
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
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;