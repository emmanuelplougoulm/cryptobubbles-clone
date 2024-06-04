import type React from "react";
import type { CoinType } from "../types";
import "../styles/bubble.css";

type BubbleProps = {
	crypto: CoinType;
};

const Bubble: React.FC<BubbleProps> = ({ crypto }) => {
	const bubbleStyle = {
		width: "100px",
		height: "100px",
		// width: `${Math.sqrt(crypto.market_cap) / 1000}px`,
		// height: `${Math.sqrt(crypto.market_cap) / 1000}px`,
		backgroundColor: crypto.performance.day > 0 ? "green" : "red",
	};

	return (
		<div className="bubble" style={bubbleStyle}>
			<div>{crypto.name}</div>
			<div>{crypto.performance.day}</div>
		</div>
	);
};

export default Bubble;
