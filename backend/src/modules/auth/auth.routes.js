const express = require("express");
const router = express.Router();

const authController = require("./auth.controller");
const validate = require("../../middlewares/validate.middleware");
const validationSchema = require("./auth.validation");
const authenticate = require("../../middlewares/auth.middleware");


router.post(
    "/register",
    validate(validationSchema.registerSchema),
    authController.register
);

router.post(
    "/login",
    validate(validationSchema.loginSchema),
    authController.login
);

router.post(
    "/logout",
    authenticate,
    authController.logout
);

router.get(
    "/me",
    authenticate,
    authController.getCurrentUser
);


module.exports = router;