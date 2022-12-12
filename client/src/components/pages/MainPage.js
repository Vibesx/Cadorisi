import React from "react";
import Button from "../UI/Button";

import Image from "../UI/Image";

import classes from "./MainPage.module.css";

const MainPage = () => {
	const ownerPhoto = require("../../resources/images/photo_owner.png");
	const leftFlowersPhoto = require("../../resources/images/flori3.png");
	const rightFlowersPhoto = require("../../resources/images/flori1.png");

	const onShopNowHandler = () => {};
	return (
		<React.Fragment>
			<div className={classes.photoOwnerBackground}></div>
			<h1 className={classes.motto}>Decoratiuni cu fain</h1>
			<p className={classes.description}>
				Ocazia perfecta pentru a oferi flori celor dragi este in fiecare
				zi.
			</p>
			<Image
				styling={"mainPageOwnerPhoto"}
				source={ownerPhoto}
				title={"Owner Photo"}
			></Image>
			<Image
				styling={"mainPageLeftFlowers"}
				source={leftFlowersPhoto}
				title={"Left Flowers"}
			></Image>
			<Image
				styling={"mainPageRightFlowers"}
				source={rightFlowersPhoto}
				title={"Right Flowers"}
			></Image>
			<Button
				onButtonClick={onShopNowHandler}
				text={"Shop now >"}
			></Button>
		</React.Fragment>
	);
};

export default MainPage;
