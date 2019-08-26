// The function contains all the logic for our Calculator's FSM

const logicUnit = (keypress, currentFSM) => {

	const { currentValue, currentMemory, currentOperand, currentAppend } = currentFSM;

	let newValue = currentValue;
	let newMemory = currentMemory;
	let newOperand = currentOperand;
	let newAppend = currentAppend;


	// we'll add some functionality later, but for now just set a random value
	newValue = Math.floor(Math.random() * 10000);

	// we can implement at least one key just to show this function works
	if (keypress === 'clear') {
		newValue = '0';
		newMemory = null;
		newOperand = null;
		newAppend = true;
	}


	const newFSM = {value: newValue, memory: newMemory, operand: newOperand, append: newAppend};

	return newFSM;
};


export default logicUnit;
