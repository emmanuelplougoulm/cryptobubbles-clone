import type React from "react";
import BubbleChart from "../components/BubbleCharts";
import { HeaderComponent } from "../components/index";

import "../styles/homepage.css";

const HomePage: React.FC = () => {
	return (
		<main className="main">
			<HeaderComponent />
			<div className="chart-container">
				<BubbleChart />
			</div>
		</main>
	);
};

export default HomePage;
