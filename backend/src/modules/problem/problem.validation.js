const { z } = require("zod");

const solutionSchema = z.object({
    intuition: z.string().trim().optional(),
    approach: z.string().trim().optional(),
    code: z.string().optional(),
    timeComplexity: z.string().trim().optional(),
    spaceComplexity: z.string().trim().optional()
});

const exampleSchema = z.object({
    input: z.string(),
    output: z.string(),
    explanation: z.string().optional()
});

const baseProblemSchema = z.object({
    title: z
        .string()
        .trim()
        .min(1, "Title is required")
        .max(200, "Title cannot exceed 200 characters"),

    slug: z
        .string()
        .trim()
        .min(1, "Slug is required")
        .regex(
            /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
            "Slug must contain only lowercase letters, numbers and hyphens"
        ),

    category: z.enum(["DSA", "CP"]),

    difficulty: z.enum(["Easy", "Medium", "Hard"]),

    rating: z
        .number()
        .int()
        .positive()
        .optional(),

    dailyDate: z.coerce.date(),

    isPublished: z.boolean().optional(),

    platform: z
        .string()
        .trim()
        .min(1, "Platform is required"),

    externalLink: z
        .string()
        .trim()
        .url("External link must be a valid URL"),

    statement: z
        .string()
        .trim()
        .min(1, "Problem statement is required"),

    examples: z
        .array(exampleSchema)
        .optional(),

    constraints: z
        .array(z.string().trim())
        .optional(),

    tags: z
        .array(z.string().trim())
        .optional(),

    topics: z
        .array(z.string().trim())
        .optional()
});

const createDSAProblemSchema = baseProblemSchema.extend({
    category: z.literal("DSA"),

    brute: solutionSchema,
    better: solutionSchema,
    optimal: solutionSchema
});

const createCPProblemSchema = baseProblemSchema.extend({
    category: z.literal("CP"),

    intuition: z.string().trim(),
    approach: z.string().trim(),
    code: z.string(),
    timeComplexity: z.string().trim(),
    spaceComplexity: z.string().trim()
});

const createProblemSchema = z.discriminatedUnion(
    "category",
    [
        createDSAProblemSchema,
        createCPProblemSchema
    ]
);

const problemHistoryQuerySchema = z
    .object({
        search: z
            .string()
            .trim()
            .optional(),

        category: z
            .enum(["DSA", "CP"])
            .optional(),

        difficulty: z
            .enum(["Easy", "Medium", "Hard"])
            .optional(),

        platform: z
            .string()
            .trim()
            .optional(),

        ratingMin: z
            .coerce
            .number()
            .int()
            .positive()
            .optional(),

        ratingMax: z
            .coerce
            .number()
            .int()
            .positive()
            .optional(),

        topic: z
            .string()
            .trim()
            .optional(),

        tag: z
            .string()
            .trim()
            .optional(),

        dateFrom: z
            .coerce
            .date()
            .optional(),

        dateTo: z
            .coerce
            .date()
            .optional(),

        sort: z
            .enum([
                "newest",
                "oldest",
                "ratingAsc",
                "ratingDesc"
            ])
            .default("newest"),

        page: z
            .coerce
            .number()
            .int()
            .positive()
            .default(1),

        limit: z
            .coerce
            .number()
            .int()
            .min(1)
            .max(100)
            .default(20)
    })
    .superRefine((data, ctx) => {

        if (
            data.ratingMin !== undefined &&
            data.ratingMax !== undefined &&
            data.ratingMin > data.ratingMax
        ) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["ratingMin"],
                message:
                    "Minimum rating cannot be greater than maximum rating"
            });
        }

        if (
            data.dateFrom !== undefined &&
            data.dateTo !== undefined &&
            data.dateFrom > data.dateTo
        ) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["dateFrom"],
                message:
                    "Start date cannot be later than end date"
            });
        }
    });

module.exports = {
    createProblemSchema,
    problemHistoryQuerySchema,
};