import React, {
    useEffect,
    useState
} from "react";

import {
    getProblemHistory
} from "../api/problem.api";

import ProblemHistoryCard
    from "../components/problems/ProblemHistory/ProblemHistoryCard";

import ProblemHistoryFilterPanel
    from "../components/problems/ProblemHistory/ProblemHistoryFilterPanel";

import ProblemHistoryActiveFilters
    from "../components/problems/ProblemHistory/ProblemHistoryActiveFilters";

import ProblemHistorySort
    from "../components/problems/ProblemHistory/ProblemHistorySort";

import ProblemPagination
    from "../components/problems/ProblemHistory/ProblemPagination";

import ProblemHistoryEmpty
    from "../components/problems/ProblemHistory/ProblemHistoryEmpty";


const DEFAULT_FILTERS = {
    category: "",
    difficulty: "",
    topic: "",
    tag: ""
};


const ProblemHistory = () => {

    const [search, setSearch] = useState("");

    const [filters, setFilters] = useState(
        DEFAULT_FILTERS
    );

    const [sort, setSort] = useState(
        "newest"
    );

    const [problems, setProblems] = useState([]);

    const [pagination, setPagination] =
        useState({
            page: 1,
            limit: 20,
            total: 0,
            totalPages: 0
        });

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");


    // --------------------------------
    // FETCH HISTORY
    // --------------------------------

    const fetchHistory = async ({
        selectedSearch = search,
        selectedFilters = filters,
        selectedSort = sort,
        selectedPage = 1
    } = {}) => {

        try {

            setLoading(true);
            setError("");

            const response =
                await getProblemHistory({
                    search: selectedSearch,
                    ...selectedFilters,
                    sort: selectedSort,
                    page: selectedPage,
                    limit: 20
                });


            setProblems(
                response.data?.problems || []
            );


            setPagination(
                response.data?.pagination || {
                    page: selectedPage,
                    limit: 20,
                    total: 0,
                    totalPages: 0
                }
            );

        } catch (error) {

            console.error(
                "Failed to fetch problem history:",
                error
            );

            setError(
                error.response?.data?.message ||
                "Failed to load problem history"
            );

        } finally {

            setLoading(false);

        }
    };


    // --------------------------------
    // INITIAL FETCH
    // --------------------------------

    useEffect(() => {

        fetchHistory({
            selectedSearch: "",
            selectedFilters:
                DEFAULT_FILTERS,
            selectedSort: "newest",
            selectedPage: 1
        });

    }, []);


    // --------------------------------
    // SEARCH
    // --------------------------------

    const handleSearch = (
        value
    ) => {

        setSearch(value);

        fetchHistory({
            selectedSearch: value,
            selectedFilters: filters,
            selectedSort: sort,
            selectedPage: 1
        });

    };


    // --------------------------------
    // FILTER CHANGE
    // --------------------------------

    const handleFilterChange = (
        key,
        value
    ) => {

        const newFilters = {
            ...filters,
            [key]: value
        };


        // DSA topic doesn't apply to CP.

        if (
            key === "category" &&
            value === "CP"
        ) {
            newFilters.topic = "";
        }


        setFilters(
            newFilters
        );


        fetchHistory({
            selectedSearch: search,
            selectedFilters:
                newFilters,
            selectedSort: sort,
            selectedPage: 1
        });

    };


    // --------------------------------
    // REMOVE ONE ACTIVE FILTER
    // --------------------------------

    const handleRemoveFilter = (
        key
    ) => {

        const newFilters = {
            ...filters,
            [key]: ""
        };


        setFilters(
            newFilters
        );


        fetchHistory({
            selectedSearch: search,
            selectedFilters:
                newFilters,
            selectedSort: sort,
            selectedPage: 1
        });

    };


    // --------------------------------
    // CLEAR ALL
    // --------------------------------

    const handleClearFilters = () => {

        setSearch("");

        setFilters(
            DEFAULT_FILTERS
        );

        setSort(
            "newest"
        );


        fetchHistory({
            selectedSearch: "",
            selectedFilters:
                DEFAULT_FILTERS,
            selectedSort: "newest",
            selectedPage: 1
        });

    };


    // --------------------------------
    // SORT
    // --------------------------------

    const handleSortChange = (
        newSort
    ) => {

        setSort(
            newSort
        );


        fetchHistory({
            selectedSearch: search,
            selectedFilters: filters,
            selectedSort: newSort,
            selectedPage: 1
        });

    };


    // --------------------------------
    // PAGINATION
    // --------------------------------

    const handlePageChange = (
        newPage
    ) => {

        fetchHistory({
            selectedSearch: search,
            selectedFilters: filters,
            selectedSort: sort,
            selectedPage: newPage
        });


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };


    return (
        <div className="min-h-screen bg-[#060A10] text-[#EDF2F7]">

            <main className="mx-auto max-w-6xl px-5 py-5">

                {/* BACK */}

                <a
                    href="/problems"
                    className="font-mono text-sm text-[#4AFFC4] transition hover:text-white"
                >
                    ← back_to_problems
                </a>


                {/* HEADER */}

                <header className="mt-8">

                    <p className="font-mono text-sm text-[#4AFFC4]">
                        cp/dsa_club/problems/archive
                    </p>

                    <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
                        Problem History
                    </h1>

                    <p className="mt-4 max-w-2xl text-[#AEB9C7]">
                        Explore previously published daily
                        problems and revisit what you've
                        practiced.
                    </p>

                </header>


                {/* FILTER PANEL */}

                <section className="mt-5">

                    <ProblemHistoryFilterPanel
                        filters={filters}
                        onChange={
                            handleFilterChange
                        }
                        onClear={
                            handleClearFilters
                        }
                    />

                </section>


                {/* ACTIVE FILTERS */}

                <ProblemHistoryActiveFilters
                    filters={filters}
                    onRemove={
                        handleRemoveFilter
                    }
                    onClear={
                        handleClearFilters
                    }
                />


                {/* RESULTS HEADER */}

                {!loading &&
                    !error && (

                        <div className="mt-8 flex flex-col gap-4 border-b border-[#1C2734] pb-5 sm:flex-row sm:items-center sm:justify-between">

                            <p className="font-mono text-xs text-[#556275]">

                                {pagination.total}

                                {" "}

                                problem
                                {pagination.total !== 1
                                    ? "s"
                                    : ""}

                                {" "}found

                            </p>


                            <ProblemHistorySort
                                value={sort}
                                onChange={
                                    handleSortChange
                                }
                            />

                        </div>

                    )}


                    {/* SEARCH */}

                <section className="mt-10">

                    <div className="relative">

                        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-mono text-sm text-[#556275]">
                            /
                        </span>

                        <input
                            type="text"
                            value={search}
                            onChange={(event) =>
                                handleSearch(
                                    event.target.value
                                )
                            }
                            placeholder="Search problems..."
                            className="w-full rounded-xl border border-[#1C2734] bg-[#0A1018] py-4 pl-10 pr-4 font-mono text-sm text-[#EDF2F7] outline-none transition placeholder:text-[#556275] focus:border-[#4AFFC4]/40"
                        />

                    </div>

                </section>


                {/* LOADING */}

                {loading && (
                    <HistoryLoading />
                )}


                {/* ERROR */}

                {!loading &&
                    error && (

                        <HistoryError
                            message={error}
                            onRetry={() =>
                                fetchHistory({
                                    selectedSearch:
                                        search,
                                    selectedFilters:
                                        filters,
                                    selectedSort:
                                        sort,
                                    selectedPage:
                                        pagination.page
                                })
                            }
                        />

                    )}


                {/* RESULTS */}

                {!loading &&
                    !error &&
                    problems.length > 0 && (

                        <section className="mt-5 space-y-3">

                            {problems.map(
                                (problem) => (

                                    <ProblemHistoryCard
                                        key={
                                            problem._id
                                        }
                                        problem={
                                            problem
                                        }
                                    />

                                )
                            )}

                        </section>

                    )}


                {/* EMPTY */}

                {!loading &&
                    !error &&
                    problems.length === 0 && (

                        <section className="mt-5">

                            <ProblemHistoryEmpty
                                category={
                                    filters.category
                                }
                            />

                        </section>

                    )}


                {/* PAGINATION */}

                {!loading &&
                    !error &&
                    problems.length > 0 && (

                        <ProblemPagination
                            page={
                                pagination.page
                            }
                            totalPages={
                                pagination.totalPages
                            }
                            onPageChange={
                                handlePageChange
                            }
                        />

                    )}

            </main>

        </div>
    );
};


// --------------------------------
// LOADING
// --------------------------------

const HistoryLoading = () => {

    return (

        <div className="flex min-h-[300px] items-center justify-center">

            <div className="flex items-center gap-3">

                <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#4AFFC4] border-t-transparent" />

                <span className="font-mono text-sm text-[#AEB9C7]">
                    loading_history...
                </span>

            </div>

        </div>

    );
};


// --------------------------------
// ERROR
// --------------------------------

const HistoryError = ({
    message,
    onRetry
}) => {

    return (

        <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/5 p-6">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <p className="font-mono text-sm text-red-400">
                    error: {message}
                </p>

                <button
                    type="button"
                    onClick={onRetry}
                    className="rounded-lg border border-red-500/30 px-4 py-2 font-mono text-xs text-red-400 transition hover:bg-red-500/10"
                >
                    retry
                </button>

            </div>

        </div>

    );
};


export default ProblemHistory;