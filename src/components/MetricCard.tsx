import React from "react";
import { Typography } from "./Typography";

interface MetricCardProps {
  label: string;
  value: string | number;
  icon?: JSX.Element;
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  icon,
  className,
}) => {
  return (
    <div
      className={`flex-1 bg-baseblack-900 rounded-lg py-4 px-4 mx-2 flex flex-col ${
        className || ""
      }`}
    >
      <div className="flex items-center mb-2">
        {icon && <div className="mr-2">{icon}</div>}
        <Typography variant="paragraph_sm" className="text-gray-300">
          {label}
        </Typography>
      </div>
      <Typography
        variant="paragraph"
        className="flex items-center justify-center font-bold text-white"
      >
        {value}
      </Typography>
    </div>
  );
};
