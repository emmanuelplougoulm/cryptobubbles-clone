import { useCallback } from "react";

const useFetchCryptos = (): (() => Promise<void>) => {
	const fetchCryptos = useCallback(async () => {
		const response = await fetch("/bubbles1000.usd.json");
		const data = await response.json();
		return data;
	}, []);

	return fetchCryptos;
};

export default useFetchCryptos;
