import React from "react";


const CPHero = () => {

    return (
        <section className="relative overflow-hidden rounded-2xl border border-[#1C2734] bg-[#0A1018] px-6 py-10 md:px-10 md:py-12">

            {/* Background decoration */}

            <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-[#4AFFC4]/5 blur-3xl" />


            <div className="relative max-w-3xl">

                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#4AFFC4]">
                    cp / competitive_programming
                </p>


                <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
                    Competitive Programming
                </h1>


                <p className="mt-5 max-w-2xl text-base leading-7 text-[#AEB9C7] md:text-lg">
                    Your complete guide to learning,
                    practicing, and improving at
                    competitive programming.
                </p>


                <div className="mt-7 flex flex-wrap gap-3">

                    <span className="rounded-lg border border-[#1C2734] bg-[#111923] px-3 py-2 font-mono text-xs text-[#AEB9C7]">
                        Learn
                    </span>

                    <span className="rounded-lg border border-[#1C2734] bg-[#111923] px-3 py-2 font-mono text-xs text-[#AEB9C7]">
                        Practice
                    </span>

                    <span className="rounded-lg border border-[#1C2734] bg-[#111923] px-3 py-2 font-mono text-xs text-[#AEB9C7]">
                        Compete
                    </span>

                    <span className="rounded-lg border border-[#1C2734] bg-[#111923] px-3 py-2 font-mono text-xs text-[#AEB9C7]">
                        Improve
                    </span>

                </div>

            </div>

        </section>
    );
};


export default CPHero;