export interface Trade {
  account_id: number;
  balance: number;
  entry: number;
  equity: number;
  exit: number;
  exit_time: string;
  fees: number;
  open_time: string;
  order_id: string;
  pl: number;
  position_type: string;
  quantity: number;
  roi: number;
  sl: number;
  status: string;
  symbol: string;
  tp: number;
}
