import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { Quote, YahooSearchResult } from "../../interfaces/yahoo-finance";

const acceptedExchanges = ["NSI", "BSE"];

export default async (
  req: NextApiRequest,
  res: NextApiResponse<{ results: Quote[] }>
) => {
  const { data } = await axios.get<YahooSearchResult>(
    `https://query2.finance.yahoo.com/v1/finance/search?q=${req.query.q}&lang=en-IN&region=IN&quotesCount=6&newsCount=0`
  );

  const results = data.quotes.filter((q) =>
    acceptedExchanges.includes(q.exchange)
  );

  res.status(200).json({ results });
};
