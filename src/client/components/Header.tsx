import { BrowserRouter as Router, Route, Link, useNavigate } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="App-header">
      <div className="header">
      <Link to="/" reloadDocument></Link>
      <button onClick={() => navigate("./owners/login")}>Owner Log-in</button>
    </div>

    </header>
  );
};

export default Header;
