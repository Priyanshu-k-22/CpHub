import React from "react";


const CPPractice = () => {

    const platforms = [
        {
            name: "Codeforces",
            description:
                "Regular contests and a large collection of algorithmic problems.",
            url: "https://codeforces.com/",
        },
        {
            name: "AtCoder",
            description:
                "Algorithmic contests with a strong focus on problem solving.",
            url: "https://atcoder.jp/",
        },
        {
            name: "CodeChef",
            description:
                "Practice problems and regular competitive programming contests.",
            url: "https://www.codechef.com/",
        },
    ];


    return (
        <section>

            <SectionHeading
                eyebrow="08 / practice"
                title="Where to Practice"
                description="Choose a few platforms and practice consistently instead of jumping between too many websites."
            />


            <div className="mt-8 space-y-4">

                {platforms.map(
                    (platform) => (

                        <div
                            key={platform.name}
                            className="rounded-xl border border-[#1C2734] bg-[#0A1018] p-6"
                        >

                            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

                                <div>

                                    <h3 className="text-lg font-semibold text-white">
                                        {
                                            platform.name
                                        }
                                    </h3>

                                    <p className="mt-2 max-w-xl text-sm leading-6 text-[#AEB9C7]">
                                        {
                                            platform.description
                                        }
                                    </p>

                                </div>


                                <a
                                    href={
                                        platform.url
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="shrink-0 rounded-lg border border-[#1C2734] px-4 py-2 font-mono text-xs text-[#4AFFC4] transition hover:border-[#4AFFC4]/40 hover:bg-[#4AFFC4]/5"
                                >
                                    visit →
                                </a>

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


export default CPPractice;