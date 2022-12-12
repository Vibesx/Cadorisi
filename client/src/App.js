import React from "react";
import "./App.css";
import MainPage from "./components/pages/MainPage";
import Header from "./components/UI/Header";

function App() {
	return (
		<React.Fragment>
			<Header></Header>
			<MainPage />
		</React.Fragment>
	);
}

export default App;
