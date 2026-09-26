const express = require("express");
const errorHandler = require("./middlewares/error.middleware");
const cookieParser = require("cookie-parser");

const authRoutes = require("./modules/auth/auth.routes");
const userRoutes = require("./modules/user/user.routes");
const problemRoutes = require("./modules/problem/problem.routes");
const contestRoutes = require("./modules/contest/contest.routes");

const cors = require("cors");

const app = express();

app.use(
    cors({
        origin: "https://cphub-phi.vercel.app",
        credentials: true
    })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/problems", problemRoutes);
app.use("/api/contests",contestRoutes);

app.use(errorHandler)

module.exports = app;
