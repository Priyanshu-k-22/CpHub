import React from "react";

import ContestsSection from "../components/contests/ContestCalendar/ContestCalendar.jsx";
import Footer from "../components/Footer.jsx";

const Contests = () => {
    return (
        <div className="min-h-screen bg-[#060A10] font-body text-[#EDF2F7] antialiased">

            <main>
                <ContestsSection />
            </main>

            <Footer />
        </div>
    );
};

export default Contests;