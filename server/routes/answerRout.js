const express = require("express");
const router = express.Router();

const { post_answer, all_answer } = require("../controller/answerconroler");

router.post("/postanswer/:questionid", post_answer);
router.get("/allAnswer/:answerid", all_answer);

module.exports = router;
