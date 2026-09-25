import React from "react";


const CPSidebar = ({
    activeSection,
    setActiveSection
}) => {

    const sections = [

        {
            group: "Understand CP",
            items: [
                {
                    id: "why",
                    label: "Why CP?"
                },
                {
                    id: "career",
                    label: "CP & Career"
                },
                {
                    id: "interviews",
                    label: "CP & Interviews"
                },
                {
                    id: "skills",
                    label: "Skills You Build"
                }
            ]
        },

        {
            group: "Start Learning",
            items: [
                {
                    id: "start",
                    label: "Start Here",
                    highlight: true
                },
                {
                    id: "learn",
                    label: "Learn Your Language"
                },
                {
                    id: "practice",
                    label: "Basic Practice"
                },
                {
                    id: "math",
                    label: "Basic Mathematics"
                }
            ]
        },

        {
            group: "Start CP",
            items: [
                {
                    id: "codeforces",
                    label: "Start Codeforces"
                },
                {
                    id: "contests",
                    label: "Contests"
                },
                {
                    id: "rating",
                    label: "Rating & Rankings"
                }
            ]
        },

        {
            group: "Explore",
            items: [
                {
                    id: "stories",
                    label: "Real Stories"
                },
                {
                    id: "resources",
                    label: "Resources"
                }
            ]
        }

    ];


    return (
        <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-[270px] shrink-0 overflow-y-auto border-r border-[#1C2734] py-8 lg:block">

            {/* Header */}

            <div className="px-6">

                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#4AFFC4]">
                    competitive programming
                </p>

                <h2 className="mt-2 text-xl font-bold text-white">
                    CP Guide
                </h2>

                <p className="mt-2 text-xs leading-5 text-[#556275]">
                    Start from the fundamentals and
                    gradually build your CP journey.
                </p>

            </div>


            {/* Navigation */}

            <nav className="mt-8 px-3">

                {sections.map((group) => (

                    <div
                        key={group.group}
                        className="mb-7"
                    >

                        <p className="mb-2 px-3 font-mono text-[9px] uppercase tracking-[0.2em] text-[#465365]">
                            {group.group}
                        </p>


                        <div className="space-y-1">

                            {group.items.map((item) => {

                                const active =
                                    activeSection === item.id;


                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() =>
                                            setActiveSection(
                                                item.id
                                            )
                                        }
                                        className={`
                                            group flex w-full
                                            items-center gap-3
                                            rounded-lg
                                            px-3 py-2.5
                                            text-left text-sm
                                            transition-all
                                            duration-200

                                            ${
                                                active
                                                    ? "bg-[#4AFFC4]/10 text-[#4AFFC4]"
                                                    : "text-[#AEB9C7] hover:bg-[#111923] hover:text-white"
                                            }
                                        `}
                                    >

                                        <span
                                            className={`
                                                h-1.5 w-1.5
                                                shrink-0 rounded-full
                                                ${
                                                    active
                                                        ? "bg-[#4AFFC4]"
                                                        : "bg-[#273443] group-hover:bg-[#4AFFC4]/60"
                                                }
                                            `}
                                        />

                                        <span>
                                            {item.label}
                                        </span>

                                    </button>
                                );

                            })}

                        </div>

                    </div>

                ))}

            </nav>


            {/* Philosophy */}

            <div className="border-t border-[#1C2734] px-6 pt-6">

                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#556275]">
                    cp philosophy
                </p>

                <p className="mt-2 text-xs leading-5 text-[#556275]">
                    Learn → Practice → Contest →
                    Upsolve → Repeat
                </p>

            </div>

        </aside>
    );
};


export default CPSidebar;