import type React from "react";
import { RangeSelect, WatchListModal, WatchlistSelect } from "../index";
import { Button } from "@/components/ui/button";
import { context } from "../../context/index";
import { useContext } from "react";
import "./filters.css";

const values = ["hour", "day", "week", "month", "year"];

const Filters: React.FC = () => {
	const { setTimePref, timePref } = useContext(context);

	return (
		<>
			<div className="filters">
				<RangeSelect />
				{values.map((item) => {
					return (
						<Button
							key={item}
							className={item === timePref ? "selected" : ""}
							type="button"
							onClick={() => setTimePref(item)}
							variant="outline"
						>
							{item}
						</Button>
					);
				})}
				<WatchListModal />
				<WatchlistSelect />
			</div>
		</>
	);
};

export default Filters;
