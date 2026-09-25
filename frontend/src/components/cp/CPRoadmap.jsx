import React from "react";


const CPRoadmap = () => {

    const levels = [
        "Programming Fundamentals",
        "Basic DSA",
        "Problem Solving",
        "Core Algorithms",
        "Regular Contests",
        "Intermediate CP",
        "Advanced Algorithms",
        "Advanced CP",
    ];


    return (
        <section>

            <SectionHeading
                eyebrow="12 / roadmap"
                title="CP Roadmap"
                description="A progressive path from programming fundamentals to advanced competitive programming."
            />


            <div className="mt-8 space-y-3">

                {levels.map(
                    (level, index) => (

                        <div
                            key={level}
                            className="flex items-center gap-5 rounded-xl border border-[#1C2734] bg-[#0A1018] p-5"
                        >

                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#111923] font-mono text-xs text-[#4AFFC4]">
                                {String(
                                    index + 1
                                ).padStart(
                                    2,
                                    "0"
                                )}
                            </div>

                            <div>

                                <p className="font-medium text-white">
                                    {level}
                                </p>

                                <p className="mt-1 text-xs text-[#556275]">
                                    Learn → Practice → Apply
                                </p>

                            </div>

                        </div>

                    )
                )}

            </div>

        </section>
    );
};


const SectionHeading = ({
    eyebrow,
    title,
    description
}) => (

    <div>

        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#556275]">
            {eyebrow}
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white">
            {title}
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-[#AEB9C7]">
            {description}
        </p>

    </div>
);


export default CPRoadmap;