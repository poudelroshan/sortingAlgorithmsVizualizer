const InsertionSort = (array, arraySteps, colorSteps) => {
	let colorKey = [...colorSteps[colorSteps.length - 1]];
	for (let i = 0; i < array.length; i++) {
		let min_idx = i;
		arraySteps.push(array.slice()); // show i as current in yellow
		colorKey[i] = 1;
		colorSteps.push(colorKey.slice());
		for (let j = i + 1; j < array.length; j++) {
			min_idx = array[j] < array[min_idx] ? j : min_idx;
			arraySteps.push(array.slice()); // show j in purple
			colorKey[j] = 2;
			colorSteps.push(colorKey.slice());
			colorKey[j] = 0; // revert
		}
		// swap items
		arraySteps.push(array.slice()); // before swap
		colorKey[i] = 3;
		colorKey[min_idx] = 3;
		colorSteps.push(colorKey.slice());

		const temp = array[min_idx];
		array[min_idx] = array[i];
		array[i] = temp;
		arraySteps.push(array.slice()); // after swap
		colorKey[i] = 4;
		colorKey[min_idx] = min_idx != i ? 0 : 3; // revert
		colorSteps.push(colorKey.slice());
	}
	arraySteps.push(array.slice());
	colorSteps.push(colorKey.slice().fill(4));
};

export default InsertionSort;
