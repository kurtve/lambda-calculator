import React from "react";

import { numberKeys, operandKeys, specialKeys } from "../../data.js";

import Button from "../ButtonComponents/Button.js";


const Keypad = (props) => {

	// keypad is divided into three sections - 
	// special keys, number keys, and operand keys

	return (
		<div className='keypad-container'>
			<div className='numbers-and-specials'>
				<div className='specials'>

					{specialKeys.map((item, idx) => {
						return (
							<Button key={idx} handler={props.handler} char={item.char}
								name={item.name} class={`button ${item.class}`} />
						);
					})}

				</div>
				<div className='numbers'>

					{numberKeys.map((item, idx) => {
						return (
							<Button key={idx} handler={props.handler} char={item.char}
								name={item.name} class={`button ${item.class}`} />
						);
					})}

				</div>
			</div>
			<div className='operands'>

				{operandKeys.map((item, idx) => {
					return (
						<Button key={idx} handler={props.handler} char={item.char}
							name={item.name} class={`button ${item.class}`} />
					);
				})}

			</div>			
		</div>
	);
};

export default Keypad;
