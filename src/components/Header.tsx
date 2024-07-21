import React, { useState, useEffect } from "react";
import { Separator } from "./ui/separator";
import { Typography } from "./Typography";
import { Metrics } from "@/types/metrics";
import { AccountDetails } from "@/types/accountDetails";
import { MetricCard } from "./MetricCard";
import { DollarIcon } from "./icons/dollarIcon";
import { PLIcon } from "./icons/PL";
import { EquityIcon } from "./icons/equity";
import { ScaleIcon } from "./icons/scale";

interface HeaderProps {
  metrics?: Metrics;
}

export const Header: React.FC<HeaderProps> = ({ metrics }) => {
  const [loadedMetrics, setLoadedMetrics] = useState<Metrics | null>(null);
  const [accountDetails, setAccountDetails] = useState<AccountDetails | null>(
    null
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const metricsResponse = await fetch("/api/fetch_metrics");
        if (!metricsResponse.ok) {
          throw new Error("Failed to fetch metrics data");
        }
        const metricsData = await metricsResponse.json();
        setLoadedMetrics(metricsData);

        const accountResponse = await fetch("/api/account_details");
        if (!accountResponse.ok) {
          throw new Error("Failed to fetch account details");
        }
        const accountData = await accountResponse.json();
        setAccountDetails(accountData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  if (!loadedMetrics || !accountDetails) {
    return <div>Loading...</div>;
  }

  const thresholds = {
    maxDailyDd: 1000,
    maxDd: 2000,
    profitTarget: 5000,
  };

  const isBelowThreshold = (value: number, threshold: number) =>
    value < threshold;

  const metricsData = [
    {
      label: "Trading Days",
      value: loadedMetrics.trading_days,
    },
    {
      label: "Daily DD",
      value: loadedMetrics.daily_dd,
    },
    {
      label: "Max Daily DD",
      value: loadedMetrics.max_daily_dd,
      threshold: thresholds.maxDailyDd,
    },
    {
      label: "Max DD",
      value: loadedMetrics.max_dd,
      threshold: thresholds.maxDd,
    },
    {
      label: "Profit Target",
      value: loadedMetrics.profit_target,
      threshold: thresholds.profitTarget,
    },
  ];

  const buttonItems = [
    {
      label: "This Month",
      color: "bg-baseblack-700",
    },
    {
      label: "Import Trades",
      color: "bg-[#B93876]",
    },
    {
      label: "Update Objectives",
      color: "bg-[#B93876]",
    },
  ];

  return (
    <div className="bg-[#202121] rounded-t-3xl">
      <div className="flex flex-col lg:flex-row px-4">
        <div className="flex flex-col">
          <Typography variant="paragraph" className="text-white font-bold">
            {accountDetails.account_name}
          </Typography>
          <Typography variant="paragraph_sm" className="text-gray-300">
            Account ID: {accountDetails.account_id}
          </Typography>
        </div>
        <Separator
          orientation="vertical"
          className="h-10 ml-4 mt-4 items-center justify-center gap-4 flex"
        />
        <div className="flex flex-col lg:flex-row px-4 items-center justify-between gap-8">
          {metricsData.map((metric, index) => (
            <Typography
              key={index}
              variant="paragraph_sm"
              className="flex items-start flex-col text-gray-300"
            >
              {metric.label}
              <span
                className={`flex flex-col items-start justify-start ${
                  metric.threshold &&
                  isBelowThreshold(metric.value, metric.threshold)
                    ? "text-red-500"
                    : "text-white"
                }`}
              >
                {metric.value}
              </span>
            </Typography>
          ))}
        </div>
        <div className="px-4 flex justify-between gap-4 py-4">
          {buttonItems.map((item, index) => (
            <button
              key={index}
              className={`py-2 px-4 rounded-lg text-white ${item.color}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 py-4 px-4">
        {[
          {
            label: "Balance",
            value: `$${loadedMetrics.balance.toFixed(2)}`,
            icon: <DollarIcon />,
          },
          {
            label: "Net PL",
            value: `$${loadedMetrics.net_pl.toFixed(2)}`,
            icon: <PLIcon />,
          },
          {
            label: "Equity",
            value: `$${loadedMetrics.equity.toFixed(2)}`,
            icon: <EquityIcon />,
          },
          {
            label: "Average Loss",
            value: loadedMetrics.average_loss.toFixed(2),
            icon: <ScaleIcon />,
          },
          {
            label: "Win Rate",
            value: `${loadedMetrics.win_rate}%`,
          },
          {
            label: "Profit Factor",
            value: loadedMetrics.profit_factor.toFixed(2),
          },
        ].map((item, index) => (
          <MetricCard
            key={index}
            label={item.label}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};
