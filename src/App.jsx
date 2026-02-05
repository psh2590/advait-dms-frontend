import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Appointments from "./pages/Appointments";
import Billing from "./pages/Billing";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="/patients"
        element={
          <Layout>
            <Patients />
          </Layout>
        }
      />
      <Route
        path="/appointments"
        element={
          <Layout>
            <Appointments />
          </Layout>
        }
      />
      <Route
        path="/billing"
        element={
          <Layout>
            <Billing />
          </Layout>
        }
      />
    </Routes>
  );
}

function Layout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>{children}</div>
    </div>
  );
}
