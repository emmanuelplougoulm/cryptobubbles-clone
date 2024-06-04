import type React from "react";
import { Button } from "@/components/ui/button";
import { Select } from "../index";
import { context } from "../../context/index";
import { useContext } from "react";
import "./filters.css";

const Filters: React.FC = () => {
	const { setTimePref } = useContext(context);

	return (
		<div className="filters">
			<Select />
			<Button onClick={() => setTimePref("hourly")}>Heure</Button>
			<Button onClick={() => setTimePref("daily")}>Jour</Button>
			<Button onClick={() => setTimePref("weekly")}>Semaine</Button>
			<Button onClick={() => setTimePref("monthly")}>Mois</Button>
			<Button onClick={() => setTimePref("yearly")}>Année</Button>
		</div>
	);
};

export default Filters;
