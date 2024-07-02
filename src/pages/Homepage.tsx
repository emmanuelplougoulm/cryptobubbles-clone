import type React from "react";
import { Header, Filters, LoadingBar } from "../components/index";
import "../styles/homepage.css";

import { context } from "../context/index";
import { useContext, useState } from "react";

// import NeumorphismCharts from "../components/charts/neumorphism-charts/neumorphism-charts";
import HtmlCharts from "../components/charts/html-charts/html-charts";

const HomePage: React.FC = () => {
	const { currentWatchlist } = useContext(context);

	return (
		<main className="main">
			<Header />
			<div className="chart-container">
				<LoadingBar />
				<Filters />

				{currentWatchlist ? <div>watchlist</div> : <HtmlCharts />}
			</div>
		</main>
	);
};

export default HomePage;
