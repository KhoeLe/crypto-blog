
// src/types.ts

import { CoinState } from "./fetchCoin";
import { SearchState } from "./searchCoin";


export interface RootState {
  coinReducer: CoinState;
  searchReducer: SearchState;
  loading: boolean;
  error: null | string;
}


export type coins = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
}

https://louisle-cloud.s3.us-east.cloud-object-storage.appdomain.cloud/index.html
louisle-cloud/README.md
