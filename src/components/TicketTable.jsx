import { useState } from "react";

export default function TicketTable({ tickets }) {
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  const filtered = tickets.filter(t =>
    (statusFilter === "All" || t.status === statusFilter) &&
    (priorityFilter === "All" || t.priority === priorityFilter)
  );

  return (
    <div className="bg-white rounded-2xl shadow p-4">

      {/* Filters */}
      <div className="flex gap-4 mb-4">
        <select
          className="border rounded px-2 py-1"
          onChange={e => setStatusFilter(e.target.value)}
        >
          <option>All</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Closed</option>
        </select>

        <select
          className="border rounded px-2 py-1"
          onChange={e => setPriorityFilter(e.target.value)}
        >
          <option>All</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      {/* Table */}
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100 text-gray-600">
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
          {filtered.map(ticket => (
            <tr key={ticket.id} className="border-t text-center">
              <td>{ticket.id}</td>
              <td>{ticket.title}</td>
              <td>{ticket.summary}</td>
              <td>{ticket.team}</td>
              <td>{ticket.priority}</td>
              <td>{ticket.dueDate}</td>
              <td>
                <span className="px-2 py-1 bg-blue-100 rounded-lg">
                  {ticket.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}