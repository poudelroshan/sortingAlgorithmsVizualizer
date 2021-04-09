import React from "react";
import App from "./App";

const Array = (props) => {
	let max = 100;
	return (
		<div id="array-display">
			{props.arrayState.map((num, index) => {
				let height = (num / max) * 75 + "vh";
				return (
					<div className="bar" style={{ height: height }} key={index}>
						{num}
					</div>
				);
			})}
		</div>
	);
};

export default Array;
