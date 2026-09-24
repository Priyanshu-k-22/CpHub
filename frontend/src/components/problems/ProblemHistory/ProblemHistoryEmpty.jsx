import React from "react";

const ProblemHistoryEmpty = ({
    category
}) => {
    return (
        <div className="rounded-xl border border-[#1C2734] bg-[#0A1018] p-12 text-center">

            <p className="font-mono text-sm text-[#556275]">
                {category
                    ? `no_${category.toLowerCase()}_problems_found`
                    : "no_problems_found"}
            </p>

            <p className="mt-2 text-sm text-[#556275]">
                Try another filter or check back later.
            </p>

        </div>
    );
};

export default ProblemHistoryEmpty;