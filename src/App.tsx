import type React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

import "./styles/App.css";

const App: React.FC = () => {
	return (
		<Router>
			<div className="App">
				<Homepage />
			</div>
		</Router>
	);
};

export default App;
