import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h2>AdvaitDMS</h2>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/patients">Patients</Link>
      <Link to="/appointments">Appointments</Link>
      <Link to="/billing">Billing</Link>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "220px",
    background: "#0f172a",
    color: "#fff",
    minHeight: "100vh",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
};

