import React from "react";


const CPLanguage = () => {

    return (
        <section>

            <SectionHeading
                eyebrow="04 / language"
                title="Choose Your Language"
                description="You do not need to learn multiple languages for CP. Pick one language and become comfortable solving problems with it."
            />


            <div className="mt-8 rounded-2xl border border-[#4AFFC4]/25 bg-[#0A1018] p-7">

                <div className="flex items-center justify-between">

                    <div>

                        <p className="font-mono text-xs text-[#4AFFC4]">
                            recommended
                        </p>

                        <h3 className="mt-2 text-2xl font-bold text-white">
                            C++
                        </h3>

                    </div>

                    <span className="rounded-lg bg-[#4AFFC4]/10 px-3 py-2 font-mono text-xs text-[#4AFFC4]">
                        CP
                    </span>

                </div>


                <p className="mt-5 leading-7 text-[#AEB9C7]">
                    C++ is widely used in competitive
                    programming and provides a strong
                    standard library for implementing
                    algorithms efficiently.
                </p>


                <div className="mt-6 grid gap-3 sm:grid-cols-2">

                    {[
                        "STL",
                        "vector",
                        "set / map",
                        "priority_queue",
                        "algorithms",
                        "pair / tuple",
                    ].map((item) => (

                        <div
                            key={item}
                            className="rounded-lg bg-[#111923] px-4 py-3 font-mono text-xs text-[#AEB9C7]"
                        >
                            {item}
                        </div>

                    ))}

                </div>

            </div>


            <div className="mt-4 grid gap-4 sm:grid-cols-2">

                {["Python", "Java"].map(
                    (language) => (

                        <div
                            key={language}
                            className="rounded-xl border border-[#1C2734] bg-[#0A1018] p-5"
                        >
                            <p className="font-semibold text-white">
                                {language}
                            </p>

                            <p className="mt-2 text-sm text-[#556275]">
                                Also suitable for competitive programming.
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


export default CPLanguage;