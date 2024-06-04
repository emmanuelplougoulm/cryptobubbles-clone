import type React from "react";
import "../styles/bubble.css";

type BubbleProps = {
	name: string;
	performance: number;
};

const Bubble: React.FC<BubbleProps> = ({ name, performance }) => {
	const bubbleStyle = {
		width: "100px",
		height: "100px",
		// width: `${Math.sqrt(crypto.market_cap) / 1000}px`,
		// height: `${Math.sqrt(crypto.market_cap) / 1000}px`,
		backgroundColor: performance > 0 ? "green" : "red",
	};

	return (
		<div className="bubble" style={bubbleStyle}>
			<div>{name}</div>
			<div>{performance}</div>
		</div>
	);
};

export default Bubble;
