import React from "react";

const Nav = (props) => {
	const sortArrayHandler = () => {
		let array = [...props.arrayState];
		array.sort();
		props.setArrayState(array);
		console.log("Array" + array);
		console.log(props.arrayState);
	};
	return (
		<div>
			<h1>Sorting Algorithm Visualizer</h1>
			<button id="sort-btn" onClick={sortArrayHandler}>
				Sort!
			</button>
		</div>
	);
};

export default Nav;
