import type React from "react";
import { useContext, useState } from "react";
import { context } from "../../context/index";
import { Button } from "@/components/ui/button";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

// import "./watchlist-modal.css";

const WatchlistModal: React.FC = () => {
	const { showModal, setShowModal } = useContext(context);
	const [inputValue, setInputValue] = useState("");

	const handleOnChange = (event) => {
		setInputValue(event.target.value);
	};
	const handleAddWatchlist = () => {
		const storageString = localStorage.getItem("settings");

		if (storageString) {
			const storageObject = JSON.parse(storageString);
			storageObject[inputValue] = {};
			localStorage.setItem("settings", JSON.stringify(storageObject));
		} else {
			console.log(
				'Aucune donnée trouvée dans le localStorage pour la clé "myObject".',
			);
		}
		setShowModal(false);
	};

	return (
		<Dialog open={showModal} onOpenChange={setShowModal}>
			<DialogTrigger>Add watchlist</DialogTrigger>
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
