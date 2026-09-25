import React from "react";


const CPDSA = () => {

    const topics = [
        "Arrays",
        "Strings",
        "Sorting",
        "Binary Search",
        "Prefix Sum",
        "Two Pointers",
        "Sliding Window",
        "Stack",
        "Queue",
        "Linked List",
        "Trees",
        "Graphs",
        "Heaps",
        "Hashing",
    ];


    return (
        <section>

            <SectionHeading
                eyebrow="05 / dsa foundation"
                title="DSA Foundation"
                description="Data structures and algorithms form the foundation of competitive programming. Learn them progressively instead of trying to learn everything at once."
            />


            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                {topics.map(
                    (topic, index) => (

                        <div
                            key={topic}
                            className="rounded-xl border border-[#1C2734] bg-[#0A1018] p-5"
                        >

                            <span className="font-mono text-[10px] text-[#4AFFC4]">
                                {String(
                                    index + 1
                                ).padStart(
                                    2,
                                    "0"
                                )}
                            </span>

                            <h3 className="mt-3 font-medium text-white">
                                {topic}
                            </h3>

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


export default CPDSA;