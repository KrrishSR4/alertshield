import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ShieldAlert, ShieldCheck, Target, PoundSterling, Download } from "lucide-react";
import Navbar from "@/components/dashboard/Navbar";
import KpiCard from "@/components/dashboard/KpiCard";
import EmailsLineChart from "@/components/dashboard/EmailsLineChart";
import FraudPieChart from "@/components/dashboard/FraudPieChart";
import DepartmentBarChart from "@/components/dashboard/DepartmentBarChart";
import FraudTable from "@/components/dashboard/FraudTable";
import SummaryCard from "@/components/dashboard/SummaryCard";
import { kpiData, recentFraudCases, departments } from "@/data/mockData";

const Index = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const filteredCases = selectedDepartment === "All"
    ? recentFraudCases
    : recentFraudCases.filter((c) => c.department === selectedDepartment);

  const kpis = [
    { title: "Total Emails Scanned", value: kpiData.totalScanned.toLocaleString(), icon: Mail },
    { title: "Fraud Emails Detected", value: kpiData.fraudDetected.toLocaleString(), icon: ShieldAlert },
    { title: "Safe Emails", value: kpiData.safeEmails.toLocaleString(), icon: ShieldCheck },
    { title: "Detection Accuracy", value: `${kpiData.accuracy}%`, icon: Target },
    { title: "Money Saved", value: `£${(kpiData.moneySaved / 1000000).toFixed(1)}M`, icon: PoundSterling },
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 space-y-5">
      <Navbar
        selectedDepartment={selectedDepartment}
        onDepartmentChange={setSelectedDepartment}
        departments={departments}
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {kpis.map((kpi, i) => (
          <KpiCard key={kpi.title} title={kpi.title} value={kpi.value} icon={kpi.icon} delay={i * 0.08} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <EmailsLineChart />
        <FraudPieChart />
        <DepartmentBarChart />
      </div>

      {/* Table + Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-3">
          <FraudTable cases={filteredCases} />
        </div>
        <SummaryCard />
      </div>

      {/* Download Button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="flex justify-end"
      >
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => {
            const headers = ["Employee","Department","Email ID","Fraud Status","System Decision","Human Verification","Timestamp"];
            const rows = filteredCases.map(c => [c.employee, c.department, c.emailId, c.fraudStatus, c.systemDecision, c.humanVerification, c.timestamp]);
            const csv = [headers, ...rows].map(r => r.map(v => `"${v}"`).join(",")).join("\n");
            const blob = new Blob([csv], { type: "text/csv" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "fraud-report.csv";
            a.click();
            URL.revokeObjectURL(url);
          }}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-primary/25 transition-shadow hover:shadow-xl hover:shadow-primary/30"
        >
          <Download className="w-4 h-4" />
          Download Report
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Index;
