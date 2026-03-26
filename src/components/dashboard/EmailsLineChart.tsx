import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { emailsScannedData } from "@/data/mockData";

const EmailsLineChart = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="glass-card p-5"
    >
      <h3 className="text-sm font-semibold text-foreground mb-4">Emails Scanned – Last 30 Days</h3>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={emailsScannedData}>
          <defs>
            <linearGradient id="emailGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.3} />
              <stop offset="100%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 30%, 18%)" />
          <XAxis dataKey="date" tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{ backgroundColor: "hsl(222, 47%, 10%)", border: "1px solid hsl(222, 30%, 22%)", borderRadius: "0.75rem", color: "hsl(210, 40%, 96%)" }}
          />
          <Area type="monotone" dataKey="emails" stroke="hsl(217, 91%, 60%)" fill="url(#emailGradient)" strokeWidth={2} dot={{ r: 3, fill: "hsl(217, 91%, 60%)" }} />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default EmailsLineChart;
