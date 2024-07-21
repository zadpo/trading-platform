import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { format, parseISO } from "date-fns";

interface AreaChartComponentProps {
  dailySummary: {
    date: string;
    total_pl: number;
  }[];
}

const AreaChartComponent: React.FC<AreaChartComponentProps> = ({
  dailySummary,
}) => {
  console.log("Daily Summary Data:", dailySummary);

  const transformedData = dailySummary
    .map((item) => {
      let parsedDate;
      try {
        parsedDate = parseISO(item.date);
        if (isNaN(parsedDate.getTime())) {
          throw new Error(`Invalid date format: ${item.date}`);
        }
      } catch (error) {
        console.error(error);
        parsedDate = new Date();
      }

      return {
        ...item,
        total_pl: Math.max(item.total_pl, 0),
        date: parsedDate,
      };
    })
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  const formattedData = transformedData.map((item) => ({
    ...item,
    formattedDate: format(item.date, "MMM d"),
  }));

  if (!formattedData.length) {
    return <div>No data available</div>;
  }

  return (
    <div
      className="flex items-center border border-gray-600 justify-center rounded-md py-10 px-4 bg-[#202121]"
      style={{ height: 300 }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={formattedData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="fadeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B93876" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#B93876" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="formattedDate"
            tick={{
              fill: "#fff",
              fontFamily: "inter, sans-serif",
              fontSize: 12,
            }}
            tickLine={{ stroke: "#444" }}
          />
          <YAxis
            domain={[0, "auto"]}
            tick={{
              fill: "#fff",
              fontFamily: "inter, sans-serif",
              fontSize: 12,
            }}
            tickLine={{ stroke: "#444" }}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total_pl"
            stroke="#B93876"
            fill="url(#fadeGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartComponent;
