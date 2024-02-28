import React, { useState } from "react";
import axios from "./axiosConfig";
import './AskQuestion.css';
// import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleRightTwoToneIcon from "@mui/icons-material/ArrowCircleRightTwoTone";
import { useNavigate } from "react-router-dom";
function AskQuestion() {
	const [newQuestion, setQuestion] = useState("");
	const [description, setDescription] = useState("");
	const navigate = useNavigate();
	// const postQuestion = () => {
	// 	navigate("/ask");
	//   };

	const PostQuestion = async () => {
		try {
			const token = localStorage.getItem("token");
			const response = await axios.post(
				"/questions/ask",
				{
					title: newQuestion,
					description: description,
					
				},
				{
					headers: {
						Authorization: "Bearer " + token,
					},
				}
			);
			alert("Question posted successfully.");
			navigate("/home");
		} catch (error) {
			console.log(error);
			alert("An error occurred while posting the question.");
		}
	};

	return (
		<div className="tocenter">
			<div className="purples">
				<h1>Steps To Write A Good Question.</h1>
				<h3>
					<ArrowCircleRightTwoToneIcon className="topurpel" />
					Summarize your problems in a one-line-title.
				</h3>
				<h3>
					<ArrowCircleRightTwoToneIcon className="topurpel" />
					Describe your problem in more detail.
				</h3>
				<h3>
					<ArrowCircleRightTwoToneIcon className="topurpel" />
					Review your question and post it here.
				</h3>
				<h1 classname="tocenter">
					
					Post Your Question
				</h1>
			</div>
			<form action="#">
				<div>
					<input
						type="text"
						placeholder="Question title"
						onChange={(e) => setQuestion(e.target.value)}
						style={{ width: "90%", height: "50px", margin: "10px" }}
					/>
				</div>
				<div>
					<input
						style={{ width: "90%", height: "100px", margin: "10px" }}
						type="text"
						placeholder="Question details..."
						onChange={(e) => setDescription(e.target.value)}
						// rows={4}
					/>
				</div>
				<button
					onClick={PostQuestion}
					className="blue"
					style={{ margin: "10px" }}
				>
					PostQuestion
				</button>
			</form>
		</div>
	);
}

export default AskQuestion;
