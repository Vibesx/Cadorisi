import React from "react";

import classes from "./Header.module.css";
import Logo from "./Logo";
import HeaderButton from "./HeaderButton";

const MAIN_TITLE = "Cadorisi";
const OFERTE_DE_SEZON = "Oferte de sezon";
const ARANJAMENTE_FLORALE = "Aranjamente florale";
const ACASA = "Acasa";
const CONTACT = "Contact";

const Header = () => {
	const onOferteDeSezonHandler = () => {};
	const onAranjamenteFloraleHandler = () => {};
	const onHomeHandler = () => {};
	const onContactHandler = () => {};
	const onMainTitleHandler = () => {};
	return (
		<React.Fragment>
			<header className={classes.header}>
				<Logo></Logo>
				<HeaderButton
					className={"buttonOferte"}
					onButtonClick={onOferteDeSezonHandler}
					text={OFERTE_DE_SEZON}
				></HeaderButton>
				<HeaderButton
					className={"buttonAranjamente"}
					onButtonClick={onAranjamenteFloraleHandler}
					text={ARANJAMENTE_FLORALE}
				></HeaderButton>
				<HeaderButton
					className={"mainTitle"}
					onButtonClick={onMainTitleHandler}
					text={MAIN_TITLE}
				></HeaderButton>
				<HeaderButton
					className={"buttonHome"}
					onButtonClick={onHomeHandler}
					text={ACASA}
				></HeaderButton>
				<HeaderButton
					className={"buttonContact"}
					onButtonClick={onContactHandler}
					text={CONTACT}
				></HeaderButton>
			</header>
		</React.Fragment>
	);
};

export default Header;
