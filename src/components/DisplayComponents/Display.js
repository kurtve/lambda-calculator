import React from "react";

const Display = (props) => {

	return (
		<div className='display-container'>
			<code>{props.value}</code>
		</div>
	);

};

export default Display;
