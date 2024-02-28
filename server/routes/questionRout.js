const express = require("express");
const router = express.Router();

//question controller
const {postQuestions,allQuestions,singleQuestions} = require("../controller/questionController");

//post quuestion routes
router.post("/ask", postQuestions);

//all questions routes
router.get("/all_questions", allQuestions);

//single questions routes
//router.get("/question/:questions_id", singleQuestions);
router.get("/question/:questionid", singleQuestions);


module.exports = router;


