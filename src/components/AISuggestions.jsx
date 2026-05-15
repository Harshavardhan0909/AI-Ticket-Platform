import { Sparkles } from "lucide-react";

export default function AISuggestions({ ai }) {
  if (!ai) return null;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-4 transition-all">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="text-blue-500" size={20} />
        <h3 className="font-semibold text-lg">
          AI Suggestions
        </h3>
      </div>

      <div className="space-y-2 text-sm">
        <p><b>AI Summary:</b> {ai.summary}</p>
        <p><b>Suggested Category:</b> {ai.category}</p>
        <p><b>Suggested Team:</b> {ai.team}</p>
        <p><b>Suggested Due Date:</b> {ai.dueDate}</p>
      </div>
    </div>
  );
}