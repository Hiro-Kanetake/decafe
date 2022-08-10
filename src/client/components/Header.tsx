import {
  BrowserRouter as Router,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import "../styles/header.css";
import { decodeOwnerId } from "../api";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState<string>("");
  useEffect(() => {
    decodeOwnerId()
      .then(() => {
        setButtonText("My Portal");
      })
      .catch(() => {
        setButtonText("Owner Portal");
      });
  }, []);

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
                navigate("./owners/access");
              });
          }}
        >
          {buttonText}
        </button>
      </div>
    </header>
  );
};

export default Header;
