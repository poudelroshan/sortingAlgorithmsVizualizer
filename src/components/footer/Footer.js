import { React } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";

import "./Footer.css";

const Footer = (props) => {
	return (
		<div id="footer">
			<div>
				Made with <FavoriteIcon color="warning" /> by{" "}
				<a href="https://iamroshanpoudel.com">Roshan Poudel</a> using React.js,
				Material UI, and Github Pages
			</div>
		</div>
	);
};

export default Footer;
