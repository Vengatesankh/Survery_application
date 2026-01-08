import { useState } from "react";

const Login = ({ onLogin }) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(login),
      });

      if (res.ok) {
        alert("Login successful");
        setLogin({ email: "", password: "" });

        onLogin(); // ✅ VERY IMPORTANT
      } else {
        alert("User Not Found.Register Now");
      }
    } catch (err) {
      console.error(err);
      alert("Server not reachable");
    }
  };

  return (
    <div className="bg-white p-4 max-w-md mx-auto mb-6 rounded shadow">
      <h2 className="text-xl font-bold mb-3">Login</h2>

      <input
        placeholder="Email"
        className="border p-2 w-full mb-2"
        value={login.email}
        onChange={(e) => setLogin({ ...login, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-3"
        value={login.password}
        onChange={(e) => setLogin({ ...login, password: e.target.value })}
      />

      <button
        onClick={handleLogin}
        className="bg-green-600 text-white w-full p-2 rounded"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
