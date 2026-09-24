import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Events from "./pages/Events.jsx";
import Contests from "./pages/Contests.jsx";
import Leaderboard from "./pages/Leaderboard.jsx";
import Team from "./pages/Team.jsx";
import Achievements from "./pages/Achievements.jsx";
import Gallery from "./pages/Gallery.jsx";

import Problems from "./pages/Problems.jsx";
import ProblemDetails from "./pages/ProblemDetails.jsx";
import ProblemHistory from "./pages/ProblemHistory.jsx";

import Login from "./components/auth/Login.jsx";
import Register from "./components/auth/Register.jsx";

import UserDashboard from "./components/dashboard/UserDashboard.jsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";

import { AuthProvider } from "./context/AuthContext.jsx";


const AppLayout = () => {
    return (
        <div className="min-h-screen bg-[#060A10] text-[#EDF2F7]">
            <Navbar />

            <main>
                <Routes>

                    {/* Public pages */}
                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/about"
                        element={<About />}
                    />

                    <Route
                        path="/events"
                        element={<Events />}
                    />

                    <Route
                        path="/contests"
                        element={<Contests />}
                    />

                    <Route
                        path="/leaderboard"
                        element={<Leaderboard />}
                    />

                    <Route
                        path="/team"
                        element={<Team />}
                    />

                    <Route
                        path="/achievements"
                        element={<Achievements />}
                    />

                    <Route
                        path="/gallery"
                        element={<Gallery />}
                    />


                    {/* Authentication */}
                    <Route
                        path="/login"
                        element={<Login />}
                    />

                    <Route
                        path="/register"
                        element={<Register />}
                    />


                    {/* Protected pages */}
                    <Route element={<ProtectedRoute />}>

                        <Route
                            path="/dashboard"
                            element={<UserDashboard />}
                        />

                        <Route
                            path="/problems"
                            element={<Problems />}
                        />

                        <Route
                            path="/problems/history"
                            element={<ProblemHistory />}
                        />

                        <Route
                            path="/problems/:id"
                            element={<ProblemDetails />}
                        />

                    </Route>

                </Routes>
            </main>
        </div>
    );
};


export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <AppLayout />
            </BrowserRouter>
        </AuthProvider>
    );
}