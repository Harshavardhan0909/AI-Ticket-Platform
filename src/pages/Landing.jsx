import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="max-w-4xl mx-auto text-center space-y-10">
      <h1 className="text-4xl font-bold">
        AI-Driven Ticket Management Platform
      </h1>

      <p className="text-lg text-gray-600">
        Reduce misrouted tickets, speed up resolutions with AI assistance.
      </p>

      <Link
        to="/dashboard"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl"
      >
        Try Demo
      </Link>

      <div className="grid md:grid-cols-2 gap-6 text-left">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Problem</h3>
          <p>Manual routing causes delays and inefficiency.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Solution</h3>
          <p>AI categorizes and routes tickets instantly.</p>
        </div>
      </div>
    </div>
  );
}