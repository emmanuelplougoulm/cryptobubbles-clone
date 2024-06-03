import type { CoinType } from "../types";
import { createContext } from "react";

export const CoinsContext = createContext<CoinType[]>([]);
