import React, { useEffect, useState } from "react";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";
import Container from "../ui/Container.jsx";
import { PrimaryButton } from "../ui/Buttons.jsx";

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
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#060A10]/90 backdrop-blur border-b border-[#1C2734]" : "bg-transparent border-b border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <button onClick={() => go("home")} className="flex items-center gap-2 font-mono text-[15px] font-bold text-[#EDF2F7]">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-[#2A3341] bg-[#0C1420] text-[#4AFFC4]">
            <Terminal size={16} strokeWidth={2.5} />
          </span>
          <span>
            cp<span className="text-[#4AFFC4]">/</span>dsa<span className="text-[#556275]">_club</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.slice(0, -1).map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="rounded px-3 py-2 font-mono text-[13px] text-[#AEB9C7] transition-colors hover:text-[#4AFFC4]"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <PrimaryButton onClick={() => go("join")}>
            Join the Club <ArrowUpRight size={14} />
          </PrimaryButton>
        </div>

        <button className="lg:hidden text-[#EDF2F7]" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-[#1C2734] bg-[#060A10] lg:hidden">
          <Container className="flex flex-col py-3">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="rounded px-2 py-3 text-left font-mono text-[14px] text-[#AEB9C7] hover:text-[#4AFFC4]"
              >
                {l.label}
              </button>
            ))}
            <PrimaryButton className="mt-2" onClick={() => go("join")}>
              Join the Club <ArrowUpRight size={14} />
            </PrimaryButton>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;
