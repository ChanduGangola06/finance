import { DataGrid } from "@/components/data-grid";
import { DataTable } from "@/components/data-table";

export default function DashboardPage() {
    return (
        <div className="max-w-screen-2xl">
            <DataGrid />
            <DataTable />
        </div>
    );
}