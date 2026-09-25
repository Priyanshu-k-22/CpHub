import React from "react";


const CPProblemSolving = () => {

    const steps = [
        "Read the problem carefully",
        "Understand input and output",
        "Check the constraints",
        "Think about brute force",
        "Find observations and patterns",
        "Choose an algorithm",
        "Analyze complexity",
        "Implement the solution",
        "Test edge cases",
        "Debug and improve",
    ];


    return (
        <section>

            <SectionHeading
                eyebrow="07 / problem solving"
                title="How to Approach a Problem"
                description="A repeatable problem-solving process is more valuable than memorizing solutions."
            />


            <div className="mt-8 grid gap-3">

                {steps.map(
                    (step, index) => (

                        <div
                            key={step}
                            className="flex items-center gap-4 rounded-xl border border-[#1C2734] bg-[#0A1018] p-4"
                        >

                            <span className="font-mono text-xs text-[#4AFFC4]">
                                {String(
                                    index + 1
                                ).padStart(
                                    2,
                                    "0"
                                )}
                            </span>

                            <span className="text-sm text-[#AEB9C7]">
                                {step}
                            </span>

                        </div>

                    )
                )}

            </div>


            <div className="mt-8 rounded-xl border border-[#1C2734] bg-[#0A1018] p-6">

                <h3 className="text-lg font-semibold text-white">
                    When you cannot solve it
                </h3>

                <p className="mt-3 leading-7 text-[#AEB9C7]">
                    Give yourself time to explore the
                    problem. If you eventually use an
                    editorial or solution, focus on the
                    observation and idea that you missed.
                </p>

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


export default CPProblemSolving;