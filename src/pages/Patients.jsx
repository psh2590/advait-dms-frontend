import ToothChart from "../components/ToothChart";

export default function Patients() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-semibold dark:text-white">
        Patient Profile
      </h1>

      {/* Patient basic info card */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-6">
        <p className="dark:text-white"><b>Name:</b> Rahul Sharma</p>
        <p className="dark:text-white"><b>Age:</b> 32</p>
        <p className="dark:text-white"><b>Mobile:</b> 9876543210</p>
      </div>

      {/* Dental chart */}
      <ToothChart />
    </div>
  );
}
