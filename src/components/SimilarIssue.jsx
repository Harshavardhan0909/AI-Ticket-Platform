export default function SimilarIssues({ currentTicket, tickets }) {
  if (!currentTicket) return null;

  const keywords = currentTicket.description
    .toLowerCase()
    .split(" ");

  const similar = tickets.filter(t => {
    if (t.id === currentTicket.id) return false;

    return keywords.some(word =>
      t.description?.toLowerCase().includes(word)
    );
  }).slice(0, 3);

  if (similar.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-6">
      <h3 className="font-semibold mb-4">
        Similar Past Tickets
      </h3>

      <div className="space-y-3">
        {similar.map(ticket => (
          <div
            key={ticket.id}
            className="border rounded-lg p-3"
          >
            <p className="font-medium">{ticket.title}</p>
            <p className="text-sm text-gray-600">
              {ticket.summary}
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Estimated resolution: 2–3 days
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}