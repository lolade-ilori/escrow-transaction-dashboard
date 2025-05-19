import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", completed: 186, disputed: 80, pending: 150 },
  { month: "February", completed: 305, disputed: 200, pending: 100 },
  { month: "March", completed: 237, disputed: 120, pending: 80 },
  { month: "April", completed: 73, disputed: 190, pending: 130 },
  { month: "May", completed: 209, disputed: 130, pending: 70 },
  { month: "June", completed: 214, disputed: 140, pending: 110 },
];

const chartConfig = {
  completed: {
    label: "Completed",
    color: "#9dfa96",
  },
  pending: {
    label: "Pending",
    color: "#facc15",
  },
  disputed: {
    label: "disputed",
    color: "#f5625d",
  },
} satisfies ChartConfig;

const EscrowChart = () => {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="completed" fill="var(--color-completed)" radius={4} />
        <Bar dataKey="pending" fill="var(--color-pending)" radius={4} />
        <Bar dataKey="disputed" fill="var(--color-disputed)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};

export default EscrowChart;
