export interface Commission {
  asset_class: string;
  price_per_lot: number;
}

export interface SymbolMapping {
  mapping: string;
  symbol: string;
}

export interface AccountDetails {
  account_id: number;
  account_name: string;
  auto_be_level: number;
  balance: number;
  commissions: Commission[];
  daily_loss_limit: number;
  equity: number;
  exchange: string;
  leverage: number;
  max_lot_sizes: any[]; // Specify the type if known, e.g., number[]
  one_click: boolean;
  risk: number;
  show_leaderboard: boolean;
  starting_balance: number;
  status: string;
  symbol_mappings: SymbolMapping[];
  take_profit_level: number;
  // Add other fields as per your API response
}
