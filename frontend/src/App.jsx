import { useEffect, useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    rating: "",
    category: "",
    message: "",
  });

  const [surveys, setSurveys] = useState([]);

  const fetchSurveys = async () => {
    const res = await fetch("http://localhost:5000/api/survey");
    const data = await res.json();
    setSurveys(data);
  };

  useEffect(() => {
    fetchSurveys();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/survey", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({
      name: "",
      email: "",
      rating: "",
      category: "",
      message: "",
    });

    fetchSurveys();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Survey Feedback Application
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md max-w-xl mx-auto mb-8"
      >
        <input
          name="name"
          placeholder="Name"
          className="border p-2 w-full mb-3"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
          value={form.email}
          onChange={handleChange}
          required
        />

        <select
          name="rating"
          className="border p-2 w-full mb-3"
          value={form.rating}
          onChange={handleChange}
          required
        >
          <option value="">Select Rating</option>
          <option value="1">1 - Poor</option>
          <option value="2">2</option>
          <option value="3">3 - Average</option>
          <option value="4">4</option>
          <option value="5">5 - Excellent</option>
        </select>

        <select
          name="category"
          className="border p-2 w-full mb-3"
          value={form.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Website">Website</option>
          <option value="Service">Service</option>
          <option value="Product">Product</option>
        </select>

        <textarea
          name="message"
          placeholder="Your feedback"
          className="border p-2 w-full mb-4"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Submit Survey
        </button>
      </form>

      <div className="max-w-xl mx-auto">
        {surveys.map((s) => (
          <div key={s._id} className="bg-white p-4 rounded shadow mb-3">
            <h3 className="font-bold">
              {s.name} ({s.rating}/5)
            </h3>
            <p className="text-sm text-gray-600">{s.email}</p>
            <p className="text-sm">Category: {s.category}</p>
            <p className="mt-2">{s.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
