import React from "react";


const CPAlgorithms = () => {

    const groups = [
        {
            title: "Searching",
            topics: [
                "Binary Search",
                "Search on Answer",
            ],
        },
        {
            title: "Sorting",
            topics: [
                "Merge Sort",
                "Quick Sort",
                "Counting Sort",
            ],
        },
        {
            title: "Greedy",
            topics: [
                "Greedy Strategy",
                "Interval Problems",
                "Optimization",
            ],
        },
        {
            title: "Dynamic Programming",
            topics: [
                "1D DP",
                "2D DP",
                "Knapsack",
                "Subsequence DP",
            ],
        },
        {
            title: "Graph Algorithms",
            topics: [
                "BFS",
                "DFS",
                "Shortest Path",
                "DSU",
            ],
        },
        {
            title: "Advanced",
            topics: [
                "Segment Tree",
                "Fenwick Tree",
                "Advanced DP",
            ],
        },
    ];


    return (
        <section>

            <SectionHeading
                eyebrow="06 / algorithms"
                title="Algorithms"
                description="Build your algorithmic toolkit gradually. Focus on understanding when and why an algorithm works before worrying about implementation speed."
            />


            <div className="mt-8 grid gap-4 md:grid-cols-2">

                {groups.map(
                    (group) => (

                        <div
                            key={group.title}
                            className="rounded-xl border border-[#1C2734] bg-[#0A1018] p-6"
                        >

                            <h3 className="font-semibold text-white">
                                {group.title}
                            </h3>


                            <div className="mt-4 space-y-2">

                                {group.topics.map(
                                    (topic) => (

                                        <div
                                            key={topic}
                                            className="rounded-lg bg-[#111923] px-3 py-2 text-sm text-[#AEB9C7]"
                                        >
                                            {topic}
                                        </div>

                                    )
                                )}

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


export default CPAlgorithms;