import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const login = () => {
    navigate("/dashboard");
  };

  return (
    <div style={styles.container}>
      <h1>Advait Prime DMS</h1>
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <button onClick={login}>Login</button>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
};

