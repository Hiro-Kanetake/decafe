import {
  BrowserRouter as Router,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import "../styles/header.css";
import { decodeOwnerId } from "../api";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="App-header">
      <div className="header">
        <Link to="/" reloadDocument></Link>
        <button
          onClick={() => {
            decodeOwnerId()
              .then(() => {
                navigate("./owners/id");
              })
              .catch(() => {
                navigate("./owners/new");
              });
          }}
        >
          Owner Portal
        </button>
      </div>
    </header>
  );
};

export default Header;
