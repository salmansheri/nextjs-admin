import Navbar from "@/components/ui/navbar";
import Sidebar from "@/components/ui/sidebar/sidebar";

export default function DashboardLayou({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-full">
      <div className=" fixed inset-y-0 w-72 h-screen hidden md:block">
        <Sidebar />
      </div>
      <main className="pl-5 lg:pl-80 p-6">
        <Navbar />

        {children}
      </main>
    </div>
  );
}
