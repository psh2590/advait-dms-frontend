export default function Patients() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Patients</h1>

      <div className="bg-white shadow rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Mobile</th>
              <th className="p-3">Last Visit</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t hover:bg-slate-50">
              <td className="p-3">Rahul Sharma</td>
              <td className="p-3">9876543210</td>
              <td className="p-3">02 Feb 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
