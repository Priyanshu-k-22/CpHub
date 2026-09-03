const ApiError = require("../utils/ApiError");
const validate = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            const errors = {};
            result.error.issues.forEach((issue) => {
                const field = issue.path[0];
                if(field && !errors[field]){
                    errors[field] = issue.message;
                }
            });
            return next(
                new ApiError(
                    400,
                    "Validation failed",
                    errors
                )
            );
        }

        req.body = result.data;

        next();
    };
};

module.exports = validate;