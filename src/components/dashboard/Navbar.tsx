import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import barclaysLogo from "@/assets/barclays-logo.png";

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
      className="bg-primary px-6 py-4 flex items-center justify-between rounded-2xl"
    >
      <div className="flex items-center gap-3">
        <img src={barclaysLogo} alt="Barclays Logo" className="h-8 brightness-0 invert" />
        <div className="h-6 w-px bg-primary-foreground/30" />
        <div>
          <h1 className="text-lg font-bold text-primary-foreground tracking-tight">Fraud Detection Dashboard</h1>
          <p className="text-xs text-primary-foreground/70">Real-time monitoring & analytics</p>
        </div>
      </div>

      <div className="relative flex items-center">
        <label className="text-xs text-primary-foreground/80 mr-2">Filter by Department:</label>
        <div className="inline-flex items-center gap-1 bg-primary-foreground/15 border border-primary-foreground/20 px-3 py-2 rounded-xl text-sm cursor-pointer">
          <select
            value={selectedDepartment}
            onChange={(e) => onDepartmentChange(e.target.value)}
            className="bg-transparent text-primary-foreground outline-none cursor-pointer appearance-none pr-5"
          >
            {departments.map((d) => (
              <option key={d} value={d} className="bg-card text-foreground">{d}</option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-primary-foreground/70 absolute right-3 pointer-events-none" />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
