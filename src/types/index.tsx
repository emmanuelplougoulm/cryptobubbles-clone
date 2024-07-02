export type CoinPerformanceType = {
	hour: number;
	min1: number;
	min5: number;
	min15: number;
	day: number;
	week?: number;
	month?: number;
	year?: number;
};

export type RankDiffsType = {
	hour: number;
	day: number;
	week: number;
	month: number;
	year: number;
};

export type SymbolsType = {
	binance: string;
	kucoin: string;
	bybit: string;
	gateio: string;
	coinbase: string;
	[key: string]: string;
};

export type CoinType = {
	cg_id: string;
	circulating_supply: number;
	dominance: number;
	id: string;
	image: string;
	marketcap: number;
	name: string;
	performance: CoinPerformanceType;
	price: number;
	rank: number;
	rankDiffs: RankDiffsType;
	slug: string;
	stable: boolean;
	symbol: string;
	symbols: SymbolsType;
	volume: number;
};

export type ContextType = {
	coins: [];
	maxPerPage: number;
	coinRange: string;
	timePref: string;
	currentWatchlist: string | null;
	setTimePref?: (timePref: string) => void;
	setCoinRange: (range: string) => void;
	setCurrentWatchlist: (range: string | null) => void;
};
