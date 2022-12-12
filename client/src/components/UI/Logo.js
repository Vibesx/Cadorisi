import React from "react";

import classes from "./Logo.module.css";

const Logo = () => {
	// TODO use Image component?
	return (
		<div>
			<img
				src={require("../../resources/images/Logo.png")}
				alt="Cadorisi Logo"
				className={classes.logo}
			/>
		</div>
	);
};

export default Logo;
