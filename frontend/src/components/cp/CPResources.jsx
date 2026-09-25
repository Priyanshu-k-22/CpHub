import React from "react";


const CPResources = () => {

    const resources = [
        {
            title: "C++ & STL",
            description:
                "Programming language and standard library concepts useful for CP.",
        },
        {
            title: "DSA",
            description:
                "Data structures and algorithm fundamentals.",
        },
        {
            title: "Problem Sets",
            description:
                "Curated problems for consistent practice.",
        },
        {
            title: "Daily Problems",
            description:
                "Solve a problem every day and build consistency.",
        },
        {
            title: "Contest Calendar",
            description:
                "Find upcoming CP and DSA contests.",
        },
        {
            title: "Problem History",
            description:
                "Review previous problems and solutions.",
        },
    ];


    return (
        <section>

            <SectionHeading
                eyebrow="13 / resources"
                title="Resources"
                description="Everything you need to continue your CP journey inside CpHub."
            />


            <div className="mt-8 grid gap-4 md:grid-cols-2">

                {resources.map(
                    (resource) => (

                        <div
                            key={resource.title}
                            className="rounded-xl border border-[#1C2734] bg-[#0A1018] p-6"
                        >

                            <h3 className="font-semibold text-white">
                                {resource.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-[#AEB9C7]">
                                {
                                    resource.description
                                }
                            </p>

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


export default CPResources;