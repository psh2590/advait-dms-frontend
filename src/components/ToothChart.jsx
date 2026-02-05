const teeth = [
  "18","17","16","15","14","13","12","11",
  "21","22","23","24","25","26","27","28",
  "48","47","46","45","44","43","42","41",
  "31","32","33","34","35","36","37","38"
];

export default function ToothChart() {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4 dark:text-white">
        Tooth Chart
      </h2>

      <div className="grid grid-cols-8 gap-2">
        {teeth.map((tooth) => (
          <button
            key={tooth}
            className="border rounded-lg p-3 hover:bg-blue-100 
                       dark:border-slate-600 dark:text-white 
                       dark:hover:bg-slate-700"
          >
            {tooth}
          </button>
        ))}
      </div>
    </div>
  );
}
