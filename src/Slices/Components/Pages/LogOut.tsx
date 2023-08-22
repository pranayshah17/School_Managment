import { useNavigate } from "react-router-dom";

interface LogOutProps {
  handleLogout: () => void;
}

const LogOut: React.FC<LogOutProps> = ({ handleLogout }) => {
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    handleLogout();
    navigate("/loginpage"); // Call the handleLogout function
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
};

export default LogOut;
