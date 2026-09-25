import React from "react";

import CPSidebar from "./CPSidebar";
import CPHero from "./CPHero";

import CPOverview from "./CPOverview";
import CPWhy from "./CPWhy";
import CPGettingStarted from "./CPGettingStarted";
import CPLanguage from "./CPLanguage";
import CPDSA from "./CPDSA";
import CPAlgorithms from "./CPAlgorithms";
import CPProblemSolving from "./CPProblemSolving";
import CPPractice from "./CPPractice";
import CPContests from "./CPContests";
import CPRating from "./CPRating";
import CPUpsolving from "./CPUpsolving";
import CPRoadmap from "./CPRoadmap";
import CPResources from "./CPResources";


const CPLayout = ({
    activeSection,
    setActiveSection
}) => {

    const renderSection = () => {

        switch (activeSection) {

            case "overview":
                return <CPOverview />;

            case "why-cp":
                return <CPWhy />;

            case "getting-started":
                return <CPGettingStarted />;

            case "language":
                return <CPLanguage />;

            case "dsa":
                return <CPDSA />;

            case "algorithms":
                return <CPAlgorithms />;

            case "problem-solving":
                return <CPProblemSolving />;

            case "practice":
                return <CPPractice />;

            case "contests":
                return <CPContests />;

            case "rating":
                return <CPRating />;

            case "upsolving":
                return <CPUpsolving />;

            case "roadmap":
                return <CPRoadmap />;

            case "resources":
                return <CPResources />;

            default:
                return <CPOverview />;
        }
    };


    return (
        <div className="min-h-screen bg-[#060A10] text-[#EDF2F7]">

            <div className="mx-auto max-w-[1500px] px-5 py-8 lg:px-8">

                {/* =================================================
                    HERO
                ================================================= */}

                <CPHero />


                {/* =================================================
                    CONTENT + SIDEBAR
                ================================================= */}

                <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_270px]">

                    {/* Main Content */}

                    <main className="min-w-0">
                        {renderSection()}
                    </main>


                    {/* Sidebar */}

                    <CPSidebar
                        activeSection={
                            activeSection
                        }
                        setActiveSection={
                            setActiveSection
                        }
                    />

                </div>

            </div>

        </div>
    );
};


export default CPLayout;