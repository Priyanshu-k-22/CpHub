import React from "react";

import Navbar from "../components/Navbar.jsx";
import AboutSection from "../components/About.jsx";
import Footer from "../components/Footer.jsx";
import CodeBackground from "../components/background/CodeBackground.jsx";

const About = () => {
    return (
        <div className="min-h-screen bg-[#060A10] font-body text-[#EDF2F7] antialiased">

            <CodeBackground variant="about"/>
            <div className="relative z-10">
                <Navbar />

                <main>
                    <AboutSection />
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default About;