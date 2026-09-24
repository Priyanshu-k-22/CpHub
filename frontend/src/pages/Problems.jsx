import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getDailyProblems } from "../api/problem.api";


const Problems = () => {
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect(() => {
        const fetchDailyProblems = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await getDailyProblems();

                setProblems(response.data || []);
            } catch (error) {
                console.error(
                    "Failed to fetch daily problems:",
                    error
                );

                setError(
                    error.response?.data?.message ||
                    "Failed to load problems"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchDailyProblems();
    }, []);


    const dsaProblem = problems.find(
        (problem) => problem.category === "DSA"
    );

    const cpProblem = problems.find(
        (problem) => problem.category === "CP"
    );


    return (
        <div className="min-h-screen bg-[#060A10] text-[#EDF2F7]">
            <div className="mx-auto max-w-7xl px-5 py-5">

                {/* Header */}
                <div className="mb-12">
                    <p className="font-mono text-sm text-[#4AFFC4]">
                        cp/dsa_club/problems
                    </p>

                    <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
                        Problems
                    </h1>

                    <p className="mt-4 max-w-2xl text-[#AEB9C7]">
                        Practice problems, understand the approach,
                        and build your problem-solving skills.
                    </p>
                </div>


                {/* Loading */}
                {loading && (
                    <div className="flex min-h-[300px] items-center justify-center">
                        <div className="flex items-center gap-3">
                            <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#4AFFC4] border-t-transparent" />

                            <span className="font-mono text-sm text-[#AEB9C7]">
                                loading_problems...
                            </span>
                        </div>
                    </div>
                )}


                {/* Error */}
                {!loading && error && (
                    <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-6">
                        <p className="font-mono text-sm text-red-400">
                            error: {error}
                        </p>
                    </div>
                )}


                {/* Problems */}
                {!loading && !error && (
                    <>
                        <section>
                            <div className="mb-6 flex items-end justify-between">
                                <div>
                                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#556275]">
                                        today
                                    </p>

                                    <h2 className="mt-2 text-2xl font-semibold">
                                        Daily Problems
                                    </h2>
                                </div>
                            </div>


                            <div className="grid gap-6 md:grid-cols-2">

                                {dsaProblem && (
                                    <ProblemCard
                                        problem={dsaProblem}
                                    />
                                )}

                                {cpProblem && (
                                    <ProblemCard
                                        problem={cpProblem}
                                    />
                                )}

                            </div>


                            {problems.length === 0 && (
                                <div className="rounded-xl border border-[#1C2734] bg-[#0A1018] p-10 text-center">
                                    <p className="font-mono text-sm text-[#556275]">
                                        no_daily_problems_found
                                    </p>
                                </div>
                            )}
                        </section>


                        {/* History */}
                        <section className="mt-20">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#556275]">
                                        archive
                                    </p>

                                    <h2 className="mt-2 text-2xl font-semibold">
                                        Problem History
                                    </h2>

                                    <p className="mt-2 text-sm text-[#AEB9C7]">
                                        Explore problems from previous days.
                                    </p>
                                </div>

                                <Link
                                    to="/problems/history"
                                    className="font-mono text-sm text-[#4AFFC4] transition hover:text-white"
                                >
                                    view_all →
                                </Link>
                            </div>
                        </section>
                    </>
                )}

            </div>
        </div>
    );
};


const ProblemCard = ({ problem }) => {

    const categoryLabel =
        problem.category === "DSA"
            ? "DSA"
            : "COMPETITIVE PROGRAMMING";


    return (
        <Link
            to={`/problems/${problem._id}`}
            className="group block rounded-2xl border border-[#1C2734] bg-[#0A1018] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#4AFFC4]/40 hover:bg-[#0C131C]"
        >

            {/* Top */}
            <div className="flex items-center justify-between gap-4">

                <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#4AFFC4]">
                    {categoryLabel}
                </span>

                <span className="rounded-full border border-[#1C2734] px-3 py-1 font-mono text-xs text-[#AEB9C7]">
                    {problem.difficulty}
                </span>

            </div>


            {/* Title */}
            <h3 className="mt-6 text-2xl font-semibold transition group-hover:text-[#4AFFC4]">
                {problem.title}
            </h3>


            {/* Platform */}
            <p className="mt-2 font-mono text-sm text-[#556275]">
                {problem.platform}
            </p>


            {/* Tags */}
            {problem.tags?.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">

                    {problem.tags.slice(0, 4).map((tag) => (
                        <span
                            key={tag}
                            className="rounded-md bg-[#111923] px-2.5 py-1 font-mono text-xs text-[#AEB9C7]"
                        >
                            #{tag}
                        </span>
                    ))}

                </div>
            )}


            {/* Footer */}
            <div className="mt-8 flex items-center justify-between border-t border-[#1C2734] pt-5">

                {problem.rating ? (
                    <span className="font-mono text-xs text-[#556275]">
                        rating: {problem.rating}
                    </span>
                ) : (
                    <span />
                )}

                <span className="font-mono text-sm text-[#4AFFC4] transition group-hover:translate-x-1">
                    solve →
                </span>

            </div>

        </Link>
    );
};


export default Problems;