import { ColumnDef as TanstackColumnDef } from "@tanstack/react-table";
import { Trade } from "@/types/trade";
import { DataTableColumnDef } from "./types";

// Raw Column Definitions
const rawColumns: TanstackColumnDef<Trade>[] = [
  { accessorKey: "open_time", header: "OPEN TIME (GMT)" },
  { accessorKey: "symbol", header: "Symbol" },
  { accessorKey: "position_type", header: "Position Type" },
  { accessorKey: "entry", header: "Entry" },
  { accessorKey: "tp", header: "TP" },
  { accessorKey: "sl", header: "SL" },
  { accessorKey: "fees", header: "FEES" },
  { accessorKey: "roi", header: "ROI" },
  { accessorKey: "pl", header: "P/L" },
  { accessorKey: "status", header: "Status" },
];

// Transform to match DataTableColumnDef
export const columns: DataTableColumnDef[] = rawColumns.map((column) => ({
  accessorKey: column.accessorKey as keyof Trade, // Ensure correct type
  header: column.header,
  cell: column.cell as (value: any, row: Trade) => JSX.Element, // Cast cell function
}));
