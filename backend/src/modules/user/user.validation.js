const { z } = require("zod");

const updateProfileSchema = z.object({
    college: z
        .string()
        .trim()
        .max(100, "College name cannot exceed 100 characters")
        .optional(),

    bio: z
        .string()
        .trim()
        .max(300, "Bio cannot exceed 300 characters")
        .optional(),

    avatar: z
        .string()
        .trim()
        .url("Avatar must be a valid URL")
        .optional()
});

module.exports = {
    updateProfileSchema
};