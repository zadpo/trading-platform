"use client";
import React, { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [metrics, setMetrics] = useState<any>(null);

  useEffect(() => {
    async function fetchMetrics() {
      try {
        const response = await fetch("/api/fetch_metrics");
        if (!response.ok) {
          throw new Error("Failed to fetch metrics data");
        }
        const data = await response.json();
        setMetrics(data);
      } catch (error) {
        console.error("Error fetching metrics data:", error);
      }
    }

    fetchMetrics();
  }, []);

  return (
    <html lang="en">
      <body className="px-[70px] py-10 bg-[#202121]">
        <Header metrics={metrics} />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
