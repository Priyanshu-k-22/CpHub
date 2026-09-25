import React from "react";


const CPSidebar = ({
    activeSection,
    setActiveSection
}) => {

    const sections = [
        {
            id: "overview",
            label: "Overview",
        },
        {
            id: "why-cp",
            label: "Why CP?",
        },
        {
            id: "getting-started",
            label: "Getting Started",
        },
        {
            id: "language",
            label: "Language",
        },
        {
            id: "dsa",
            label: "DSA Foundation",
        },
        {
            id: "algorithms",
            label: "Algorithms",
        },
        {
            id: "problem-solving",
            label: "Problem Solving",
        },
        {
            id: "practice",
            label: "Practice Platforms",
        },
        {
            id: "contests",
            label: "Contests",
        },
        {
            id: "rating",
            label: "Rating & Ranks",
        },
        {
            id: "upsolving",
            label: "Upsolving",
        },
        {
            id: "roadmap",
            label: "Roadmap",
        },
        {
            id: "resources",
            label: "Resources",
        },
    ];


    return (
        <aside className="lg:sticky lg:top-24 lg:self-start">

            <div className="overflow-hidden rounded-2xl border border-[#1C2734] bg-[#0A1018]">

                {/* Header */}

                <div className="border-b border-[#1C2734] px-5 py-5">

                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#556275]">
                        competitive programming
                    </p>

                    <h2 className="mt-2 text-lg font-semibold text-white">
                        CP Guide
                    </h2>

                </div>


                {/* Navigation */}

                <nav className="p-3">

                    <div className="space-y-1">

                        {sections.map(
                            (section) => {

                                const active =
                                    activeSection ===
                                    section.id;


                                return (
                                    <button
                                        key={
                                            section.id
                                        }
                                        type="button"
                                        onClick={() =>
                                            setActiveSection(
                                                section.id
                                            )
                                        }
                                        className={`
                                            flex
                                            w-full
                                            items-center
                                            rounded-lg
                                            px-3
                                            py-2.5
                                            text-left
                                            text-sm
                                            transition-all
                                            duration-200

                                            ${
                                                active
                                                    ? "bg-[#4AFFC4]/10 text-[#4AFFC4]"
                                                    : "text-[#AEB9C7] hover:bg-[#111923] hover:text-white"
                                            }
                                        `}
                                    >

                                        {active && (
                                            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#4AFFC4]" />
                                        )}

                                        <span>
                                            {
                                                section.label
                                            }
                                        </span>

                                    </button>
                                );
                            }
                        )}

                    </div>

                </nav>

            </div>

        </aside>
    );
};


export default CPSidebar;