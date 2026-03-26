import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { fraudVsSafeData } from "@/data/mockData";

const FraudPieChart = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="glass-card p-5"
    >
      <h3 className="text-sm font-semibold text-foreground mb-4">Fraud vs Safe Emails</h3>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={fraudVsSafeData}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={85}
            dataKey="value"
            stroke="none"
            label={({ name, value }) => `${name} ${value}%`}
          >
            {fraudVsSafeData.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: "hsl(222, 47%, 10%)", border: "1px solid hsl(222, 30%, 22%)", borderRadius: "0.75rem", color: "hsl(210, 40%, 96%)" }}
            formatter={(value: number) => `${value}%`}
          />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default FraudPieChart;
