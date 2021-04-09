import logo from "./logo.svg";
import "./App.css";
import Array from "./Array";
import Nav from "./Nav";
import { useState } from "react";

// Adds n random numbers to the array
const initializeArray = () => {
	let array = [];
	for (let i = 0; i < 20; i++) {
		array.push(Math.floor(Math.random() * 100));
	}
	return array;
};

const App = () => {
	let array = initializeArray();
	const [arrayState, setArrayState] = useState(array);

	return (
		<div className="App">
			<Nav arrayState={arrayState} setArrayState={setArrayState} />
			<Array arrayState={arrayState} setArrayState={setArrayState} />
		</div>
	);
};

export default App;
