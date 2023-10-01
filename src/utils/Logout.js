import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "react-use";

const Logout = () => {
  const [, setUser] = useLocalStorage("user");
  const navigate = useNavigate();
  useEffect(() => {
    setUser(null);
    navigate("/");
  }, [navigate, setUser]);
  return null;
};

export default Logout;
