import { useEffect, useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import SurveyForm from "./components/SurveyForm";
import SurveyList from "./components/SurveyList";

function App() {
  const [surveys, setSurveys] = useState([]);
  const [showLogin, setShowLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchSurveys = async () => {
    const res = await fetch("http://localhost:5000/api/survey");
    const data = await res.json();
    setSurveys(data);
  };

  useEffect(() => {
    fetchSurveys();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Survey Feedback Application
      </h1>

      {!isLoggedIn && (
        <>
          <div className="flex justify-center gap-4 mb-4">
            <button
              onClick={() => setShowLogin(true)}
              className="text-blue-600 underline"
            >
              Login
            </button>
            <button
              onClick={() => setShowLogin(false)}
              className="text-blue-600 underline"
            >
              Register
            </button>
          </div>

          {showLogin ? (
            <Login onLogin={() => setIsLoggedIn(true)} />
          ) : (
            <Register onSuccess={() => setShowLogin(true)} />
          )}
        </>
      )}

      {isLoggedIn && (
        <>
          <Logout onLogout={() => setIsLoggedIn(false)} />
          <SurveyForm refresh={fetchSurveys} />
        </>
      )}

      <SurveyList surveys={surveys} />
    </div>
  );
}

export default App;
