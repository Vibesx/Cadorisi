import React from "react";

import classes from "./HeaderButton.module.css";

const HeaderButton = (props) => {
	return (
		<React.Fragment>
			<div
				className={`${classes[props.className]} ${classes.button}`}
				onClick={props.onButtonClick}
			>
				{props.text}
			</div>
		</React.Fragment>
	);
};

export default HeaderButton;
