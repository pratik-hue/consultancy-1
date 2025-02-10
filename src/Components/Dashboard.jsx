import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800">Welcome, {user?.email}!</h2>
      <button
        onClick={() => {
          logout();
          navigate("/");
        }}
        className="bg-red-600 text-white px-6 py-2 rounded-lg mt-4"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
