import Chart from "@/components/ui/chart/chart";
import CardItem from "@/components/ui/dashboard/card-item";
import Rightbar from "@/components/ui/dashboard/right-bar";
import Transactions from "@/components/ui/transactions/transactions";
import { cn } from "@/lib/utils";
import styles from "@/styles/dashboard.module.css";

export default function DashboardPage() {
  return (
    <div className="flex gap-5  mt-5 flex-col lg:flex-row">
      {/* main  */}
      <div className={cn("flex flex-col gap-5", styles.main)}>
        {/* cards  */}
        <CardItem />
        <Transactions />
        <Chart />
      </div>
      {/* side  */}
      <div className={styles.rightbar}>
        <Rightbar />
      </div>
    </div>
  );
}
