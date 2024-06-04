import type React from "react";
// import type { CoinType } from "./types";
import { context } from "./context";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./pages/homepage";
import "./styles/app.css";

const App: React.FC = () => {
	const [coins, setCoins] = useState();
	const [maxPerPage, setMaxPerPage] = useState(100);
	const [coinRange, setCoinRange] = useState("");
	const [timePref, setTimePref] = useState("daily");

	const contextValues = {
		coins,
		setCoins,
		maxPerPage,
		setMaxPerPage,
		coinRange,
		setCoinRange,
		timePref,
		setTimePref,
	};

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("api/backend/data/bubbles1000.usd.json");
			const data = await response.json();
			console.log("data", data);
			setCoins(data);
		};

		fetchData();
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
