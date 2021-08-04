import "./App.css";
import Bar from "./components/bar/Bar";
import Navbar from "./components/nav/Navbar";
import { useState, useEffect } from "react";
import InsertionSort from "./algorithms/InsertionSort";

const App = () => {
	// States
	const [array, setArray] = useState([]);
	const [arraySteps, setArraySteps] = useState([]);
	const [colorKey, setColorKey] = useState([]);
	const [colorSteps, setColorSteps] = useState([]);
	const [arraySize, setArraySize] = useState(100);
	const [currentStep, setCurrentStep] = useState(0);
	const [delay, setDelay] = useState(1);
	const [algorithm, setAlgorithm] = useState("Insertion Sort");
	const [timeouts, setTimeouts] = useState([]);
	const [startGeneratingSteps, setStartGeneratingSteps] = useState(false);

	// returns an array of n numbers where n =arraySize
	const generateRandomArray = () => {
		let randomArray = [];
		for (let i = 0; i < arraySize; i++) {
			// let num = Math.floor(Math.random() * 100);

			randomArray.push(Math.floor(Math.random() * 100) + 10);
		}
		return randomArray;
	};

	// clear color key and set it to default
	// TODO: Refactor this
	const clearKey = () => {
		let blankKey = new Array(arraySize).fill(0);
		setColorKey(blankKey);
		setColorSteps([blankKey]);
	};

	// generates steps
	// TODO: Refactor this
	const generateSteps = () => {
		console.log("Generating steps...");
		let arr = [...array];
		let steps = [...arraySteps];
		let clrSteps = [...colorSteps];
		InsertionSort(arr, steps, clrSteps);
		setArraySteps(steps);
		setColorSteps(clrSteps);
		setStartGeneratingSteps(false); // after generating steps, set it to false
	};

	// Initializes the app by generating random array
	const initialize = () => {
		console.log("Initializing...");
		const newArray = generateRandomArray();
		setArray(newArray);
		setArraySteps([newArray]);
		setCurrentStep(0);
		clearKey();
		clearTimeouts();
		setStartGeneratingSteps(true); //invoke start generating steps
	};

	// clear timeouts
	const clearTimeouts = () => {
		timeouts.forEach((timeout) => clearTimeout(timeout));
		setTimeouts([]);
	};

	// start playing sort animation
	const startSorting = () => {
		let timeoutsArray = [];
		let currStep = currentStep;
		// If already at sorted state, just return back
		if (currentStep == arraySteps.length - 1) {
			return false;
		}

		for (let i = 0; i < arraySteps.length; i++) {
			let timeout = setTimeout(() => {
				setArray([...arraySteps[i]]);
				setCurrentStep(currStep++);
			}, delay * (i + 1));
			timeoutsArray.push(timeout);
		}
		setTimeouts(timeoutsArray);
	};

	// bars jsx object
	const bars = array.map((number, index) => {
		return (
			<Bar
				key={index}
				index={index}
				length={number}
				width={5}
				color={colorSteps[currentStep][index]}
			/>
		);
	});

	const pause = () => {
		const pausedStep = currentStep;
		clearTimeouts();
		setCurrentStep(pausedStep);
		setArray(arraySteps[pausedStep]);
	};

	// When the document loads, initialize with new array
	useEffect(() => {
		initialize();
	}, []);

	// when the array is done initializing, generate steps
	useEffect(() => {
		if (startGeneratingSteps) {
			generateSteps();
		}
	}, [startGeneratingSteps]);

	return (
		<div className="App">
			<Navbar
				startSorting={startSorting}
				currentStep={currentStep}
				generateNewArray={initialize}
			/>
			<div className="array-display">{bars}</div>

			{/* <button onClick={initialize}>Generate new array</button>
			<button onClick={pause}> Pause</button> */}
		</div>
	);
};

export default App;
