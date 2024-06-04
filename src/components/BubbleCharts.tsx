import type React from "react";
import { useContext } from "react";
import { CoinsContext } from "../context";
import Bubble from "./Bubble";
import "../styles/bubble-charts.css";

const BubbleCharts: React.FC = () => {
	const coins = useContext(CoinsContext);
	console.log("coins in Charts", coins);

	return (
		<div className="bubble-chart">
			{coins.map((crypto) => (
				<Bubble key={crypto.id} crypto={crypto} />
			))}
		</div>
	);
};

export default BubbleCharts;
