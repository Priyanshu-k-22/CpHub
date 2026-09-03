const asyncHandler = require("../../middlewares/assyncHandler");
const ApiResponse = require("../../utils/ApiResponse");

const authSrevice = require("./auth.service");

const register = asyncHandler(async(req, res)=>{

    const {username, email, password} = req.body;

    const user = await authSrevice.registerUser({
        username,
        email,
        password
    });

    res.status(201).json(
        new ApiResponse(
            201,
            user,
            "User Registered successfully"
        )
    );
});

const login = asyncHandler(async(req, res)=>{

    const {email, password} = req.body;

    const {user, token} = await authSrevice.loginUser({
        email,
        password
    });

    return res.status(200)
        .cookie("accessToken", token,{
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax"
        })
        .json(
            new ApiResponse(
                200,
                {user},
                "Login Successful"
            )
        );

});

const getCurrentUser = asyncHandler(async (req, res) => {
    return res.status(200).json(
        new ApiResponse(
            200,
            req.user,
            "Current user fetched successfully"
        )
    );
});

const logout = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .clearCookie("accessToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax"
        })
        .json(
            new ApiResponse(
                200,
                null,
                "Logout successful"
            )
        );
});


module.exports = {
    register,
    login,
    getCurrentUser,
    logout,
}