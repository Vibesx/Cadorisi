import React from "react";

import classes from "./Image.module.css";

const Image = (props) => {
	return (
		<img
			src={props.source}
			alt={props.title}
			className={classes[props.styling]}
		/>
	);
};

export default Image;
