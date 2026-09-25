import React from "react";


const CPUpsolving = () => {

    const steps = [
        "Identify problems you could not solve",
        "Try them again after the contest",
        "Read the editorial when necessary",
        "Understand the key observation",
        "Implement the solution yourself",
        "Record what you learned",
    ];


    return (
        <section>

            <SectionHeading
                eyebrow="11 / upsolving"
                title="Upsolving"
                description="The contest is not the end of the learning process. Reviewing unsolved problems is where a large part of the learning happens."
            />


            <div className="mt-8 space-y-3">

                {steps.map(
                    (step, index) => (

                        <div
                            key={step}
                            className="flex gap-4 rounded-xl border border-[#1C2734] bg-[#0A1018] p-5"
                        >

                            <span className="font-mono text-xs text-[#4AFFC4]">
                                {index + 1}
                            </span>

                            <span className="text-sm text-[#AEB9C7]">
                                {step}
                            </span>

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


export default CPUpsolving;