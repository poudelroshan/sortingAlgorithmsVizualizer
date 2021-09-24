const BLUE = 0,
	YELLOW = 1,
	PURPLE = 2,
	RED = 3,
	GREEN = 4;

const MergeSort = (array, arraySteps, colorSteps) => {
	// let colorKey = [...colorSteps[0]];
	mergeSortHelper(array);
};

const mergeSortHelper = (array) => {
	if (array.length <= 1) return array;

	const mid = Math.floor(array.length / 2);
	const leftArr = array.slice(0, mid);
	const rightArr = array.slice(mid + 1, array.length - 1);
	merge(leftArr, rightArr, array);
	return array;
};

const merge = (leftArr, rightArr, targetArr) => {
	let pointer = 0,
		leftPtr = 0,
		rightPtr = 0;
	while (leftPtr < leftArr.length && rightPtr < rightArr.length) {
		if (leftArr[leftPtr] <= rightArr[rightPtr])
			targetArr[pointer++] = leftArr[leftPtr++];
		else targetArr[pointer++] = rightArr[rightPtr++];
	}

	while (leftPtr < leftArr.length) targetArr[pointer++] = leftArr[leftPtr++];
	while (rightPtr < rightArr.length) targetArr[pointer++] = rightArr[pointer++];
};

export default MergeSort;
