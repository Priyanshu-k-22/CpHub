import React from "react";

const ProblemHistoryFilters = ({
    category,
    onCategoryChange
}) => {
    const filters = [
        {
            label: "All",
            value: ""
        },
        {
            label: "DSA",
            value: "DSA"
        },
        {
            label: "CP",
            value: "CP"
        }
    ];

    return (
        <div className="flex flex-wrap gap-2">

            {filters.map((filter) => {
                const isActive =
                    category === filter.value;

                return (
                    <button
                        key={filter.label}
                        type="button"
                        onClick={() =>
                            onCategoryChange(filter.value)
                        }
                        className={`rounded-lg border px-4 py-2 font-mono text-xs transition ${
                            isActive
                                ? "border-[#4AFFC4]/40 bg-[#4AFFC4]/10 text-[#4AFFC4]"
                                : "border-[#1C2734] bg-[#0A1018] text-[#556275] hover:border-[#4AFFC4]/20 hover:text-[#AEB9C7]"
                        }`}
                    >
                        {filter.label}
                    </button>
                );
            })}

        </div>
    );
};

export default ProblemHistoryFilters;