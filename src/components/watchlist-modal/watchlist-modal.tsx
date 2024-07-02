import type React from "react";
import { useContext, useState } from "react";
import { context } from "../../context/index";
import { Button } from "@/components/ui/button";
import "./watchlist-modal.css";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const WatchlistModal: React.FC = () => {
	const { showModal, setShowModal } = useContext(context);
	const [inputValue, setInputValue] = useState("");

	const generateId = () => {
		return `_ ${Math.random().toString(36)}`;
	};

	const newlist = {
		id: generateId(),
		items: [],
		name: inputValue,
	};

	const handleOnChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleAddWatchlist = () => {
		const watchlists = localStorage.getItem("watchlists");
		// console.log("watchlists", watchlists);
		// console.log("watchlists", typeof watchlists);

		if (watchlists) {
			const parsedWatchLists = JSON.parse(watchlists);
			// console.log("prevWatchlists", parsedWatchLists);

			parsedWatchLists.push(newlist);
			localStorage.setItem("watchlists", JSON.stringify(parsedWatchLists));
		} else {
			localStorage.setItem("watchlists", JSON.stringify([newlist]));
		}
		setShowModal(false);
	};

	return (
		<Dialog open={showModal} onOpenChange={setShowModal}>
			<DialogTrigger className="trigger">Add watchlist</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Pick a watchlist name</DialogTitle>
				</DialogHeader>
				<Input
					type="text"
					placeholder="watchlist name"
					onChange={handleOnChange}
				/>
				<Button type="button" onClick={handleAddWatchlist} variant="outline">
					Valider
				</Button>
			</DialogContent>
		</Dialog>
	);
};

export default WatchlistModal;
