import React from "react";


import LeaderboardSection from "../components/Leaderboard.jsx";
import Footer from "../components/Footer.jsx";

const Leaderboard = () => {
    return (
        <div className="min-h-screen bg-[#060A10] font-body text-[#EDF2F7] antialiased">

            <main>
                <LeaderboardSection />
            </main>

            <Footer />
        </div>
    );
};

export default Leaderboard;