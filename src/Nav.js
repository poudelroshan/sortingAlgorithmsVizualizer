import React from "react";

const Nav = (props) => {
	const sortArrayHandler = () => {
		console.log(props.arrayState);
		let array = [...props.arrayState];
		array.sort((a, b) => a - b);
		props.setArrayState(array);
	};
	return (
		<div id="nav-bar">
			<h1>Sorting Algorithm Visualizer</h1>
			<button id="sort-btn" onClick={sortArrayHandler}>
				Sort!
			</button>
		</div>
	);
};

export default Nav;
