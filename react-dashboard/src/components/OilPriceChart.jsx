import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { getOilPrices } from "../services/api";

const OilPriceChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getOilPrices().then((prices) => {
      const formattedData = Object.keys(prices).map((date) => ({
        date,
        price: prices[date],
      }));
      setData(formattedData);
    });
  }, []);

  return (
    <div>
      <h2>Brent Oil Prices</h2>
      <LineChart width={800} height={400} data={data}>
        <XAxis dataKey="date" tick={{ fontSize: 10 }} />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default OilPriceChart;
