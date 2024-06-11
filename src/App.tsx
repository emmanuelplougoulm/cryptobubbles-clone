import type React from "react";
import { context } from "./context";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./pages/homepage";

import "./styles/app.css";

const App: React.FC = () => {
	const [coins, setCoins] = useState([]);
	const [maxPerPage, setMaxPerPage] = useState(100);
	const [coinRange, setCoinRange] = useState("100");
	const [timePref, setTimePref] = useState("day");
	const [showModal, setShowModal] = useState(false);

	const contextValues = {
		coins,
		setCoins,
		maxPerPage,
		setMaxPerPage,
		coinRange,
		setCoinRange,
		timePref,
		setTimePref,
		showModal,
		setShowModal,
	};

	const fetchData = async () => {
		try {
			console.log("triggered");
			const response = await fetch("api/backend/data/bubbles1000.usd.json");
			const data = await response.json();
			setCoins(data);
			return data;
		} catch (err) {
			console.log("err", err);
			// throw new Error(err);
		}
	};

	useEffect(() => {
		const intervalId = setInterval(() => {
			fetchData();
		}, 60000);

		fetchData();

		return () => clearInterval(intervalId);
	}, []);

	return (
		<Router>
			<context.Provider value={contextValues}>
				<Homepage />
			</context.Provider>
		</Router>
	);
};

export default App;
