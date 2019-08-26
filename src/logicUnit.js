// The function contains all the logic for our Calculator's FSM

const logicUnit = (keypress, currentFSM) => {

	// let { currentValue, currentMemory, currentOperand, currentAppend } = currentFSM;

	const newValue = Math.floor(Math.random() * 10000);

	const newFSM = {...currentFSM, value: newValue};

	return newFSM;
};


export default logicUnit;
