import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getProblemById } from "../api/problem.api";

import ProblemSection from "../components/problems/ProblemSection";
import ProblemExamples from "../components/problems/ProblemExamples";
import ProblemConstraints from "../components/problems/ProblemConstraints";
import ProblemTags from "../components/problems/ProblemTags";
import DSASolutions from "../components/problems/DSASolutions";
import CPSolution from "../components/problems/CPSolution";


const ProblemDetails = () => {
    const { id } = useParams();

    const [problem, setProblem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect(() => {
        const fetchProblem = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await getProblemById(id);

                setProblem(response.data);
            } catch (error) {
                console.error(
                    "Failed to fetch problem:",
                    error
                );

                setError(
                    error.response?.data?.message ||
                    "Failed to load problem"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchProblem();
    }, [id]);


    if (loading) {
        return <LoadingState />;
    }


    if (error) {
        return <ErrorState message={error} />;
    }


    if (!problem) {
        return null;
    }


    return (
        <div className="min-h-screen bg-[#060A10] text-[#EDF2F7]">

            <main className="mx-auto max-w-5xl px-5 py-5">

                {/* Back */}
                <Link
                    to="/problems"
                    className="font-mono text-sm text-[#4AFFC4] transition hover:text-white"
                >
                    ← back_to_problems
                </Link>


                {/* Header */}
                <ProblemHeader problem={problem} />


                {/* External platform */}
                <a
                    href={problem.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex rounded-lg border border-[#4AFFC4]/30 bg-[#4AFFC4]/5 px-4 py-2.5 font-mono text-sm text-[#4AFFC4] transition hover:border-[#4AFFC4] hover:bg-[#4AFFC4]/10"
                >
                    Open on {problem.platform} ↗
                </a>


                {/* Statement */}
                <ProblemSection title="Problem Statement">

                    <p className="whitespace-pre-line leading-8 text-[#AEB9C7]">
                        {problem.statement}
                    </p>

                </ProblemSection>


                {/* Examples */}
                <ProblemExamples
                    examples={problem.examples}
                />


                {/* Constraints */}
                <ProblemConstraints
                    constraints={problem.constraints}
                />


                {/* Tags */}
                <ProblemTags
                    tags={problem.tags}
                    topics={problem.topics}
                />


                {/* Solutions */}
                {problem.category === "DSA" ? (
                    <DSASolutions
                        problem={problem}
                    />
                ) : (
                    <CPSolution
                        problem={problem}
                    />
                )}

            </main>

        </div>
    );
};


/* ---------------- Header ---------------- */

const ProblemHeader = ({ problem }) => {
    return (
        <header className="mt-8">

            <div className="flex flex-wrap items-center gap-3">

                <span className="rounded-md border border-[#4AFFC4]/30 bg-[#4AFFC4]/5 px-3 py-1 font-mono text-xs uppercase tracking-wider text-[#4AFFC4]">
                    {problem.category}
                </span>

                <span className="rounded-md border border-[#1C2734] px-3 py-1 font-mono text-xs text-[#AEB9C7]">
                    {problem.difficulty}
                </span>

                <span className="font-mono text-xs text-[#556275]">
                    {problem.platform}
                </span>

            </div>


            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">
                {problem.title}
            </h1>


            {problem.rating && (
                <p className="mt-3 font-mono text-sm text-[#556275]">
                    rating: {problem.rating}
                </p>
            )}

        </header>
    );
};


/* ---------------- Loading ---------------- */

const LoadingState = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#060A10] text-[#EDF2F7]">

            <div className="flex items-center gap-3">

                <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#4AFFC4] border-t-transparent" />

                <span className="font-mono text-sm text-[#AEB9C7]">
                    loading_problem...
                </span>

            </div>

        </div>
    );
};


/* ---------------- Error ---------------- */

const ErrorState = ({ message }) => {
    return (
        <div className="min-h-screen bg-[#060A10] px-5 py-24 text-[#EDF2F7]">

            <div className="mx-auto max-w-4xl">

                <Link
                    to="/problems"
                    className="font-mono text-sm text-[#4AFFC4]"
                >
                    ← back_to_problems
                </Link>

                <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/5 p-6">

                    <p className="font-mono text-sm text-red-400">
                        error: {message}
                    </p>

                </div>

            </div>

        </div>
    );
};


export default ProblemDetails;