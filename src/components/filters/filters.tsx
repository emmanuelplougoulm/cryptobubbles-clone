import type React from "react";
import { Select } from "../index";
import { Button } from "@/components/ui/button";
import { context } from "../../context/index";
import { useContext } from "react";
import "./filters.css";

const values = ["hour", "day", "week", "month", "year"];

const Filters: React.FC = () => {
	const { setTimePref, setShowModal } = useContext(context);

	return (
		<>
			<div className="filters">
				<Select />
				{values.map((item) => {
					return (
						<Button
							key={item}
							type="button"
							onClick={() => setTimePref(item)}
							variant="outline"
						>
							{item}
						</Button>
					);
				})}
			</div>
		</>
	);
};

export default Filters;
