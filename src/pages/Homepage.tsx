import type React from "react";
import BubbleChart from "../components/BubbleCharts";
import { Header, Filters, LoadingBar } from "../components/index";

import "../styles/homepage.css";

const HomePage: React.FC = () => {
	return (
		<main className="main">
			<Header />
			<div className="chart-container">
				<Filters />
				<LoadingBar />
				<BubbleChart />
			</div>
		</main>
	);
};

export default HomePage;
