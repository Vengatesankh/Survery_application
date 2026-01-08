import { useState } from "react";

const SurveyForm = ({ refresh }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    rating: "",
    category: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/survey", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(form),
    });

    if (res.status === 401) {
      alert("Please login first");
      return;
    }

    setForm({
      name: "",
      email: "",
      rating: "",
      category: "",
      message: "",
    });

    refresh();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 max-w-xl mx-auto mb-6 rounded shadow"
    >
      <h2 className="text-xl font-bold mb-3">Submit Survey</h2>

      <input
        placeholder="Name"
        className="border p-2 w-full mb-2"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Email"
        className="border p-2 w-full mb-2"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <select
        className="border p-2 w-full mb-2"
        value={form.rating}
        onChange={(e) => setForm({ ...form, rating: e.target.value })}
      >
        <option value="">Rating</option>
        <option value="1">1 - Poor</option>
        <option value="2">2</option>
        <option value="3">3 - Average</option>
        <option value="4">4</option>
        <option value="5">5 - Excellent</option>
      </select>

      <select
        className="border p-2 w-full mb-2"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      >
        <option value="">Category</option>
        <option value="Website">Website</option>
        <option value="Service">Service</option>
        <option value="Product">Product</option>
      </select>

      <textarea
        placeholder="Feedback message"
        className="border p-2 w-full mb-3"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <button className="bg-blue-600 text-white w-full p-2 rounded">
        Submit Survey
      </button>
    </form>
  );
};

export default SurveyForm;
