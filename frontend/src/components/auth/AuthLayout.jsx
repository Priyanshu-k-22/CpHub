import React from "react";
import { Link } from "react-router-dom";
import { Terminal } from "lucide-react";
import Container from "../../ui/Container.jsx";

const AuthLayout = ({ children, mode }) => {
  const isLogin = mode === "login";

  return (
    <div className="min-h-screen bg-[#060A10] text-[#EDF2F7]">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 grid-bg opacity-60" />

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#4AFFC4]/[0.025] blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-[#1C2734] bg-[#060A10]/80 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <Link
            to="/"
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

          <div className="font-mono text-[11px] text-[#556275]">
            {isLogin ? "AUTH / LOGIN" : "AUTH / REGISTER"}
          </div>
        </Container>
      </header>

      {/* Main */}
      <main className="relative z-10 flex min-h-[calc(100vh-64px)] items-center py-12 md:py-16">
        <Container>
          <div className="mx-auto w-full max-w-[460px]">
            {/* Terminal heading */}
            <div className="mb-7">
              <div className="mb-3 flex items-center gap-2 font-mono text-[11px] text-[#4AFFC4]">
                <span>~/cphub</span>
                <span className="text-[#556275]">→</span>
                <span className="text-[#AEB9C7]">
                  {isLogin ? "login" : "register"}
                </span>
                <span className="cursor-blink text-[#4AFFC4]">_</span>
              </div>

              <h1 className="font-body text-3xl font-bold tracking-tight text-[#EDF2F7] md:text-4xl">
                {isLogin ? "Welcome back." : "Join CpHub."}
              </h1>

              <p className="mt-3 max-w-md text-sm leading-6 text-[#7F8B9C]">
                {isLogin
                  ? "Sign in to continue your competitive programming journey."
                  : "Create your account and start solving, competing and improving."}
              </p>
            </div>

            {/* Auth card */}
            <div className="scanline relative overflow-hidden rounded-lg border border-[#1C2734] bg-[#080D14]">
              {/* Terminal bar */}
              <div className="flex h-10 items-center border-b border-[#1C2734] px-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#24303F]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#24303F]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#4AFFC4]/50" />
                </div>

                <span className="ml-auto font-mono text-[10px] text-[#556275]">
                  cphub.auth
                </span>
              </div>

              <div className="p-6 md:p-8">{children}</div>
            </div>

            {/* Bottom text */}
            <div className="mt-7 text-center font-mono text-[10px] tracking-wider text-[#3E4A5B]">
              &lt; solve. compete. improve. /&gt;
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default AuthLayout;