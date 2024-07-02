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
import { useContext } from "react";

export default function SelectComponent() {
	const { setCoinRange, setCurrentWatchlist } = useContext(context);

	const handleOnChange = (value: string) => {
		setCoinRange(value);
		setCurrentWatchlist(null);
	};

	return (
		<Select onValueChange={(value) => handleOnChange(value)}>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="1-100" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Ranges</SelectLabel>
					<SelectItem value="100">1-100</SelectItem>
					<SelectItem value="200">101-200</SelectItem>
					<SelectItem value="300">201-300</SelectItem>
					<SelectItem value="400">301-400</SelectItem>
					<SelectItem value="500">401-500</SelectItem>
					<SelectItem value="600">501-600</SelectItem>
					<SelectItem value="700">601-700</SelectItem>
					<SelectItem value="800">701-800</SelectItem>
					<SelectItem value="900">801-900</SelectItem>
					<SelectItem value="1000">901-1000</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
