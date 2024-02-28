const pool = require("../db/dbConfig");
const { StatusCodes } = require("http-status-codes");
const uuid = require('uuid');
//post questions

async function postQuestions(req, res) {
  const { title, description, tag } = req.body;

  if (!title || !description || !tag) {
    return res.status(400).json({ msg: "Please provide all information" });
  }

  try {
    const userid = req.user.userid;
    const questionid = uuid.v4();
    // console.log(questionid);

    await pool.query(
      "INSERT INTO questions (questionid, title, description, tag, userid) VALUES (?, ?, ?, ?, ?)",
      [questionid, title, description, tag, userid]
    );
    return res
      .status(StatusCodes.CREATED)
      .json({ msg: "Question posted successfully" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Something wents wrong, please try again later" });
  }
}

//all questions

async function allQuestions(req,res){

	try {
		//query all questions from the questions database
		const [allQuestion] = await pool.query(
			// "SELECT q.questions_id ,q.tag ,u.user_name  FROM questions q JOIN newusers u ON q.user_id = u.user_id ORDER BY id DESC;"
    `SELECT q.questionid, q.title, u.username FROM questions q JOIN users u ON q.userid = u.userid  ORDER BY id DESC;`
		);
		return res.status(200).json({ allQuestion });
	} catch (error) {

		res.status(500).json({ msg: "Something went wrong, please try again" });
	}
}
// single questions

async function singleQuestions(req, res) {

  const questionId = req.params.questions_id;
  if (!req.params.questions_id) {
  return res.status(400).json({ msg: "single question id not provided" });
  }
// console.log(questionId)
  try {
    const [oneQuestion] = await pool.query(
      "SELECT * FROM questions WHERE questionid = ?",
      [questionId]
    );
    if (oneQuestion.length == 0) {
      return res
        .status(400)
        .json({ msg: "question not found with the provided id" });
    } else {
      //if the provided question id is exist on the database return the data
      res.send({ oneQuestion });
    }
  }catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Something went wrong, please try again" });
  }   
}

module.exports = { postQuestions, allQuestions, singleQuestions };
