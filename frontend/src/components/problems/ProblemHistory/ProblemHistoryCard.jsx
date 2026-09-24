import React from "react";
import { Link } from "react-router-dom";

const ProblemHistoryCard = ({ problem }) => {
    return (
        <Link
            to={`/problems/${problem._id}`}
            className="group block rounded-xl border border-[#1C2734] bg-[#0A1018] p-5 transition hover:-translate-y-0.5 hover:border-[#4AFFC4]/30 hover:bg-[#0C131C]"
        >
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                {/* Problem information */}
                <div className="min-w-0">

                    <div className="flex flex-wrap items-center gap-3">

                        <span
                            className={`rounded-md border px-2.5 py-1 font-mono text-xs ${
                                problem.category === "DSA"
                                    ? "border-[#4AFFC4]/30 bg-[#4AFFC4]/5 text-[#4AFFC4]"
                                    : "border-[#6B8CFF]/30 bg-[#6B8CFF]/5 text-[#8EA7FF]"
                            }`}
                        >
                            {problem.category}
                        </span>

                        <span className="font-mono text-xs text-[#556275]">
                            {problem.platform}
                        </span>

                    </div>


                    <h3 className="mt-3 truncate text-lg font-semibold text-[#EDF2F7] transition group-hover:text-[#4AFFC4]">
                        {problem.title}
                    </h3>

                </div>


                {/* Metadata */}
                <div className="flex shrink-0 items-center gap-6">

                    <div>
                        <p className="font-mono text-[10px] uppercase tracking-wider text-[#556275]">
                            difficulty
                        </p>

                        <p className="mt-1 text-sm text-[#AEB9C7]">
                            {problem.difficulty}
                        </p>
                    </div>


                    {problem.rating && (
                        <div>
                            <p className="font-mono text-[10px] uppercase tracking-wider text-[#556275]">
                                rating
                            </p>

                            <p className="mt-1 font-mono text-sm text-[#AEB9C7]">
                                {problem.rating}
                            </p>
                        </div>
                    )}


                    <span className="font-mono text-lg text-[#4AFFC4] transition-transform group-hover:translate-x-1">
                        →
                    </span>

                </div>

            </div>
        </Link>
    );
};

export default ProblemHistoryCard;