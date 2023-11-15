import Chart from "@/components/ui/chart/chart";
import Card from "@/components/ui/dashboard/card";
import CardItem from "@/components/ui/dashboard/card-item";
import Rightbar from "@/components/ui/dashboard/right-bar";
import Transactions from "@/components/ui/transactions/transactions";
import { cn } from "@/lib/utils";
import styles from "@/styles/dashboard.module.css";
import { MdSupervisedUserCircle } from "react-icons/md";

export default function DashboardPage() {
  return (
    <div className="flex gap-5 mt-5">
      {/* main  */}
      <div className={cn("flex flex-col gap-5", styles.main)}>
        {/* cards  */}
        <CardItem />
        <Transactions />
        <Chart />
      </div>
      {/* side  */}
      <div>
        <Rightbar />
      </div>
    </div>
  );
}
