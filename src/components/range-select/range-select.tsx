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
	const { setCoinRange } = useContext(context);

	return (
		<Select onValueChange={(value) => setCoinRange(value)}>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="1-100" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Ranges</SelectLabel>
					<SelectItem value="1-100">1-100</SelectItem>
					<SelectItem value="101-200">101-200</SelectItem>
					<SelectItem value="201-300">201-300</SelectItem>
					<SelectItem value="301-400">301-400</SelectItem>
					<SelectItem value="401-500">401-500</SelectItem>
					<SelectItem value="501-600">501-600</SelectItem>
					<SelectItem value="601-700">601-700</SelectItem>
					<SelectItem value="701-800">701-800</SelectItem>
					<SelectItem value="801-900">801-900</SelectItem>
					<SelectItem value="901-1000">901-1000</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
