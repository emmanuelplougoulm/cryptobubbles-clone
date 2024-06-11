import type React from "react";
import { Select, WatchListModal } from "../index";
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
						<button
							key={item}
							type="button"
							className="button-filters"
							onClick={() => setTimePref(item)}
						>
							{item}
						</button>
					);
				})}

				<button type="button" onClick={() => setShowModal(true)}>
					Add watchlist
				</button>
			</div>

			{/* <WatchListModal /> */}
		</>
	);
};

export default Filters;
