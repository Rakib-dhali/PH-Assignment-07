"use client";

import { Pie, PieChart, Tooltip } from "recharts";
import { useTimeline } from "@/context/TimeLineContext";
import { PieChartData } from "@/lib/types";

// #endregion
export default function PieChartWithPaddingAngle({
  isAnimationActive = true,
}: {
  isAnimationActive?: boolean;
}) {
  const { timeline } = useTimeline();

  const textCount: number = timeline.filter(
    (entry) => entry.type === "Text",
  ).length;
  const callCount: number = timeline.filter(
    (entry) => entry.type === "Call",
  ).length;
  const videoCount: number = timeline.filter(
    (entry) => entry.type === "Video",
  ).length;

  const pieChartData: PieChartData[] = [
    { type: "Text", value: textCount, fill: "#7E35E1" },
    { type: "Call", value: callCount, fill: "#244D3F" },
    { type: "Video", value: videoCount, fill: "#37A163" },
  ];
  return (
    <PieChart
      style={{
        width: "100%",
        maxWidth: "300px",
        maxHeight: "80vh",
        aspectRatio: 1,
      }}
      responsive
    >
      <Pie
        data={pieChartData}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="10%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        nameKey="type"
        isAnimationActive={isAnimationActive}
      />
      <Tooltip
        formatter={(value, name) => [value, name]}
        contentStyle={{
          backgroundColor: "#fff",
          border: "1px solid #e2e8f0",
          borderRadius: "8px",
        }}
      />
    </PieChart>
  );
}
