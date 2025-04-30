import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const StockLineChart = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="text-center text-gray-500">No data available</div>;
  }

  const isIncreasing = data[data.length - 1]?.value >= data[0]?.value;
  const lineColor = isIncreasing ? '#70ede2' : '#ef4444';

  const values = data.map(d => d.value);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);

  return (
    <div className="w-[170px] h-20">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <XAxis 
            dataKey="x"
            axisLine={{ stroke: '#d3d3d3' }} // Axis line color
            tick={false} // Hide ticks (labels)
            tickLine={false} // Hide small tick marks
          />
          <YAxis
            domain={[minValue - 5, maxValue + 5]}
            axisLine={{ stroke: '#d3d3d3' }} // Axis line color
            tick={false} // Hide ticks (labels)
            tickLine={false} // Hide small tick marks
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke={lineColor}
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockLineChart;
