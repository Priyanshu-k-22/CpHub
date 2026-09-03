import React from "react";

import Navbar from "../components/Navbar.jsx";
import AchievementsSection from "../components/Achievements.jsx";
import Footer from "../components/Footer.jsx";

const Achievements = () => {
    return (
        <div className="min-h-screen bg-[#060A10] font-body text-[#EDF2F7] antialiased">
            <Navbar />

            <main>
                <AchievementsSection />
            </main>

            <Footer />
        </div>
    );
};

export default Achievements;