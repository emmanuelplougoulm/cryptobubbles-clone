import type React from "react";
import { useEffect, useState } from "react";
import "./loading-bar.css";

const LoadingBar: React.FC = () => {
	const [resetAnimation, setResetAnimation] = useState(false);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setResetAnimation(true);
			setTimeout(() => setResetAnimation(false), 100);

			return () => clearInterval(intervalId);
		}, 60000);
	}, []);

	return (
		<div className="loading-bar-container">
			<div className={`loading-bar ${resetAnimation ? "reset" : ""}`} />
		</div>
	);
};

export default LoadingBar;
