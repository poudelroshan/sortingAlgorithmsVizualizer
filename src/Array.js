import React from "react";
import App from "./App";

const Array = (props) => {
	let max = 100;
	return (
		<div id="array-display">
			{props.arrayState.map((num) => {
				let height = (num / max) * 75 + "vh";
				return (
					<div className="bar" style={{ height: height }}>
						{num}
					</div>
				);
			})}
		</div>
	);
};

export default Array;
