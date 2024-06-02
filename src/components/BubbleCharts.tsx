import type React from "react";
import { useState, useEffect } from "react";
import Bubble from "./Bubble";
import useFetchCryptos from "../hooks/useFetchCryptos";
import "../styles/bubble-charts.css";

const BubbleCharts: React.FC = () => {
	const [cryptos, setCryptos] = useState([]);
	const fetchCryptos = useFetchCryptos();

	useEffect(() => {
		fetchCryptos().then((data) => setCryptos(data));
	}, [fetchCryptos]);

	return (
		<div className="bubble-chart">
			{cryptos.map((crypto, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<Bubble key={index} crypto={crypto} />
			))}
		</div>
	);
};

export default BubbleCharts;
