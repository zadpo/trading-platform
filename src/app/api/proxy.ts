// pages/api/proxy.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch("http://13.41.72.245/open_positions");
    const contentType = response.headers.get("content-type");

    console.log("Response status:", response.status);
    console.log("Response content-type:", contentType);

    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      console.log("Data:", data);
      res.status(200).json(data);
    } else {
      const text = await response.text();
      console.log("Response text:", text);
      res.status(response.status).send(text);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
