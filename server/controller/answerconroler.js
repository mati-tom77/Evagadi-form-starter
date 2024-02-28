const pool = require("../db/dbConfig");
const { StatusCodes } = require("http-status-codes");

//post answer
const post_answer = async (req, res) => {
  const { answer } = req.body;
  const question_id = req.params.questionid;
  const { userid } = req.user;
  if (!answer) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "provide answer field" });
  }
  try {
    await pool.query(
      "INSERT INTO answer(questionid,userid, answer  ) value(?,?,?)",
      [question_id, userid, answer]
    );

    return res
      .status(StatusCodes.OK)
      .json({ msg: "Answer posted successfully" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "somethin went to wrong try again later" });
  }
};

//all answer
const all_answer = async (req, res) => {
  const question_id = req.params.answerid;
  try {
    const [allAnswer] = await pool.query(
      // "SELECT answer, userid FROM answers JOIN users ON answer.userid = users.userid WHERE questionid = ? ",
      `SELECT answers.answer, users.username FROM answers INNER JOIN users ON answers.userid = users.userid WHERE answers.question_id = ?`,
      [question_id]
    );
    return res.status(StatusCodes.OK).json({ allAnswer });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "somethin went to wrong try again later" });
  }
};

module.exports = { post_answer, all_answer };
