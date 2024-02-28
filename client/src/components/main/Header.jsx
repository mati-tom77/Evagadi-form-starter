import React from 'react';
import "./Header.css";
import img from "../image/img2.png";
import { Link } from 'react-router-dom';

function Header() {
return (
		<div>
			<div className="mainHeaderWrapper">
				<div>
					<Link to="/">
						<img className="evangadiImage" src={img} alt="evangadi logo" />
					</Link>
				</div>
				<div>
					<ul className="lists">
						<li>Home</li>
						<li>How it works</li>
						<div>
							<li>
								<button className="button">SIGN IN</button>
							</li>
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Header;
