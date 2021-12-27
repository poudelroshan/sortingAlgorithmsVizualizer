const BLUE = 0,
	YELLOW = 1,
	PURPLE = 2,
	RED = 3,
	GREEN = 4;

const MergeSort = (array, arraySteps, colorSteps) => {
	arraySteps = [...mergeSortHelper(array)];
	colorSteps = [...mergeSortHelper(array)];
	console.log(colorSteps);
};

const mergeSortHelper = (array, startIndex, endIndex) => {
	if (endIndex - startIndex == 0) return array;
	const midIndex = Math.floor(array.length / 2);
	const leftArrayStartIndex = startIndex,
		leftArrayEndIndex = startIndex + midIndex;
	mergeSortHelper(array.slice(0, midIndex));
	const rightArr = mergeSortHelper(array.slice(midIndex, array.length));
	const outputArray = [];
	merge(leftArr, rightArr, outputArray);
	return outputArray;
};

const merge = (leftArray, rightArray, targetArray) => {
	console.log(`merging left: ${leftArray} with right: ${rightArray}`);
	let leftPointer = 0,
		rightPointer = 0;

	while (leftPointer < leftArray.length && rightPointer < rightArray.length) {
		if (leftArray[leftPointer] <= rightArray[rightPointer])
			targetArray.push(leftArray[leftPointer++]);
		else targetArray.push(rightArray[rightPointer++]);
	}

	let pointer = leftPointer < leftArray.length ? leftPointer : rightPointer;
	let array = leftPointer < leftArray.length ? leftArray : rightArray;
	while (pointer < array.length) targetArray.push(array[pointer++]);
};

export default MergeSort;
