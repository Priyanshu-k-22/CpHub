import React from "react";

const ProblemHistoryActiveFilters = ({
    filters,
    onRemove,
    onClear
}) => {

    const activeFilters = [];

    if (filters.category) {
        activeFilters.push({
            key: "category",
            label: filters.category
        });
    }

    if (filters.difficulty) {
        activeFilters.push({
            key: "difficulty",
            label: filters.difficulty
        });
    }

    if (filters.topic) {
        activeFilters.push({
            key: "topic",
            label: filters.topic
        });
    }

    if (filters.tag) {
        activeFilters.push({
            key: "tag",
            label: `#${filters.tag}`
        });
    }

    if (activeFilters.length === 0) {
        return null;
    }

    return (
        <div className="mt-5">

            <div className="flex flex-wrap items-center gap-2">

                <span className="mr-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[#556275]">
                    active
                </span>

                {activeFilters.map((filter) => (

                    <button
                        key={filter.key}
                        type="button"
                        onClick={() =>
                            onRemove(filter.key)
                        }
                        className="group flex items-center gap-2 rounded-md border border-[#4AFFC4]/20 bg-[#4AFFC4]/5 px-3 py-1.5 font-mono text-xs text-[#AEB9C7] transition hover:border-[#4AFFC4]/40 hover:text-[#4AFFC4]"
                    >

                        <span>
                            {filter.label}
                        </span>

                        <span className="text-[#556275] group-hover:text-[#4AFFC4]">
                            ×
                        </span>

                    </button>

                ))}

                <button
                    type="button"
                    onClick={onClear}
                    className="ml-1 font-mono text-xs text-[#556275] transition hover:text-red-400"
                >
                    clear_all
                </button>

            </div>

        </div>
    );
};

export default ProblemHistoryActiveFilters;