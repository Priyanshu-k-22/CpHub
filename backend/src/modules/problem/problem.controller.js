const asyncHandler = require("../../middlewares/asyncHandler");
const ApiResponse = require("../../utils/ApiResponse");

const {
    createProblem,
    getDailyProblems,
    getProblemById,
    getProblemHistory
} = require("./problem.service");


/*
    Create a new problem
*/
const create = asyncHandler(async (req, res) => {
    const problem = await createProblem(req.body);

    return res.status(201).json(
        new ApiResponse(
            201,
            problem,
            "Problem created successfully"
        )
    );
});


/*
    Get today's daily problems
*/
const getDaily = asyncHandler(async (req, res) => {
    const { category } = req.query;

    const problems = await getDailyProblems({
        category
    });

    return res.status(200).json(
        new ApiResponse(
            200,
            problems,
            "Daily problems fetched successfully"
        )
    );
});


/*
    Get a single problem
*/
const getById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const problem = await getProblemById(id);

    return res.status(200).json(
        new ApiResponse(
            200,
            problem,
            "Problem fetched successfully"
        )
    );
});


/*
    Get problem history
*/
const getHistory = asyncHandler(async (req, res) => {

    const {
        search,
        category,
        difficulty,
        topic,
        tag,
        sort = "newest",
        page = 1,
        limit = 20
    } = req.query;

    const result = await getProblemHistory({
        search,
        category,
        difficulty,
        topic,
        tag,
        sort,
        page: Number(page),
        limit: Number(limit)
    });

    return res.status(200).json(
        new ApiResponse(
            200,
            result,
            "Problem history fetched successfully"
        )
    );
});
module.exports = {
    create,
    getDaily,
    getById,
    getHistory
};