const express = require("express");

const {
    getAllContests
} = require("./contest.controller");

const router = express.Router();


/*
|--------------------------------------------------------------------------
| Contest Routes
|--------------------------------------------------------------------------
*/

router.get(
    "/",
    getAllContests
);


module.exports = router;