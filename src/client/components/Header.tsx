import {
  BrowserRouter as Router,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import "../styles/header.css";
import { decodeOwnerId } from "../api";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  // const [buttonText, setButtonText] = useState<string>("");
  // setButtonText("OOOOOO");

  return (
    <header className="App-header">
      <div className="header">
        <Link to="/" reloadDocument></Link>
        <button
          onClick={() => {
            decodeOwnerId()
              .then(() => {
                navigate("./owners");
              })
              .catch(() => {
                navigate("./owners/new");
              });
          }}
        >
          Owner Portal
          {/* {buttonText} */}
        </button>
      </div>
    </header>
  );
};

export default Header;
