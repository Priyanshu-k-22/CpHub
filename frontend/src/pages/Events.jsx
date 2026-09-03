import React from "react";

import Navbar from "../components/Navbar.jsx";
import EventsSection from "../components/Events.jsx";
import Footer from "../components/Footer.jsx";

const Events = () => {
    return (
        <div className="min-h-screen bg-[#060A10] font-body text-[#EDF2F7] antialiased">
            <Navbar />

            <main>
                <EventsSection />
            </main>

            <Footer />
        </div>
    );
};

export default Events;