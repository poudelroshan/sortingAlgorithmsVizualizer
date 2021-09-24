import { React } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";

import "./Footer.css";

const Footer = (props) => {
	return (
		<div id="footer">
			<div>
				Please note that this project is still under construction. The
				implementation of Merge and Quick Sort has not been completed yet.
			</div>
			<div>
				Made with <FavoriteIcon color="warning" /> by
				<a href="https://iamroshanpoudel.com"> Roshan</a> using React.js and
				Material UI
			</div>
		</div>
	);
};

export default Footer;
