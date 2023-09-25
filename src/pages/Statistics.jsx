import { Cell, Pie, PieChart } from "recharts";
import useData from "../hooks/useData.js";
import useLocalStorage from "../hooks/useLocalStorage.js";

const COLORS = ["#00C49F", "#FF444A"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Statistics = () => {
  const allData = useData();
  const [donatedData] = useLocalStorage([], "donatedIds");

  const data = [
    {
      name: "Your Donation",
      value: donatedData.length,
    },
    {
      name: "Total Donation",
      value: allData.length,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center">
      <PieChart width={500} height={500}>
        <Pie
          data={data}
          cx={250}
          cy={300}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={140}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2">
          <dir className="text-[#0B0B0B] font-lg">Your Donation</dir>
          <span className="block h-[12px] w-[100px] bg-[#00C49F] rounded-[2px]"></span>
        </div>
        <div className="flex items-center gap-2">
          <dir className="text-[#0B0B0B] font-lg">Total Donation</dir>
          <span className="block h-[12px] w-[100px] bg-[#FF444A] rounded-[2px]"></span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
