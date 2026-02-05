import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
  const { pathname } = useLocation();

  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Patients", path: "/patients" },
    { name: "Appointments", path: "/appointments" },
    { name: "Billing", path: "/billing" },
  ];

  return (
    <div className="w-64 min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white flex flex-col p-6">
      {/* Logo */}
      <h1 className="text-2xl font-bold mb-8">AdvaitDMS</h1>

      {/* Menu */}
      <nav className="flex flex-col gap-3 flex-1">
        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-4 py-2 rounded-lg transition ${
              pathname === item.path
                ? "bg-blue-600"
                : "hover:bg-slate-700"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Theme Toggle */}
      <div className="pt-6 border-t border-slate-700">
        <ThemeToggle />
      </div>
    </div>
  );
}
