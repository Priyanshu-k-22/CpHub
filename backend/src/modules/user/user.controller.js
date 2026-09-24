const asyncHandler = require("../../middlewares/asyncHandler");
const ApiResponse = require("../../utils/ApiResponse");

const userService = require("./user.service");

const getMe = asyncHandler(async(req, res)=>{

    const user = await userService.getCurrentUser(req.user._id);

    return res.status(200).json(
        new ApiResponse(200, 
            user,
            "User Profile fetched successfully"
        )
    );
});

const updateMe = asyncHandler(async (req, res) => {
    const user = await userService.updateProfile(
        req.user._id,
        req.body
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            user,
            "User profile updated successfully"
        )
    );
});

module.exports = {
    getMe,
    updateMe,
};