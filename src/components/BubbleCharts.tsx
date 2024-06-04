import type React from "react";
import type { CoinType } from "../types/index";
import { useContext } from "react";
import { context } from "../context/index";
import Bubble from "./Bubble";
import "../styles/bubble-charts.css";

type SliceIndexesType = { [key: string]: Array<number> };

const sliceValues: SliceIndexesType = {
	"100": [0, 99],
	"200": [100, 199],
	"300": [200, 299],
	"400": [300, 399],
	"500": [400, 499],
	"600": [500, 599],
	"700": [600, 699],
	"800": [700, 799],
	"900": [800, 899],
	"1000": [900, 999],
};

const BubbleCharts: React.FC = () => {
	const { coins, coinRange, timePref } = useContext(context);
	const [start, end] = sliceValues[coinRange];

	return (
		<div className="bubble-chart">
			{coins.slice(start, end).map((crypto: CoinType) => (
				<Bubble
					key={crypto.id}
					name={crypto.name}
					performance={crypto.performance[timePref]}
				/>
			))}
		</div>
	);
};

export default BubbleCharts;
