import type React from "react";
import { useContext } from "react";
import { context } from "../../context/index";
import "./watchlist-modal.css";

// interface Props {
// 	open: boolean;
// }

const WatchlistModal: React.FC = () => {
	const { showModal, setShowModal } = useContext(context);

	console.log("open", open);
	return (
		<dialog className={"dialog"}>
			<div className={"card"}>
				<h1>Pick a name for your watchlist</h1>
				<input type="text" className={"input"} />
				<button onClick={() => setShowModal(false)}>Add watchlist</button>
			</div>
		</dialog>
	);
};

export default WatchlistModal;
