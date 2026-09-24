import React from "react";
import { useAuth } from "../../context/AuthContext";

const UserDashboard = () => {
    const { user } = useAuth();

    return (
        <div className="min-h-screen bg-[#060A10] text-[#EDF2F7]">
            <div className="mx-auto max-w-7xl px-5 py-5">

                {/* Header */}
                <div className="border-b border-[#1C2734] pb-8">
                    <p className="font-mono text-sm text-[#556275]">
                        cp/dsa_club
                    </p>

                    <h1 className="mt-3 font-display text-4xl font-bold">
                        Welcome,{" "}
                        <span className="text-[#4AFFC4]">
                            {user?.username}
                        </span>
                    </h1>

                    <p className="mt-3 text-[#AEB9C7]">
                        Track your competitive programming journey.
                    </p>
                </div>

                {/* Profile */}
                <section className="mt-10">
                    <div className="mb-5">
                        <p className="font-mono text-xs uppercase tracking-widest text-[#556275]">
                            profile
                        </p>

                        <h2 className="mt-2 text-2xl font-semibold">
                            Your Profile
                        </h2>
                    </div>

                    <div className="rounded-lg border border-[#1C2734] bg-[#080E16]/70 p-6">
                        <div className="grid gap-6 md:grid-cols-2">

                            <div>
                                <p className="font-mono text-xs text-[#556275]">
                                    USERNAME
                                </p>

                                <p className="mt-2 text-lg font-medium">
                                    {user?.username}
                                </p>
                            </div>

                            <div>
                                <p className="font-mono text-xs text-[#556275]">
                                    EMAIL
                                </p>

                                <p className="mt-2 text-lg font-medium">
                                    {user?.email}
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="mt-10">
                    <div className="mb-5">
                        <p className="font-mono text-xs uppercase tracking-widest text-[#556275]">
                            statistics
                        </p>

                        <h2 className="mt-2 text-2xl font-semibold">
                            CP Stats
                        </h2>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                        <StatCard
                            label="PROBLEMS SOLVED"
                            value="0"
                        />

                        <StatCard
                            label="CONTESTS"
                            value="0"
                        />

                        <StatCard
                            label="RATING"
                            value="—"
                        />

                        <StatCard
                            label="STREAK"
                            value="0"
                        />

                    </div>
                </section>

                {/* Quick Actions */}
                <section className="mt-10">
                    <div className="mb-5">
                        <p className="font-mono text-xs uppercase tracking-widest text-[#556275]">
                            actions
                        </p>

                        <h2 className="mt-2 text-2xl font-semibold">
                            Quick Actions
                        </h2>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">

                        <ActionCard
                            title="Practice Problems"
                            description="Improve your problem solving skills."
                            href="/problems"
                        />

                        <ActionCard
                            title="Browse Contests"
                            description="Participate in upcoming contests."
                            href="/contests"
                        />

                    </div>
                </section>

            </div>
        </div>
    );
};

const StatCard = ({ label, value }) => {
    return (
        <div className="rounded-lg border border-[#1C2734] bg-[#080E16]/70 p-5">
            <p className="font-mono text-[10px] tracking-wider text-[#556275]">
                {label}
            </p>

            <p className="mt-3 text-3xl font-bold text-[#4AFFC4]">
                {value}
            </p>
        </div>
    );
};

const ActionCard = ({
    title,
    description,
    href
}) => {
    return (
        <a
            href={href}
            className="
                group
                rounded-lg
                border
                border-[#1C2734]
                bg-[#080E16]/70
                p-6
                transition
                hover:border-[#4AFFC4]/40
                hover:bg-[#0A111B]
            "
        >
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                    {title}
                </h3>

                <span className="font-mono text-[#4AFFC4] transition-transform group-hover:translate-x-1">
                    →
                </span>
            </div>

            <p className="mt-2 text-sm text-[#AEB9C7]">
                {description}
            </p>
        </a>
    );
};

export default UserDashboard;