import React from "react";

import Navbar from "../components/Navbar.jsx";
import TeamSection from "../components/OurTeam.jsx";
import Footer from "../components/Footer.jsx";

const Team = () => {
    return (
        <div className="min-h-screen bg-[#060A10] font-body text-[#EDF2F7] antialiased">
            <Navbar />

            <main>
                <TeamSection />
            </main>

            <Footer />
        </div>
    );
};

export default Team;