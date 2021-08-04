import { React, useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";

import "./Navbar.css";

const Navbar = (props) => {
	// starts playing the sorting algorithm
	const sortArrayHandler = () => {
		props.startSorting();
	};

	// generates a new random array
	const generateNewArrayHandler = () => {
		props.generateNewArray();
	};

	// lets the user change size of array and speed of sorting
	const handleArraySizeAndSpeedChange = (event, newValue) => {
		props.setValue(newValue);
	};

	return (
		<div id="nav-bar">
			<div id="title">
				<h1>Sorting Algorithm Visualizer</h1>
			</div>
			<div id="toolbar">
				<div>
					<Typography id="non-linear-slider" gutterBottom>
						Array size & sorting speed
					</Typography>
					<Slider
						value={50}
						min={5}
						step={5}
						max={100}
						// getAriaValueText={valueLabelFormat}
						// valueLabelFormat={valueLabelFormat}
						// onChange={}
						valueLabelDisplay="auto"
						aria-labelledby="array size and sorting speed slider"
					/>
				</div>
				<Button variant="contained" onClick={generateNewArrayHandler}>
					Generate New Array
				</Button>
				<Button
					variant="contained"
					color="secondary"
					onClick={sortArrayHandler}
				>
					Sort!
				</Button>
			</div>
		</div>
	);
};

export default Navbar;
