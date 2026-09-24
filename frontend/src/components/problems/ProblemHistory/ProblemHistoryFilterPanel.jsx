import React from "react";

const DSA_TOPICS = [
    "Arrays",
    "Strings",
    "Two Pointer",
    "Sliding Window",
    "Binary Search",
    "Linked List",
    "Stack",
    "Queue",
    "Trees",
    "BST",
    "Heap",
    "Graph",
    "Greedy",
    "Backtracking",
    "DP"
];

const TAGS = [
    "two-pointer",
    "sliding-window",
    "binary-search",
    "prefix-sum",
    "hashing",
    "greedy",
    "recursion",
    "backtracking",
    "dp"
];

const DIFFICULTIES = [
    "Easy",
    "Medium",
    "Hard"
];

const ProblemHistoryFilterPanel = ({
    filters,
    onChange,
    onClear
}) => {
    return (
        <div className="rounded-2xl border border-[#1C2734] bg-[#0A1018] p-5">

            {/* Header */}

            <div className="flex items-center justify-between">

                <div>
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#556275]">
                        filters
                    </p>

                    <h2 className="mt-1 text-lg font-semibold text-[#EDF2F7]">
                        Refine Problems
                    </h2>
                </div>

                <button
                    type="button"
                    onClick={onClear}
                    className="font-mono text-xs text-[#556275] transition hover:text-[#4AFFC4]"
                >
                    clear_all
                </button>

            </div>


            {/* Category */}

            <div className="mt-6">

                <FilterLabel>
                    category
                </FilterLabel>

                <div className="flex flex-wrap gap-2">

                    {[
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
                    ].map((item) => (

                        <FilterButton
                            key={
                                item.value || "all"
                            }
                            active={
                                filters.category ===
                                item.value
                            }
                            onClick={() =>
                                onChange(
                                    "category",
                                    item.value
                                )
                            }
                        >
                            {item.label}
                        </FilterButton>

                    ))}

                </div>

            </div>


            {/* Difficulty */}

            <div className="mt-6">

                <FilterLabel>
                    difficulty
                </FilterLabel>

                <div className="flex flex-wrap gap-2">

                    {[
                        {
                            label: "All",
                            value: ""
                        },
                        ...DIFFICULTIES.map(
                            (difficulty) => ({
                                label: difficulty,
                                value: difficulty
                            })
                        )
                    ].map((item) => (

                        <FilterButton
                            key={
                                item.value || "all"
                            }
                            active={
                                filters.difficulty ===
                                item.value
                            }
                            onClick={() =>
                                onChange(
                                    "difficulty",
                                    item.value
                                )
                            }
                        >
                            {item.label}
                        </FilterButton>

                    ))}

                </div>

            </div>


            {/* Topic + Tag */}

            <div className="mt-6 grid gap-4 md:grid-cols-2">

                {filters.category !== "CP" && (
                    <SelectFilter
                        label="dsa topic"
                        value={filters.topic}
                        onChange={(value) =>
                            onChange(
                                "topic",
                                value
                            )
                        }
                        options={DSA_TOPICS}
                        placeholder="All topics"
                    />
                )}

                <SelectFilter
                    label="tag"
                    value={filters.tag}
                    onChange={(value) =>
                        onChange(
                            "tag",
                            value
                        )
                    }
                    options={TAGS}
                    placeholder="All tags"
                />

            </div>

        </div>
    );
};


const FilterLabel = ({
    children
}) => {
    return (
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.15em] text-[#556275]">
            {children}
        </p>
    );
};


const FilterButton = ({
    children,
    active,
    onClick
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`rounded-lg border px-4 py-2 font-mono text-xs transition ${
                active
                    ? "border-[#4AFFC4]/40 bg-[#4AFFC4]/10 text-[#4AFFC4]"
                    : "border-[#1C2734] bg-[#060A10] text-[#556275] hover:border-[#4AFFC4]/20 hover:text-[#AEB9C7]"
            }`}
        >
            {children}
        </button>
    );
};


const SelectFilter = ({
    label,
    value,
    onChange,
    options,
    placeholder
}) => {
    return (
        <div>

            <FilterLabel>
                {label}
            </FilterLabel>

            <select
                value={value}
                onChange={(event) =>
                    onChange(
                        event.target.value
                    )
                }
                className="w-full appearance-none rounded-lg border border-[#1C2734] bg-[#060A10] px-4 py-3 font-mono text-sm text-[#AEB9C7] outline-none transition focus:border-[#4AFFC4]/40"
            >

                <option value="">
                    {placeholder}
                </option>

                {options.map(
                    (option) => (
                        <option
                            key={option}
                            value={option}
                        >
                            {option}
                        </option>
                    )
                )}

            </select>

        </div>
    );
};


export default ProblemHistoryFilterPanel;