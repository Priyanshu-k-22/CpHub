const mongoose = require("mongoose");

const cpProgressSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        problem: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CPProblem",
            required: true,
        },

        solved: {
            type: Boolean,
            default: false,
        },

        solvedAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

cpProgressSchema.index(
    {
        user: 1,
        problem: 1,
    },
    {
        unique: true,
    }
);

module.exports = mongoose.model(
    "CPProgress",
    cpProgressSchema
);