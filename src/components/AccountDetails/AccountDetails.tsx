import React, { useEffect, useState } from "react";
import { Typography } from "@/components/Typography";
import { Separator } from "@/components/ui/separator";
import AccountDetailItem from "./AccountDetailItem";
import { RiSettings5Line, RiSubtractLine } from "@remixicon/react";
import { Switch } from "@/components/ui/switch";

interface AccountDetailsProps {
  accountDetails: {
    account_id: number;
    account_name: string;
    auto_be_level: number;
    balance: number;
    commissions: { asset_class: string; price_per_lot: number }[];
    daily_loss_limit: number;
    equity: number;
    exchange: string;
    leverage: number;
    max_lot_sizes: any[];
    one_click: boolean;
    risk: number;
    show_leaderboard: boolean;
    starting_balance: number;
    status: string;
    symbol_mappings: { mapping: string; symbol: string }[];
    take_profit_level: number;
  };
}

const AccountDetails: React.FC<AccountDetailsProps> = ({ accountDetails }) => {
  const [details, setDetails] = useState(accountDetails);

  useEffect(() => {
    setDetails(accountDetails);
  }, [accountDetails]);

  if (!details) {
    return <div className="text-white">Loading...</div>;
  }

  const accountDetailItems = [
    { label: "Name", value: details.account_name },
    { label: "Balance", value: details.balance },
    { label: "Equity", value: details.equity },
    { label: "Exchange", value: details.exchange },
    { label: "Leverage", value: details.leverage },
    { label: "Risk", value: details.risk },
    { label: "Daily Loss Limit", value: details.daily_loss_limit },
    { label: "Take Profit (RR)", value: details.take_profit_level },
    { label: "Auto BE Level (RR)", value: details.auto_be_level },
  ];

  return (
    <div className="bg-[#202121] py-10 px-6 w-full">
      <div className="flex items-center">
        <Typography variant="paragraph_md" className="text-white flex-grow">
          Account Info
        </Typography>
        <RiSettings5Line className="text-gray-300" />
        <Separator orientation="vertical" className="h-4 mx-2 text-gray-500" />
        <RiSubtractLine className="text-gray-300" />
      </div>
      {accountDetailItems.map((item, index) => (
        <React.Fragment key={index}>
          <AccountDetailItem label={item.label} value={item.value} />
          {item.label === "Exchange" && (
            <Separator orientation="horizontal" className="bg-gray-500" />
          )}
        </React.Fragment>
      ))}
      <Separator orientation="horizontal" className="bg-gray-500" />
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between py-4">
          <Typography variant="paragraph_sm" className="text-gray-300">
            One Click Trade
          </Typography>
          <Switch id="one-click-trade" />
        </div>
        <Separator orientation="horizontal" className="bg-gray-500" />
        <div className="flex items-center justify-between py-4">
          <Typography variant="paragraph_sm" className="text-gray-300">
            Show Account on Leaderboard
          </Typography>
          <Switch id="show-leaderboard" />
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
