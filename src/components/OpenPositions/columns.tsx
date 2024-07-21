import { ColumnDef } from "@tanstack/react-table";
import { Trade } from "@/types/trade";

export const columns: ColumnDef<Trade>[] = [
  {
    accessorKey: "open_time",
    header: "OPEN TIME (GMT)",
  },
  {
    accessorKey: "symbol",
    header: "Symbol",
  },
  {
    accessorKey: "position_type",
    header: "Position Type",
  },
  {
    accessorKey: "entry",
    header: "Entry",
  },
  {
    accessorKey: "tp",
    header: "TP",
  },
  {
    accessorKey: "sl",
    header: "SL",
  },
  {
    accessorKey: "fees",
    header: "FEES",
  },
  {
    accessorKey: "roi",
    header: "ROI",
  },
  {
    accessorKey: "pl",
    header: "P/L",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
