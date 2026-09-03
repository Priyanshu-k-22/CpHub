import React from "react";
import { useAuth } from "../../context/AuthContext";

const UserDashboard = () => {
    const { user } = useAuth();

    return (
        <div className="min-h-screen bg-[#060A10] text-[#EDF2F7]">
            <div className="mx-auto max-w-7xl px-5 py-20">
                <p className="font-mono text-sm text-[#556275]">
                    cp/dsa_club
                </p>

                <h1 className="mt-3 font-display text-4xl font-bold">
                    Welcome, {user?.username}
                </h1>

                <p className="mt-3 text-[#AEB9C7]">
                    Your CpHub dashboard.
                </p>
            </div>
        </div>
    );
};

export default UserDashboard;