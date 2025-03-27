import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h2>Expense Tracker Home</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
