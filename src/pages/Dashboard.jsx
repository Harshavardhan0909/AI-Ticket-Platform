import { useEffect, useState } from "react";
import { getTickets } from "../utils/storage";

export default function Dashboard() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    setTickets(getTickets());
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Ticket Dashboard</h2>

      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-200">
            <th>ID</th>
            <th>Title</th>
            <th>Summary</th>
            <th>Team</th>
            <th>Priority</th>
            <th>Due</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {tickets.map(t => (
            <tr key={t.id} className="text-center border-t">
              <td>{t.id}</td>
              <td>{t.title}</td>
              <td>{t.summary}</td>
              <td>{t.team}</td>
              <td>{t.priority}</td>
              <td>{t.dueDate}</td>
              <td>{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}