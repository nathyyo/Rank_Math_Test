import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface GraphProps {
  selectedTab: string;
}

const Graph: React.FC<GraphProps> = ({ selectedTab }) => {
  // You should replace this with actual data
  const data = [
    { name: "Mon", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Tue", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Wed", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Thu", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Fri", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Sat", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Sun", uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <div className="graph flex justify-center bg-white dark:bg-black dark:border dark:border-white rounded-3xl my-4">
      <AreaChart
        width={(90 * window.innerWidth) / 100}
        height={250}
        data={data}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#F0953C" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#F0953C" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#F0953C"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </div>
  );
};

export default Graph;
