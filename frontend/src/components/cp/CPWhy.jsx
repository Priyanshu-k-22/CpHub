import React from "react";


const CPWhy = () => {

    const benefits = [
        {
            title: "Problem Solving",
            text: "Learn to break unfamiliar problems into smaller parts and reason about possible solutions.",
        },
        {
            title: "Algorithms",
            text: "Develop a stronger understanding of algorithms and when to use them.",
        },
        {
            title: "Efficiency",
            text: "Learn to think about constraints, time complexity and memory usage.",
        },
        {
            title: "Debugging",
            text: "Develop the habit of testing assumptions and finding why a solution fails.",
        },
        {
            title: "Logical Thinking",
            text: "Practice identifying patterns, observations and relationships in problems.",
        },
        {
            title: "Technical Interviews",
            text: "The skills developed through CP overlap with algorithmic problem solving used in many technical interviews.",
        },
    ];


    return (
        <section>

            <SectionHeading
                eyebrow="02 / why cp"
                title="Why Competitive Programming?"
                description="CP is more than participating in contests. The repeated process of understanding, solving, testing and optimizing problems develops algorithmic problem-solving skills."
            />


            <div className="mt-8 grid gap-4 md:grid-cols-2">

                {benefits.map(
                    (benefit, index) => (

                        <div
                            key={
                                benefit.title
                            }
                            className="rounded-xl border border-[#1C2734] bg-[#0A1018] p-6 transition hover:border-[#4AFFC4]/30"
                        >

                            <div className="flex items-start gap-4">

                                <span className="font-mono text-xs text-[#4AFFC4]">
                                    0{index + 1}
                                </span>

                                <div>

                                    <h3 className="font-semibold text-white">
                                        {
                                            benefit.title
                                        }
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-[#AEB9C7]">
                                        {
                                            benefit.text
                                        }
                                    </p>

                                </div>

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

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
            {title}
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-[#AEB9C7]">
            {description}
        </p>

    </div>
);


export default CPWhy;