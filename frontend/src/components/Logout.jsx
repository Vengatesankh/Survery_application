const Logout = () => {
  const handleLogout = async () => {
    const res = await fetch("http://localhost:5000/api/logout", {
      method: "POST",
      credentials: "include",
    });

    if (res.ok) {
      alert("Logged out successfully");
      window.location.reload();
    } else {
      alert("Logout failed");
    }
  };

  return (
    <div className="text-center mb-4">
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
