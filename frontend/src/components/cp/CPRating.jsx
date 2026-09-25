import React from "react";


const CPRating = () => {

    const platforms = [
        "Codeforces",
        "AtCoder",
        "CodeChef",
        "LeetCode",
    ];


    return (
        <section>

            <SectionHeading
                eyebrow="10 / rating"
                title="Rating & Ranks"
                description="Some competitive programming platforms use ratings and ranks to represent contest performance."
            />


            <div className="mt-8 grid gap-4 sm:grid-cols-2">

                {platforms.map(
                    (platform) => (

                        <div
                            key={platform}
                            className="rounded-xl border border-[#1C2734] bg-[#0A1018] p-6"
                        >

                            <h3 className="font-semibold text-white">
                                {platform}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-[#AEB9C7]">
                                Track your contest
                                performance and
                                improvement over time.
                            </p>

                        </div>

                    )
                )}

            </div>


            <div className="mt-6 rounded-xl border border-[#1C2734] bg-[#0A1018] p-6">

                <p className="text-sm leading-7 text-[#AEB9C7]">
                    Rating is a useful progress signal,
                    but it should not be treated as a
                    complete measure of programming ability.
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


export default CPRating;