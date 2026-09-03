const jwt = require("jsonwebtoken");

const ApiError = require("../utils/ApiError");
const asyncHandler = require("./assyncHandler");
const User = require("../modules/user/user.model");

const authenticate = asyncHandler(async (req, res, next) => {
    const token = req.cookies?.accessToken;

    if (!token) {
        throw new ApiError(
            401,
            "Authentication required"
        );
    }

    const decodedToken = jwt.verify(
        token,
        process.env.JWT_SECRET
    );

    const user = await User.findById(
        decodedToken.userId
    ).select("-password");

    if (!user) {
        throw new ApiError(
            401,
            "User no longer exists"
        );
    }

    req.user = user;

    next();
});

module.exports = authenticate;