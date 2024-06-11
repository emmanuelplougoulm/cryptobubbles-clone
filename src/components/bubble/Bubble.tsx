import type React from "react";
import "./bubble.css";

type BubbleProps = {
	name: string;
	imgUrl: string;
	performance: number;
};

const Bubble: React.FC<BubbleProps> = ({ name, performance, imgUrl }) => {
	const bubbleStyle = {
		width: "100px",
		height: "100px",
		// border: performance > 0 ? " 1px green solid" : "red",
	};

	return (
		<div className="bubble" style={bubbleStyle}>
			<img alt="img" src={imgUrl} />
			<div>{name}</div>
			<div>{performance}</div>
		</div>
	);
};

export default Bubble;
