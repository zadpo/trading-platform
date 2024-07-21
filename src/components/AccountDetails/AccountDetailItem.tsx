import React from "react";
import { Typography } from "@/components/Typography";

interface AccountDetailItemProps {
  label: string;
  value: number | string;
}

const AccountDetailItem: React.FC<AccountDetailItemProps> = ({
  label,
  value,
}) => {
  return (
    <div className="flex justify-between py-2">
      <Typography variant="paragraph_sm" className="text-gray-300">
        {label}:
      </Typography>
      <Typography variant="paragraph_sm" className="text-white">
        {label === "Balance" || label === "Equity" ? `$${value}` : value}
      </Typography>
    </div>
  );
};

export default AccountDetailItem;
