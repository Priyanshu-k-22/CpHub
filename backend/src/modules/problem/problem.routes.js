const express = require("express");

const authenticate = require("../../middlewares/auth.middleware");
const validate = require("../../middlewares/validate.middleware");

const {
    createProblemSchema,
    problemHistoryQuerySchema
} = require("./problem.validation");
const {
    create,
    getDaily,
    getById,
    getHistory
} = require("./problem.controller");

const router = express.Router();


/*
    Create a new problem

    For now authentication is required.
    Later we can add admin/creator authorization.
*/
router.post(
    "/",
    authenticate,
    validate(createProblemSchema),
    create
);


/*
    Get today's problems

    Public endpoint.
    Students should be able to see daily problems
    without needing to create an additional request
    just for authentication.
*/
router.get(
    "/daily",
    getDaily
);


/*
    Get problem history

    Public endpoint.
*/
router.get(
    "/history",
    getHistory
);


/*
    Get a single problem

    Public endpoint.
*/
router.get(
    "/:id",
    getById
);


module.exports = router;