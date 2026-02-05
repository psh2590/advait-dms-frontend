export default function Appointments() {
  const slots = [
    { time: "10:00 AM", name: "Ramesh", type: "Cleaning" },
    { time: "11:30 AM", name: "Sita", type: "RCT" },
    { time: "01:00 PM", name: "Amit", type: "Checkup" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4 dark:text-white">
        Appointments
      </h1>

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow">
        {slots.map((a, i) => (
          <div
            key={i}
            className="flex justify-between p-4 border-b 
                       dark:border-slate-700"
          >
            <span className="font-medium dark:text-white">
              {a.time}
            </span>
            <span className="dark:text-slate-300">
              {a.name} – {a.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
