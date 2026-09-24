import { Link } from "react-router-dom";

const PLATFORM_STYLES = {
    LeetCode:
        "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",

    Codeforces:
        "bg-blue-400/10 text-blue-400 border-blue-400/20",

    CodeChef:
        "bg-orange-400/10 text-orange-400 border-orange-400/20",

    AtCoder:
        "bg-red-400/10 text-red-400 border-red-400/20",
};

const getPlatformStyle = (platform) => {
    return (
        PLATFORM_STYLES[platform] ||
        "bg-[#111923] text-[#AEB9C7] border-[#263445]"
    );
};

const getDifficultyStyle = (difficulty) => {
    if (difficulty === "Easy") {
        return "bg-emerald-400/10 text-emerald-400";
    }

    if (difficulty === "Medium") {
        return "bg-yellow-400/10 text-yellow-400";
    }

    if (difficulty === "Hard") {
        return "bg-red-400/10 text-red-400";
    }

    return "bg-[#111923] text-[#718096]";
};

const DailyProblemCard = ({ problem }) => {
    const platform =
        problem.platform || "Unknown";

    const category =
        problem.category || "";

    const difficulty =
        problem.difficulty || "";

    const rating =
        problem.rating;

    const tags = Array.isArray(problem.tags)
        ? problem.tags
        : [];

    const topics = Array.isArray(problem.topics)
        ? problem.topics
        : [];

    const topic =
        problem.topic ||
        topics[0] ||
        "";

    return (
        <Link
            to={`/problems/${problem._id}`}
            className="group block min-h-[145px] rounded-xl border border-[#1C2734] bg-[#0A1018] p-5 transition duration-200 hover:border-[#4AFFC4]/30 hover:bg-[#0C131C]"
        >
            <div className="flex h-full flex-col justify-between gap-5">

                {/* TOP */}

                <div>

                    <div className="flex min-w-0 flex-wrap items-center gap-2">

                        {/* Title */}

                        <h3 className="min-w-0 truncate text-[15px] font-semibold text-[#EDF2F7] transition group-hover:text-[#4AFFC4]">
                            {problem.title}
                        </h3>

                        {/* Platform */}

                        <span
                            className={`shrink-0 rounded-md border px-2 py-0.5 text-[10px] font-medium ${getPlatformStyle(
                                platform
                            )}`}
                        >
                            {platform}
                        </span>

                        {/* Category */}

                        <span
                            className={`shrink-0 rounded-md px-2 py-0.5 text-[10px] font-medium ${
                                category === "CP"
                                    ? "bg-blue-400/10 text-blue-400"
                                    : "bg-emerald-400/10 text-emerald-400"
                            }`}
                        >
                            {category}
                        </span>
                    </div>


                    {/* TOPIC + TAGS */}

                    <div className="mt-3 flex flex-wrap items-center gap-1.5">

                        {topic && (
                            <span className="text-xs text-[#8B98A9]">
                                {topic}
                            </span>
                        )}

                        {topic &&
                            tags.length > 0 && (
                                <span className="text-[#3E4A59]">
                                    •
                                </span>
                            )}

                        {tags
                            .slice(0, 4)
                            .map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded bg-[#111923] px-1.5 py-0.5 text-[10px] text-[#718096]"
                                >
                                    {tag}
                                </span>
                            ))}

                        {tags.length > 4 && (
                            <span className="text-[10px] text-[#556275]">
                                +
                                {tags.length - 4}
                            </span>
                        )}
                    </div>
                </div>


                {/* BOTTOM */}

                <div className="flex items-center justify-between border-t border-[#17212D] pt-3">

                    {/* CP → Rating */}

                    {category === "CP" &&
                    rating !== undefined &&
                    rating !== null ? (
                        <span className="rounded-md bg-blue-400/10 px-2.5 py-1 text-[10px] font-medium text-blue-400">
                            Rating {rating}
                        </span>
                    ) : category === "DSA" &&
                      difficulty ? (
                        <span
                            className={`rounded-md px-2.5 py-1 text-[10px] font-medium ${getDifficultyStyle(
                                difficulty
                            )}`}
                        >
                            {difficulty}
                        </span>
                    ) : (
                        <span />
                    )}

                    {/* Solve */}

                    <span className="text-[11px] font-medium text-[#4AFFC4] transition group-hover:translate-x-1">
                        solve →
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default DailyProblemCard;