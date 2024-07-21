// // components/OpenPositions/page.tsx
// "use client";
// import React, { useState, useEffect } from "react";
// import { DataTable } from "@/components/OpenPositions/data-table";
// import { Trade } from "@/types/trade";

// const columns = [
//   { accessorKey: "open_time", header: "OPEN TIME (GMT)" },
//   { accessorKey: "symbol", header: "Symbol" },
//   { accessorKey: "position_type", header: "Position Type" },
//   { accessorKey: "entry", header: "Entry" },
//   { accessorKey: "tp", header: "TP" },
//   { accessorKey: "sl", header: "SL" },
//   {
//     accessorKey: "fees",
//     header: "FEES",
//     cell: (props: { cell: { value: string } }) => (
//       <span>${props.cell.value}</span>
//     ),
//   }, // Render fees with $
//   { accessorKey: "roi", header: "ROI" },
//   { accessorKey: "pl", header: "P/L" },
//   { accessorKey: "status", header: "Status" },
// ];

// async function getData(): Promise<Trade[]> {
//   try {
//     const response = await fetch("/api/proxy"); // Ensure this URL is correct
//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     const data = await response.json();
//     return data.open_trades; // Assuming your data structure has an `open_trades` array
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error; // Rethrow the error to handle it further up in your application
//   }
// }

// export default function OpenPositionsPage() {
//   const [data, setData] = useState<Trade[]>([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const newData = await getData();
//         setData(newData);
//       } catch (error) {
//         // Handle error fetching data
//         console.error("Failed to fetch data:", error);
//       }
//     }
//     fetchData();
//   }, []);

//   return (
//     <div className="container mx-auto py-10 ">
//       <DataTable columns={columns} data={data} />
//     </div>
//   );
// }
