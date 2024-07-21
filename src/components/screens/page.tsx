"use client";
import React, { useState, useEffect } from "react";
import AccountDetails from "../AccountDetails/AccountDetails";
import { DataTable } from "../OpenPositions/data-table";
import { Trade } from "@/types/trade";
import { columns } from "../OpenPositions/columns"; // Update import path accordingly
import PriceData from "../PriceData";
import AreaChartComponent from "../AreaChart";
import TradingComponent from "../TradingComponent";
import { Separator } from "../ui/separator";

async function fetchTradeData(): Promise<Trade[]> {
  try {
    const response = await fetch("/api/proxy");
    if (!response.ok) {
      throw new Error("Failed to fetch trade data");
    }
    const data = await response.json();
    return data.open_trades;
  } catch (error) {
    console.error("Failed to fetch trade data:", error);
    return [];
  }
}

async function fetchAccountDetails(): Promise<any> {
  try {
    const response = await fetch("/api/account_details");
    if (!response.ok) {
      throw new Error("Failed to fetch account details");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch account details:", error);
    return null;
  }
}

async function fetchPriceData(): Promise<any> {
  try {
    const response = await fetch("/api/current_prices");
    if (!response.ok) {
      throw new Error("Failed to fetch price data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch price data:", error);
    return null;
  }
}

async function fetchDailySummary(): Promise<any> {
  try {
    const response = await fetch("/api/fetch_metrics");
    if (!response.ok) {
      throw new Error("Failed to fetch daily summary data");
    }
    const data = await response.json();
    return data.daily_summary || [];
  } catch (error) {
    console.error("Failed to fetch daily summary data:", error);
    return [];
  }
}

export function HomePage() {
  const [tradeData, setTradeData] = useState<Trade[]>([]);
  const [accountDetails, setAccountDetails] = useState<any>(null);
  const [priceData, setPriceData] = useState<any>(null);
  const [dailySummary, setDailySummary] = useState<any[]>([]);

  const mockData = [
    { date: "2024-01-01", total_pl: 400 },
    { date: "2024-02-02", total_pl: 360 },
    { date: "2024-03-03", total_pl: 500 },
    { date: "2024-04-01", total_pl: 300 },
    { date: "2024-05-02", total_pl: 650 },
    { date: "2024-06-03", total_pl: 280 },
    { date: "2024-07-01", total_pl: 500 },
    { date: "2024-08-02", total_pl: 450 },
    { date: "2024-09-03", total_pl: 700 },
    { date: "2024-10-01", total_pl: 100 },
    { date: "2024-11-02", total_pl: 150 },
    { date: "2024-12-03", total_pl: 200 },
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const trades = await fetchTradeData();
        setTradeData(trades);

        const details = await fetchAccountDetails();
        setAccountDetails(details);

        const prices = await fetchPriceData();
        setPriceData(prices);

        const summary = await fetchDailySummary();
        setDailySummary(summary);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="bg-[#202121] px-6">
      <DataTable columns={columns} data={tradeData} />
      <AreaChartComponent dailySummary={dailySummary || mockData} />
      <div className="flex">
        <TradingComponent />
        {accountDetails && <AccountDetails accountDetails={accountDetails} />}
        {priceData ? (
          <PriceData prices={priceData.prices} status={priceData.status} />
        ) : (
          <div>Loading Price Data...</div>
        )}
      </div>
    </div>
  );
}
