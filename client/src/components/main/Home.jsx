import React from 'react';
import "./Home.css";
import About from './About';
import RegisterAndLogin from './RegisterAndLogin';
function Home() {
return (
		<div>
			<div className="mainHomeWrapper">
				<div className="homeComponents">
					<RegisterAndLogin />
					<About />
				</div>
			</div>
		</div>
	);
}

export default Home;
