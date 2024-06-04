import type React from "react";
import { Select } from "../index";
import "./header.css";

const Header: React.FC = () => {
	return (
		<header className="header">
			<div>LOGO</div>
			<Select />
		</header>
	);
};

export default Header;
