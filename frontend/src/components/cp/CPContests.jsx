import React from "react";
import { Link } from "react-router-dom";


const CPContests = () => {

    return (
        <section>

            <SectionHeading
                eyebrow="09 / contests"
                title="Contests"
                description="Contests give you a chance to solve unfamiliar problems under time constraints and track your progress."
            />


            <div className="mt-8 rounded-xl border border-[#1C2734] bg-[#0A1018] p-7">

                <h3 className="text-lg font-semibold text-white">
                    Contest cycle
                </h3>

                <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs">

                    {[
                        "Practice",
                        "Contest",
                        "Upsolve",
                        "Learn",
                        "Repeat",
                    ].map(
                        (item, index) => (

                            <React.Fragment
                                key={item}
                            >

                                <span className="rounded-lg bg-[#111923] px-4 py-3 text-[#AEB9C7]">
                                    {item}
                                </span>

                                {index <
                                    4 && (
                                    <span className="text-[#4AFFC4]">
                                        →
                                    </span>
                                )}

                            </React.Fragment>

                        )
                    )}

                </div>

            </div>


            <Link
                to="/contests"
                className="mt-5 inline-flex rounded-lg border border-[#4AFFC4]/30 bg-[#4AFFC4]/5 px-4 py-2.5 font-mono text-sm text-[#4AFFC4] transition hover:border-[#4AFFC4] hover:bg-[#4AFFC4]/10"
            >
                Open Contest Calendar →
            </Link>

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


export default CPContests;