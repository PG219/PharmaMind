import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const COLORS = [
  "hsl(145, 60%, 45%)",  // primary green
  "hsl(25, 100%, 65%)",  // accent orange
  "hsl(200, 70%, 50%)",  // blue
  "hsl(280, 60%, 55%)",  // purple
  "hsl(45, 90%, 55%)"    // yellow
];

interface PatentTrendData {
  name: string;
  value: number;
}

interface PatentTrendChartProps {
  data: Record<string, number>;
}

export const PatentTrendChart = ({ data }: PatentTrendChartProps) => {
  // Convert the object data to array format that Recharts expects
  const chartData = Object.entries(data).map(([year, count]) => ({
    name: year,
    value: count
  }));
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Patent Activity Timeline</CardTitle>
        <CardDescription>
          Number of patents filed per year
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};