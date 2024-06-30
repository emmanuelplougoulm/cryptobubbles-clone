import type React from "react";
import { Header, Filters, LoadingBar } from "../components/index";
import { useContext } from "react";
import { context } from "../context/index";
import "../styles/homepage.css";

// KEEP
import NeumorphismCharts from "../components/charts/neumorphism-charts/neumorphism-charts";
import HtmlCharts from "../components/charts/html-charts/html-charts";

const HomePage: React.FC = () => {
	return (
		<main className="main">
			<Header />
			<div className="chart-container">
				<LoadingBar />
				<Filters />

				{/* KEEP */}
				<HtmlCharts />
			</div>
		</main>
	);
};

export default HomePage;
