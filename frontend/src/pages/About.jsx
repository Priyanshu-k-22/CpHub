import React from "react";

import Navbar from "../components/Navbar.jsx";
import AboutSection from "../components/About.jsx";
import Footer from "../components/Footer.jsx";

const About = () => {
    return (
        <div className="min-h-screen bg-[#060A10] font-body text-[#EDF2F7] antialiased">
            <Navbar />

            <main>
                <AboutSection />
            </main>

            <Footer />
        </div>
    );
};

export default About;