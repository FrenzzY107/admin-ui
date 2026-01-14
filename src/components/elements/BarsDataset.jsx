import { BarChart } from "@mui/x-charts/BarChart";
import * as React from "react";
import { ThemeContext } from "../../context/ThemeContext";

const chartSetting = {
  height: 300,
  yAxis: [
    {
      disableTicks: true,
      disableLine: true,
      width: 50,
    },
  ],
  grid: {
    horizontal: true,
  },
  sx: {
    ["& .MuiChartsAxis-left .MuiChartsAxis-tickLabel"]: {
      fill: "#9F9F9F",
    },
    ["& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel"]: {
      fill: "#9F9F9F",
    },
  },
};

export default function BarsDataset({ dataset }) {
  const { theme } = React.useContext(ThemeContext);

  // 🔐 GUARD WAJIB
  if (
    !dataset ||
    !dataset.data ||
    !dataset.series ||
    dataset.data.length === 0
  ) {
    return (
      <p className="text-sm text-gray-400 text-center">
        No chart data available
      </p>
    );
  }

  const expensesSeries = dataset.series.map((item) =>
    item.dataKey === "amountLastWeek"
      ? { ...item, color: theme.color }
      : item
  );

  return (
    <BarChart
      dataset={dataset.data}
      xAxis={[{ dataKey: dataset.dataKey, categoryGapRatio: 0.5 }]}
      series={expensesSeries}
      {...chartSetting}
    />
  );
}
