import { Shield, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface NavbarProps {
  selectedDepartment: string;
  onDepartmentChange: (dept: string) => void;
  departments: string[];
}

const Navbar = ({ selectedDepartment, onDepartmentChange, departments }: NavbarProps) => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-card px-6 py-4 flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
          <Shield className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-foreground tracking-tight">Fraud Detection Dashboard</h1>
          <p className="text-xs text-muted-foreground">Real-time monitoring & analytics</p>
        </div>
      </div>

      <div className="relative">
        <label className="text-xs text-muted-foreground mr-2">Filter by Department:</label>
        <div className="inline-flex items-center gap-1 glass-card px-3 py-2 text-sm cursor-pointer">
          <select
            value={selectedDepartment}
            onChange={(e) => onDepartmentChange(e.target.value)}
            className="bg-transparent text-foreground outline-none cursor-pointer appearance-none pr-5"
          >
            {departments.map((d) => (
              <option key={d} value={d} className="bg-card text-foreground">{d}</option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-muted-foreground absolute right-3 pointer-events-none" />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
