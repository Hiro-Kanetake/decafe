import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" reloadDocument>
        <div className="picWrapper">
          <img
            className="logoPic"
            width="50"
            src="https://i.im.ge/2022/08/03/FCRHSS.logo-cafe.jpg"
            alt="logo cafe"
          />
          <div className="decafeText">Decafé</div>
        </div>
      </Link>
      <div className="shopLinkWrapper">
        <Link to="/login">Shop Login</Link>
      </div>
    </div>
  );
};

export default Header;