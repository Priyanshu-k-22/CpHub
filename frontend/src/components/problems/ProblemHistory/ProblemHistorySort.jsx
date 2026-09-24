import React from "react";

const SORT_OPTIONS = [
    {
        label: "Newest",
        value: "newest"
    },
    {
        label: "Oldest",
        value: "oldest"
    },
    {
        label: "Rating: Low → High",
        value: "ratingAsc"
    },
    {
        label: "Rating: High → Low",
        value: "ratingDesc"
    }
];

const ProblemHistorySort = ({
    value,
    onChange
}) => {
    return (
        <div className="flex items-center gap-3">

            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#556275]">
                sort
            </span>

            <select
                value={value}
                onChange={(event) =>
                    onChange(event.target.value)
                }
                className="rounded-lg border border-[#1C2734] bg-[#0A1018] px-4 py-2.5 font-mono text-xs text-[#AEB9C7] outline-none transition hover:border-[#4AFFC4]/30 focus:border-[#4AFFC4]/40"
            >
                {SORT_OPTIONS.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>

        </div>
    );
};

export default ProblemHistorySort;