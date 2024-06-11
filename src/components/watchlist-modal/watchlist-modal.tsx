import type React from "react";
import { useContext } from "react";
import { context } from "../../context/index";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

// import "./watchlist-modal.css";

// interface Props {
// 	open: boolean;
// }

const WatchlistModal: React.FC = () => {
	// const { showModal, setShowModal } = useContext(context);

	// console.log("open", open);
	return (
		<Dialog>
			<DialogTrigger>Add watchlist</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Pick a watchlist name</DialogTitle>
				</DialogHeader>
				<Input type="text" placeholder="watchlist name" />
			</DialogContent>
		</Dialog>
	);
};

export default WatchlistModal;
