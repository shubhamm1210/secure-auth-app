import { useEffect, useState } from "react";
import { getProfile } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getProfile();
        setUser(res.data);
      } catch (err) {
        localStorage.removeItem("token");
        navigate("/");
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (!user) return <div className="text-white p-10">Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl font-bold mb-4">
        Welcome, {user.name} 👋
      </h1>

      <p className="mb-6 text-slate-300">{user.email}</p>

      <button
        onClick={handleLogout}
        className="bg-red-500 px-6 py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
