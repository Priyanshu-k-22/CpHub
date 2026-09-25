import React from "react";


const CPGettingStarted = () => {

    const steps = [
        "Programming Fundamentals",
        "Basic Data Structures",
        "Basic Algorithms",
        "Easy Problems",
        "Regular Practice",
        "Contests",
    ];


    return (
        <section>

            <SectionHeading
                eyebrow="03 / getting started"
                title="Getting Started"
                description="You do not need to know advanced algorithms before starting CP. Build the foundation gradually and start solving problems early."
            />


            <div className="mt-8 space-y-3">

                {steps.map(
                    (step, index) => (

                        <div
                            key={step}
                            className="flex items-center gap-5 rounded-xl border border-[#1C2734] bg-[#0A1018] p-5"
                        >

                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#111923] font-mono text-xs text-[#4AFFC4]">
                                {String(
                                    index + 1
                                ).padStart(
                                    2,
                                    "0"
                                )}
                            </span>

                            <span className="text-sm font-medium text-white">
                                {step}
                            </span>

                        </div>

                    )
                )}

            </div>


            <div className="mt-8 rounded-xl border border-[#4AFFC4]/20 bg-[#4AFFC4]/5 p-6">

                <h3 className="font-semibold text-white">
                    Minimum foundation
                </h3>

                <div className="mt-4 grid gap-2 sm:grid-cols-2">

                    {[
                        "Variables",
                        "Loops",
                        "Functions",
                        "Arrays",
                        "Strings",
                        "Basic complexity",
                    ].map((item) => (

                        <div
                            key={item}
                            className="text-sm text-[#AEB9C7]"
                        >
                            ✓ {item}
                        </div>

                    ))}

                </div>

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


export default CPGettingStarted;