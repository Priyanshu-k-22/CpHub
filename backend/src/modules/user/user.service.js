const User = require("./user.model");

const getCurrentUser = async (userId) => {
    const user = await User.findById(userId)
        .select("-password");

    return user;
};

const updateProfile = async (
    userId,
    { college, bio, avatar }
) => {
    const updateData = {};

    if (college !== undefined) {
        updateData["profile.college"] = college;
    }

    if (bio !== undefined) {
        updateData["profile.bio"] = bio;
    }

    if (avatar !== undefined) {
        updateData["profile.avatar"] = avatar;
    }

    const user = await User.findByIdAndUpdate(
        userId,
        {
            $set: updateData
        },
        {
            new: true,
            runValidators: true
        }
    ).select("-password");

    return user;
};

module.exports = {
    getCurrentUser,
    updateProfile
};