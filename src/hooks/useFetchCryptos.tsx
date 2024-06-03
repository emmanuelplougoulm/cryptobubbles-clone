import { useCallback } from "react";

const useFetchCryptos = (): (() => Promise<any>) => {
	const fetchCryptos = useCallback(async () => {
		const response = await fetch(
			// "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
			"/bubbles1000.usd.json",
		);
		const data = await response.json();
		return data;
	}, []);

	return fetchCryptos;
};

export default useFetchCryptos;
