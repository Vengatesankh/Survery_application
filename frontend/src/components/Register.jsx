import { useState } from "react";

const Register = ({ onSuccess }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    const res = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Registered successfully. Please login.");
      onSuccess(); // switch to login
    } else {
      alert("Register failed");
    }
  };

  return (
    <div className="bg-white p-4 max-w-md mx-auto mb-6 rounded shadow">
      <h2 className="text-xl font-bold mb-3">Register</h2>

      <input
        placeholder="Email"
        className="border p-2 w-full mb-2"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-3"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button
        onClick={handleRegister}
        className="bg-blue-600 text-white w-full p-2 rounded"
      >
        Register
      </button>
    </div>
  );
};

export default Register;
