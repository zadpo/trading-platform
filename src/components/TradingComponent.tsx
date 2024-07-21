import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AccountDetails } from "@/types/accountDetails";
import { RiAddLine, RiSubtractLine } from "@remixicon/react";

export default function TradingComponent() {
  const [accountDetails, setAccountDetails] = useState<AccountDetails | null>(
    null
  );
  const [limitPrice, setLimitPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);

  const [addSetTP, setAddSetTP] = useState(false);
  const [addTP, setAddTP] = useState(false);

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const response = await fetch("/api/account_details");
        if (!response.ok) {
          throw new Error("Failed to fetch account details");
        }
        const data: AccountDetails = await response.json();
        setAccountDetails(data);
      } catch (error) {
        console.error("Error fetching account details:", error);
      }
    };
    fetchAccountDetails();
  }, []);

  if (!accountDetails) {
    return <div className="text-white">Loading...</div>;
  }

  const handleLimitPriceChange = (value: number) => {
    setLimitPrice(value);
  };

  const handleQuantityChange = (value: number) => {
    setQuantity(value);
  };

  return (
    <Tabs
      defaultValue="openByLots"
      className="bg-[#202121] text-white px-6 py-10 rounded-md w-full"
    >
      {/* Tabs List */}
      <TabsList className="grid w-full grid-cols-2 mb-4 ">
        <TabsTrigger
          value="openByLots"
          className="text-white hover:text-gray-300 "
        >
          Open by Lots
        </TabsTrigger>
        <TabsTrigger
          value="openBySL"
          className="text-white hover:text-gray-300"
        >
          Open by SL
        </TabsTrigger>
      </TabsList>

      {/* Tab Contents */}
      <TabsContent value="openByLots">
        <Card className="bg-[#202121] text-white font-inter">
          <CardContent className="space-y-4">
            {/* Limit Price Input */}
            <div className="space-y-1">
              <Label htmlFor="limitPrice" className="text-white font-inter">
                Limit Price
              </Label>
              <div className="relative flex items-center">
                <button
                  onClick={() => handleLimitPriceChange(limitPrice - 1)}
                  className="absolute left-0 top-0 bottom-0 text-gray-500 px-6 py-2 rounded-l z-10"
                >
                  <RiSubtractLine />
                </button>
                <Input
                  id="limitPrice"
                  type="number"
                  value={limitPrice}
                  onChange={(e) =>
                    handleLimitPriceChange(parseFloat(e.target.value))
                  }
                  className="bg-[#2F2C2D] text-white pl-10 pr-10 w-full text-center"
                />
                <button
                  onClick={() => handleLimitPriceChange(limitPrice + 1)}
                  className="absolute right-0 top-0 bottom-0 text-gray-500 px-6 py-2 rounded-r z-10"
                >
                  <RiAddLine />
                </button>
              </div>
            </div>

            {/* Quantity and Balance */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <Label htmlFor="quantitySL" className="text-white">
                  Quantity
                </Label>
                <span className="text-gray-400">
                  Balance: ${accountDetails.balance.toFixed(2)}
                </span>
              </div>
              <div className="relative flex items-center">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="absolute left-0 top-0 bottom-0 text-gray-500 px-6 py-2 rounded-l z-10"
                >
                  <RiSubtractLine />
                </button>
                <Input
                  id="quantitySL"
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    handleQuantityChange(parseFloat(e.target.value))
                  }
                  className="bg-[#2F2C2D] text-white pl-10 pr-10 w-full text-center"
                />
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="absolute right-0 top-0 bottom-0 text-gray-500 px-6 py-2 rounded-r z-10"
                >
                  <RiAddLine />
                </button>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-4 py-4">
              <div className="flex items-center text-white">
                <input
                  type="checkbox"
                  checked={addSetTP}
                  onChange={() => setAddSetTP(!addSetTP)}
                  id="addSetTP"
                  className="mr-2 rounded-md"
                />
                <Label htmlFor="addSetTP">
                  Add Set TP <span className="text-gray-500">(Optional)</span>
                </Label>
              </div>
              <div className="flex items-center text-white">
                <input
                  type="checkbox"
                  checked={addTP}
                  onChange={() => setAddTP(!addTP)}
                  id="addTP"
                  className="mr-2 rounded-md"
                />
                <Label htmlFor="addTP">
                  Add TP <span className="text-gray-500">(Optional)</span>
                </Label>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 py-4 ">
              <Button className="bg-green-400 hover:bg-green-600 text-white font-inter flex-1">
                Buy / Long
              </Button>
              <Button className="bg-red-500 hover:bg-red-600 text-white font-inter flex-1">
                Sell / Short
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="openBySL">
        <Card className="bg-[#202121] text-white font-inter">
          <CardContent className="space-y-4">
            {/* Limit Price Input */}
            <div className="space-y-1">
              <Label htmlFor="limitPriceSL" className="text-white">
                Limit Price
              </Label>
              <Input
                id="limitPriceSL"
                type="number"
                value={limitPrice}
                onChange={(e) => setLimitPrice(parseFloat(e.target.value))}
                className="bg-[#2F2C2D] text-white"
              />
            </div>

            {/* Quantity and Balance */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <Label htmlFor="quantitySL" className="text-white">
                  Quantity
                </Label>
                <span className="text-gray-400">
                  Balance: ${accountDetails.balance.toFixed(2)}
                </span>
              </div>
              <div className="relative flex items-center">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="absolute left-0 top-0 bottom-0 text-gray-500 px-6 py-2 rounded-l z-10"
                >
                  <RiSubtractLine />
                </button>
                <Input
                  id="quantitySL"
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    handleQuantityChange(parseFloat(e.target.value))
                  }
                  className="bg-[#2F2C2D] text-white pl-10 pr-10 w-full text-center"
                />
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="absolute right-0 top-0 bottom-0 text-gray-500 px-6 py-2 rounded-r z-10"
                >
                  <RiAddLine />
                </button>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-2">
              <div className="flex items-center text-white">
                <input
                  type="checkbox"
                  checked={addSetTP}
                  onChange={() => setAddSetTP(!addSetTP)}
                  id="addSetTPSL"
                  className="mr-2"
                />
                <Label htmlFor="addSetTPSL">
                  Add Set TP <span className="text-gray-500">(Optional)</span>
                </Label>
              </div>
              <div className="flex items-center text-white">
                <input
                  type="checkbox"
                  checked={addTP}
                  onChange={() => setAddTP(!addTP)}
                  id="addTPSL"
                  className="mr-2"
                />
                <Label htmlFor="addTPSL">
                  Add TP <span className="text-gray-500">(Optional)</span>
                </Label>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 py-4 ">
              <Button className="bg-green-500 hover:bg-green-600 text-white flex-1">
                Buy / Long
              </Button>
              <Button className="bg-red-500 hover:bg-red-600 text-white flex-1">
                Sell / Short
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
