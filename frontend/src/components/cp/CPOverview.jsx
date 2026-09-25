import React from "react";


const CPOverview = () => {

    const cards = [
        {
            title: "Learn",
            text: "Build your foundation in programming, data structures and algorithms.",
        },
        {
            title: "Practice",
            text: "Solve problems regularly and learn from problems you cannot solve.",
        },
        {
            title: "Compete",
            text: "Participate in contests to practice solving problems under time constraints.",
        },
    ];


    return (
        <section>

            <SectionHeading
                eyebrow="01 / overview"
                title="What is Competitive Programming?"
                description="Competitive programming is a way to practice algorithmic problem solving through programming problems and contests."
            />


            <div className="mt-8 grid gap-4 md:grid-cols-3">

                {cards.map((card) => (

                    <div
                        key={card.title}
                        className="rounded-xl border border-[#1C2734] bg-[#0A1018] p-6"
                    >

                        <h3 className="text-lg font-semibold text-white">
                            {card.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-[#AEB9C7]">
                            {card.text}
                        </p>

                    </div>

                ))}

            </div>


            <div className="mt-8 rounded-xl border border-[#1C2734] bg-[#0A1018] p-6">

                <h3 className="text-lg font-semibold text-white">
                    What you will build
                </h3>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">

                    {[
                        "Problem solving",
                        "Data structures",
                        "Algorithms",
                        "Optimization",
                        "Logical thinking",
                        "Contest experience",
                    ].map((item) => (

                        <div
                            key={item}
                            className="rounded-lg bg-[#111923] px-4 py-3 text-sm text-[#AEB9C7]"
                        >
                            {item}
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
}) => {

    return (
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
};


export default CPOverview;