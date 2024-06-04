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
			<Button onClick={() => setTimePref("hour")}>Heure</Button>
			<Button onClick={() => setTimePref("day")}>Jour</Button>
			<Button onClick={() => setTimePref("week")}>Semaine</Button>
			<Button onClick={() => setTimePref("month")}>Mois</Button>
			<Button onClick={() => setTimePref("year")}>Année</Button>
		</div>
	);
};

export default Filters;
