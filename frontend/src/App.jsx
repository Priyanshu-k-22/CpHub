import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ClubIntro from "./components/ClubIntro.jsx";
import Vision from "./components/Vision.jsx";
import Mission from "./components/Mission.jsx";
import Stats from "./components/Stats.jsx";
import Events from "./components/Events.jsx";
import Contests from "./components/Contests.jsx";
import Leaderboard from "./components/Leaderboard.jsx";
import OurTeam from "./components/OurTeam.jsx";
import Achievements from "./components/Achievements.jsx";
import Gallery from "./components/Gallery.jsx";
import About from "./components/About.jsx";
import Join from "./components/Join.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-[#060A10] font-body text-[#EDF2F7] antialiased">
      <Navbar />
      <main>
        <Hero />
        <ClubIntro />
        <Vision />
        <Mission />
        <Stats />
        <Events />
        <Contests />
        <Leaderboard />
        <OurTeam />
        <Achievements />
        <Gallery />
        <About />
        <Join />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
