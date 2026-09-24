const mongoose = require("mongoose");

const solutionSchema = new mongoose.Schema(
    {
        intuition: {
            type: String,
            default: ""
        },

        approach: {
            type: String,
            default: ""
        },

        code: {
            type: String,
            default: ""
        },

        timeComplexity: {
            type: String,
            default: ""
        },

        spaceComplexity: {
            type: String,
            default: ""
        }
    },
    {
        _id: false
    }
);

const exampleSchema = new mongoose.Schema(
    {
        input: {
            type: String,
            required: true
        },

        output: {
            type: String,
            required: true
        },

        explanation: {
            type: String,
            default: ""
        }
    },
    {
        _id: false
    }
);

const problemSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        category: {
            type: String,
            enum: ["DSA", "CP"],
            required: true
        },

        difficulty: {
            type: String,
            enum: ["Easy", "Medium", "Hard"],
            required: true
        },

        rating: {
            type: Number,
            default: null
        },

        dailyDate: {
            type: Date,
            required: true
        },

        isPublished: {
            type: Boolean,
            default: false
        },

        platform: {
            type: String,
            required: true,
            trim: true
        },

        externalLink: {
            type: String,
            required: true,
            trim: true
        },

        statement: {
            type: String,
            required: true
        },

        examples: {
            type: [exampleSchema],
            default: []
        },

        constraints: {
            type: [String],
            default: []
        },

        tags: {
            type: [String],
            default: []
        },

        topics: {
            type: [String],
            default: []
        },

        // DSA
        brute: {
            type: solutionSchema,
            default: undefined
        },

        better: {
            type: solutionSchema,
            default: undefined
        },

        optimal: {
            type: solutionSchema,
            default: undefined
        },

        // CP
        intuition: {
            type: String,
            default: ""
        },

        approach: {
            type: String,
            default: ""
        },

        code: {
            type: String,
            default: ""
        },

        timeComplexity: {
            type: String,
            default: ""
        },

        spaceComplexity: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

problemSchema.index(
    {
        category: 1,
        dailyDate: 1
    },
    {
        unique: true
    }
);

const Problem = mongoose.model(
    "Problem",
    problemSchema
);

module.exports = Problem;