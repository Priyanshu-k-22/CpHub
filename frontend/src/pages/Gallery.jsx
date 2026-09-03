import React from "react";

import Navbar from "../components/Navbar.jsx";
import GallerySection from "../components/Gallery.jsx";
import Footer from "../components/Footer.jsx";

const Gallery = () => {
    return (
        <div className="min-h-screen bg-[#060A10] font-body text-[#EDF2F7] antialiased">
            <Navbar />

            <main>
                <GallerySection />
            </main>

            <Footer />
        </div>
    );
};

export default Gallery;