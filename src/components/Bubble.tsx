import type React from "react";
// import "../styles/Bubble.css";

interface CryptoData {
	id: string;
	name: string;
	market_cap: number;
	price_change_percentage_24h: number;
}

type BubbleProps = {
	crypto: CryptoData;
};

const Bubble: React.FC<BubbleProps> = ({ crypto }) => {
	const bubbleStyle = {
		width: "100px",
		height: "100px",
		// width: `${Math.sqrt(crypto.market_cap) / 1000}px`,
		// height: `${Math.sqrt(crypto.market_cap) / 1000}px`,
		backgroundColor: crypto.price_change_percentage_24h > 0 ? "green" : "red",
	};

	return (
		<div className="bubble" style={bubbleStyle}>
			{crypto.name}
		</div>
	);
};

export default Bubble;
