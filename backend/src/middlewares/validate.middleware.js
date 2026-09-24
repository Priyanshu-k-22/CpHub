const ApiError = require("../utils/ApiError");

const validate = (
    schema,
    source = "body"
) => {
    return (req, res, next) => {

        const result = schema.safeParse(
            req[source]
        );

        if (!result.success) {

            const message =
                result.error.issues
                    .map((issue) => issue.message)
                    .join(", ");

            throw new ApiError(
                400,
                message
            );
        }

        req[source] = result.data;

        next();
    };
};

module.exports = validate;