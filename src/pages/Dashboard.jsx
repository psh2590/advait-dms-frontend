export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">
        Welcome, Dr. Sharma 👋
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Patients" value="124" />
        <StatCard title="Today's Appointments" value="18" />
        <StatCard title="Today's Revenue" value="₹12,500" />
      </div>

      <div className="mt-10 bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">
          Upcoming Appointments
        </h2>
        <ul className="space-y-2">
          <li>10:00 AM – Ramesh (Cleaning)</li>
          <li>11:30 AM – Sita (Root Canal)</li>
        </ul>
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-gray-500">{title}</p>
      <h2 className="text-3xl font-bold mt-2">{value}</h2>
    </div>
  );
}
