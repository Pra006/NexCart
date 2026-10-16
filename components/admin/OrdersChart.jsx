"use client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const OrdersChart = ({ allOrders = [] }) => {
  const chartData = Object.entries(
    allOrders.reduce((acc, { createdAt }) => {
      const date = new Date(createdAt).toLocaleDateString();
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {}),
  ).map(([date, orders]) => ({ date, orders }));

  const p = "oklch(var(--p))";
  const bc = "oklch(var(--bc)/0.4)";

  return (
    <div className="w-full h-77 min-w-0">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
        >
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={p} stopOpacity={0.3} />
              <stop offset="95%" stopColor={p} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="oklch(var(--bc)/0.1)"
          />
          <XAxis
            dataKey="date"
            tick={{ fill: bc, fontSize: 10, fontWeight: 600 }}
            axisLine={false}
            tickLine={false}
            dy={10}
          />
          <YAxis
            allowDecimals={false}
            tick={{ fill: bc, fontSize: 10, fontWeight: 600 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "1rem",
              border: "none",
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
            }}
            itemStyle={{ color: p, fontSize: "12px", fontWeight: 700 }}
          />
          <Area
            type="monotone"
            dataKey="orders"
            stroke={p}
            strokeWidth={3}
            fill="url(#g)"
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrdersChart;
