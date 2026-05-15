import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();

  const navItem = (path, label) => (
    <Link
      to={path}
      className={`block px-3 py-2 rounded-lg transition ${
        pathname === path
          ? "bg-blue-100 text-blue-600 font-medium"
          : "hover:bg-gray-100"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <div className="w-64 bg-white shadow-md p-6">
      <h1 className="text-xl font-bold text-blue-600 mb-8">
        AI Tickets
      </h1>

      <nav className="space-y-2">
        {navItem("/dashboard", "Dashboard")}
        {navItem("/submit", "Submit Ticket")}
        {navItem("/analytics", "Analytics")}
      </nav>
    </div>
  );
}