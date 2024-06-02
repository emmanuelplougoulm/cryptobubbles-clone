import React from "react";
import BubbleChart from "../components/BubbleCharts";
import "../styles/homepage.css";

function HomePage() {
	return (
		<main className="main">
			<h1>Crypto Bubbles</h1>
			<div className="chart-container">
				<BubbleChart />
			</div>
		</main>
	);
}

export default HomePage;
