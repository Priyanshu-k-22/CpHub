import React from "react";

import Navbar from "../components/Navbar.jsx";
import ContestsSection from "../components/Contests.jsx";
import Footer from "../components/Footer.jsx";

const Contests = () => {
    return (
        <div className="min-h-screen bg-[#060A10] font-body text-[#EDF2F7] antialiased">
            <Navbar />

            <main>
                <ContestsSection />
            </main>

            <Footer />
        </div>
    );
};

export default Contests;