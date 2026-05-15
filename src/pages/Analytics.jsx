import { getTickets } from "../utils/storage";
import MetricCard from "../components/MetricCard";

export default function Analytics() {
  const tickets = getTickets();

  return (
    <div className="grid grid-cols-2 gap-6">
      <MetricCard title="Total Tickets" value={tickets.length}/>
      <MetricCard title="Misrouted %" value="12%"/>
      <MetricCard title="Avg Resolution" value="2.4 days"/>
      <MetricCard title="SLA Violations" value="3"/>
      <MetricCard title="Most Common Category" value="Network"/>
    </div>
  );
}