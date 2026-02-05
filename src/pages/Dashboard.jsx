export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <Card title="Patients" value="124" />
        <Card title="Appointments Today" value="18" />
        <Card title="Revenue" value="₹12,500" />
      </div>
    </>
  );
}

function Card({ title, value }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
}

const styles = {
  card: {
    padding: "20px",
    background: "#f1f5f9",
    borderRadius: "8px",
    minWidth: "180px",
  },
};

