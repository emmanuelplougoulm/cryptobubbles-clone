import type React from "react";
import { Header, Filters, LoadingBar } from "../components/index";
import "../styles/homepage.css";

// import NeumorphismCharts from "../components/charts/neumorphism-charts/neumorphism-charts";
import HtmlCharts from "../components/charts/html-charts/html-charts";

const HomePage: React.FC = () => {
	return (
		<main className="main">
			<Header />
			<div className="chart-container">
				<LoadingBar />
				<Filters />

				<HtmlCharts />
			</div>
		</main>
	);
};

export default HomePage;
