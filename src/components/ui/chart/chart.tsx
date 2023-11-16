"use client";

import { chartData } from "@/lib/data";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = () => {
  return (
    <div className="bg-background-soft lg:p-6 p-2 rounded-md shadow h-[500px]">
      <div className="mb-5">
        <h2 className="font-normal text-text-soft">Weekly Recap</h2>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" />
          <Line type="monotone" dataKey="click" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
