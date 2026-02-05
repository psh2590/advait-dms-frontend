import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Advait Prime DMS
        </h1>

        <input
          className="w-full border p-2 rounded mb-3"
          placeholder="Email"
        />
        <input
          type="password"
          className="w-full border p-2 rounded mb-4"
          placeholder="Password"
        />

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}
