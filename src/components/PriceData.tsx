import React from "react";
import { Typography } from "@/components/Typography";
import { Separator } from "@/components/ui/separator";

interface Prices {
  AUDUSD: number;
  EURCHF: number;
  EURJPY: number;
  EURUSD: number;
  GBPUSD: number;
  NZDUSD: number;
  USDCAD: number;
}

interface PriceDataProps {
  prices: {
    AUDUSD: number;
    EURCHF: number;
    EURJPY: number;
    EURUSD: number;
    GBPUSD: number;
    NZDUSD: number;
    USDCAD: number;
  }[];
  status: string;
}

const PriceData: React.FC<PriceDataProps> = ({ prices, status }) => {
  if (status !== "success") {
    return <div>Failed to fetch prices</div>;
  }

  const price = prices[0];

  const THRESHOLD = 1.0;

  const priceItems = [
    { label: "AUD/USD", value: price.AUDUSD, flags: ["AUD", "USD"] },
    { label: "EUR/CHF", value: price.EURCHF, flags: ["EUR", "CHF"] },
    { label: "EUR/JPY", value: price.EURJPY, flags: ["EUR", "JPY"] },
    { label: "EUR/USD", value: price.EURUSD, flags: ["EUR", "USD"] },
    { label: "GBP/USD", value: price.GBPUSD, flags: ["GBP", "USD"] },
    { label: "NZD/USD", value: price.NZDUSD, flags: ["NZD", "USD"] },
    { label: "USD/CAD", value: price.USDCAD, flags: ["USD", "CAD"] },
  ];

  return (
    <div className="bg-[#202121] py-10 px-6 w-full">
      <Typography variant="paragraph_md" className="text-white">
        Price Data
      </Typography>
      <div className="flex flex-col">
        {priceItems.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center justify-between py-2 hover:bg-baseblack-500 gap-10">
              <div className="flex items-center gap-2">
                {item.flags.map((flag, i) => (
                  <img
                    key={i}
                    src={`/flags/${flag}.png`}
                    alt={flag}
                    className="w-8 h-8"
                  />
                ))}
                <Typography variant="paragraph_sm" className="text-gray-300">
                  {item.label}
                </Typography>
              </div>
              <Typography
                variant="paragraph_sm"
                className={`${
                  item.value >= THRESHOLD
                    ? "text-green-500 font-semibold"
                    : "text-red-500 font-semibold"
                }`}
              >
                {item.value}
              </Typography>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default PriceData;
