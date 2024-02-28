// import React, { useEffect, useState } from "react";
import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/main/Home";
import SharedPage from "./components/main/SharedPage";
import NotFound from "./components/main/NotFound";
// import AllQuestions from "./components/home/AllQuestions";
import { stateValue } from "./components/main/context";
// import SingleQuestion from "./components/home/SingleQuestion";
// import AskQuestion from "./components/home/AskQuestion";
import Homes from "./components/home/Homes";
import SingleQuestion from "./components/home/SingleQuestion";
import AskQuestion from "./components/home/AskQuestion";
export const AppState = createContext();
function App() {
	let [userData, setUserData] = useState("");
	const token = localStorage.getItem("token");
	console.log("this is the token", token);
	let navigate = useNavigate();
	useEffect(() => {
		fetch("http://localhost:4000/api/users/check", {
			headers: {
				authorization: "Bearer " + token,
			},
		})
			.then((data) => data.json())
			.then((data) => {
				setUserData(data.username);
				if (
					data.msg === "token not provide" ||
					data.msg === "Authentication Invalid"
				)
					navigate("/home");
			})
			.catch((error) => {
				// navigate("/");
			});
	}, []);

	return (
		<>
			<stateValue.Provider value={{ userData, setUserData }}>
				<Routes>
					<Route path="/" element={<SharedPage />}>
						<Route path="/" element={<Home />} />
						<Route path="/home" element={<Homes />} />
						<Route path="/question" element={<SingleQuestion />} />
						<Route path="/ask" element={<AskQuestion />} /> 
						<Route path="*" element={<NotFound />} />
						{/* <Route
							path="/single-question/:questions-id"
							element={<SingleQuestion />}
						/>  */}
						{/* <Route path="/AskQuestion" element={<AskQuestion />} />  */}
					</Route>
				</Routes>
			</stateValue.Provider>
		</>
	);
}

export default App;
