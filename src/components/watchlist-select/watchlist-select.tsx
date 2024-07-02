import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { context } from "../../context/index";
import { useContext, useEffect, useState } from "react";

export default function WatchlistSelect() {
	const [lists, setLists] = useState<Array<{ id: string; name: string }>>([]);
	const { setCurrentWatchlist } = useContext(context);

	useEffect(() => {
		const watchlists = localStorage.getItem("watchlists");

		if (watchlists) {
			// parsedWatchlists = JSON.parse(watchlists);
			setLists(JSON.parse(watchlists));
			// console.log("parsed", parsedWatchlists);
		}
	}, [setLists]);

	return (
		<Select onValueChange={(value) => setCurrentWatchlist(value)}>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Pick a watchlist" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Stored watchlists</SelectLabel>
					{lists.map((item) => (
						<SelectItem key={item.name} value={item.name}>
							{item.name}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
