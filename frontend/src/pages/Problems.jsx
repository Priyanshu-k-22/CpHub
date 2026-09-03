import React from "react";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Problems = () => {
    return (
        <div className="min-h-screen bg-[#060A10] font-body text-[#EDF2F7] antialiased">
            <Navbar />

            <main className="mx-auto max-w-7xl px-5 py-20">
                <p className="font-mono text-sm text-[#556275]">
                    cp/dsa_club
                </p>

                <h1 className="mt-3 font-display text-4xl font-bold">
                    Problems
                </h1>

                <p className="mt-4 text-[#AEB9C7]">
                    Practice competitive programming and DSA problems.
                </p>
            </main>

            <Footer />
        </div>
    );
};

export default Problems;