import type React from "react";
import BubbleChart from "../components/BubbleCharts";
import { Header, Filters } from "../components/index";

import "../styles/homepage.css";

const HomePage: React.FC = () => {
	return (
		<main className="main">
			<Header />
			<div className="chart-container">
				<Filters />
				<BubbleChart />
			</div>
		</main>
	);
};

export default HomePage;
