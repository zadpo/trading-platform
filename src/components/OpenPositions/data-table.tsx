import React from "react";
import { Trade } from "@/types/trade";
import { Typography } from "../Typography";

interface DataTableProps {
  data?: Trade[];
  columns: {
    accessorKey: keyof Trade;
    header: string;
    cell?: (value: any, row: Trade) => JSX.Element;
  }[];
}

export function DataTable({ data = [], columns }: DataTableProps) {
  const getCellColor = (value: number | string, key: keyof Trade) => {
    if (key === "pl" || key === "roi") {
      if (typeof value === "number") {
        return value >= 0 ? "text-green-500" : "text-red-500";
      }
    }
    if (key === "position_type") {
      if (typeof value === "string") {
        return value === "long" ? "text-green-500" : "text-red-500";
      }
    }
    return "";
  };

  const getFontClass = (key: keyof Trade) => {
    if (key === "pl" || key === "roi" || key === "position_type") {
      return "font-inter font-semibold";
    }
    return "";
  };

  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="bg-[#202121] p-4 rounded-md">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-[#202121] text-white">
            <thead className="bg-gray-500 text-white border">
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={index}
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-4 text-center text-sm text-gray-500"
                >
                  No results.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-md bg-[#202121] py-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#202121] text-white">
          <thead className="bg-[#282828] border-t border-b border-gray-700 text-white">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                  <Typography
                    variant="paragraph_sm"
                    className="text-white font-light"
                  >
                    {column.header}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="text-white">
                {columns.map((column, colIndex) => {
                  const cellValue = row[column.accessorKey];
                  return (
                    <td
                      key={colIndex}
                      className={`px-6 py-4 whitespace-nowrap text-sm ${getCellColor(
                        cellValue,
                        column.accessorKey
                      )} ${getFontClass(column.accessorKey)}`}
                    >
                      {column.cell ? (
                        column.cell(cellValue, row)
                      ) : (
                        <Typography
                          variant="paragraph_sm"
                          className={`font-light text-white ${getCellColor(
                            cellValue,
                            column.accessorKey
                          )} ${getFontClass(column.accessorKey)}`}
                        >
                          {cellValue}
                        </Typography>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
