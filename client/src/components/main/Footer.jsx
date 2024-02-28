import React from 'react';
import "./Footer.css";
import img from "../image/img3.png";
function Footer() {
return (
		<div className="mainFooterWrapper">
			<div>
				<img
					src={img}
					alt="evangadi logo"
				/>
			</div>
			<div>
				<ul className="footer">
					<li>
						<h3>Useful Link</h3>
					</li>
					<div className="color">
						<li>How it works</li>
						<li>Terms of Service</li>
						<li>Privacy policy</li>
					</div>
				</ul>
			</div>

			<div>
				<ul className="footer">
					<li>
						<h3>Contact Info</h3>
					</li>
					<div className="color">
						<li>Evangadi Networks</li>
						<li>support@evangadi.com</li>
						<li>+1-202-386-2702</li>
					</div>
				</ul>
			</div>
		</div>
	);
}

export default Footer;
