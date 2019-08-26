import React, { useState } from "react";
import "./App.css";

// components
import Logo from "./components/DisplayComponents/Logo.js";
import Display from "./components/DisplayComponents/Display.js";
import Keypad from "./components/KeypadComponents/Keypad.js";


// FSM logic for keypad
import logicUnit from "./logicUnit.js";


function App() {

	// the calculator's FSM state consists of 4 elements:
	// value: the display value
	// memory: the value in memory for a calculation in progress, if any
	// operand: the pending operand to be executed once the new value is entered, if any
	// append: digit presses get appended to display value? (or else they start a new value)
	const initialFSM = {
		value: 0,
		memory: null,
		operand: null,
		append: true
	};

	const [FSM, updateFSM] = useState(initialFSM);


	// handle all keypresses by sending them to the logic unit
	const clickHandler = (keyname) => {
		const newState = logicUnit(keyname, FSM);
		updateFSM(newState);
	};

	return (
		<div className="container">
			<Logo />
			<Display value={FSM.value} />
			<Keypad handler={clickHandler} />
		</div>
	);
}

export default App;
