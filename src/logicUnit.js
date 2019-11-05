// The function contains all the logic for our Calculator's FSM

const logicUnit = (keypress, currentFSM) => {

	const maxlen = 14;  // maximum capacity of the display

	// the 'state' of the calculator FSM:
	const { value, memory, operand, append } = currentFSM;

	let newValue = value;
	let newMemory = memory;
	let newOperand = operand;
	let newAppend = append;


	// the alphabet of our FSM consists of all the keys on the keypad
	// based on the current state and the key pressed, determine the new state
	switch (keypress) {

		// return everything to initial state
		case('clear'):
			newValue = '0';
			newMemory = null;
			newOperand = null;
			newAppend = true;
		break;


		// change the sign ov the display value
		case('sign'):
			if (value !== '0') {
				if (value.substring(0, 1) === '-') {
					newValue = value.substring(1);
				} else {
					if (value.length < maxlen) {
						newValue = '-' + value;
					}
				}
			}
		break;


		case('percent'):
			// TODO!
			console.log('percent!');
		break;


		// if there is an operation pending, do that first
		// save the just-entered operand and (possibly updated) display to memory
		case('divide'):
		case('times'):
		case('minus'):
		case('plus'):
			newAppend = false;
			if (operand != null) {
				let valNum = Number.parseFloat(value);
				let memNum = Number.parseFloat(memory);
				let newNum = 0;
				switch (operand) {
					case('plus'):
						newNum = memNum + valNum;
					break;
					case('minus'):
						newNum = memNum - valNum;
					break;
					case('times'):
						newNum = memNum * valNum;
					break;
					case('divide'):
						newNum = memNum / valNum;
					break;
					default:
					break;
				}
				newValue = newNum.toString();
				if (newValue.length > maxlen) {
					newValue = newValue.substring(0, maxlen - 1);
				}
			}
			newMemory = newValue;
			newOperand = keypress;
		break;


		// perform any pending operations
		// save the (possibly updated) display to memory
		case('equals'):
			newAppend = false;
			if (operand != null) {
				let valNum = Number.parseFloat(value);
				let memNum = Number.parseFloat(memory);
				let newNum = 0;
				switch (operand) {
					case('plus'):
						newNum = memNum + valNum;
					break;
					case('minus'):
						newNum = memNum - valNum;
					break;
					case('times'):
						newNum = memNum * valNum;
					break;
					case('divide'):
						newNum = memNum / valNum;
					break;
					default:
					break;
				}
				newValue = newNum.toString();
				if (newValue.length > maxlen) {
					newValue = newValue.substring(0, maxlen - 1);
				}
				newMemory = null;
				newOperand = null;
			}
		break;


		// handle radix point
		case('point'):
			if (append === false) {
				newAppend = true;
				newValue = '0.';
			} else if (!value.includes('.') && value.length < maxlen) {
				newValue = value + '.';
			}
		break;


		// handle a digit
		case('digit0'):
		case('digit1'):
		case('digit2'):
		case('digit3'):
		case('digit4'):
		case('digit5'):
		case('digit6'):
		case('digit7'):
		case('digit8'):
		case('digit9'):
			let newdigit = keypress.substring(5, 6);
			if (append === false) {
				newAppend = true;
				newValue = newdigit;
			} else if (value === '0') {
				newValue = newdigit;
			} else if (value.length < maxlen) {
				newValue = value + newdigit;
			}
		break;


		// oops! something we forgot to account for!
		default:
			console.log(`ERROR: no handler routine for "${keypress}"`);
		break;

	} // end of switch statement



	const newFSM = {value: newValue, memory: newMemory, operand: newOperand, append: newAppend};

	return newFSM;
};


export default logicUnit;
