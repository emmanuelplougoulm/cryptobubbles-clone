import type React from "react";
import type { CoinType } from "./types";
import { CoinsContext } from "./context";

import { useEffect, useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./styles/app.css";

const App: React.FC = () => {
	const [cryptos, setCryptos] = useState<CoinType[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("/bubbles1000.usd.json");
			const data = await response.json();
			setCryptos(data);
		};

		fetchData();
	}, []);

	return (
		<Router>
			<CoinsContext.Provider value={cryptos}>
				<Homepage />
			</CoinsContext.Provider>
		</Router>
	);
};

export default App;
