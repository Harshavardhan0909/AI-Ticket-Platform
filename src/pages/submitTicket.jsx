import { useState } from "react";
import { generateAISuggestions } from "../utils/aiEngine";
import { getTickets, saveTickets } from "../utils/storage";
import AISuggestions from "../components/AiSuggestions";

export default function SubmitTicket() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Low",
  });

  const [ai, setAI] = useState(null);

  const generateAI = () => {
    const result = generateAISuggestions(
      form.title,
      form.description,
      form.priority
    );
    setAI(result);
  };

  const submitTicket = () => {
    const tickets = getTickets();

    saveTickets([
      ...tickets,
      {
        id: Date.now(),
        ...form,
        ...ai,
        status: "Open",
      },
    ]);

    alert("Ticket Submitted ✅");
    setForm({ title: "", description: "", priority: "Low" });
    setAI(null);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 space-y-6">

        <h2 className="text-2xl font-bold">
          Submit New Ticket
        </h2>

        {/* TITLE */}
        <div>
          <label className="text-sm font-medium">
            Ticket Title
          </label>
          <input
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
            className="w-full mt-1 border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="text-sm font-medium">
            Description
          </label>
          <textarea
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            rows={5}
            className="w-full mt-1 border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* PRIORITY */}
        <div>
          <label className="text-sm font-medium">
            Priority
          </label>
          <select
            value={form.priority}
            onChange={(e) =>
              setForm({ ...form, priority: e.target.value })
            }
            className="w-full mt-1 border rounded-lg p-3"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4">
          <button
            onClick={generateAI}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition"
          >
            Generate AI Suggestions
          </button>

          <button
            onClick={submitTicket}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl transition"
          >
            Submit Ticket
          </button>
        </div>

        {/* AI PANEL */}
        <AISuggestions ai={ai} />
      </div>
    </div>
  );
}