import type React from "react";
import BubbleChart from "../components/BubbleCharts";

import "../styles/homepage.css";

const HomePage: React.FC = () => {
	

	return (
		<main className="main">
			<h1>Crypto Bubbles</h1>
			<div className="chart-container">
				<BubbleChart />
			</div>
		</main>
	);
};

export default HomePage;
