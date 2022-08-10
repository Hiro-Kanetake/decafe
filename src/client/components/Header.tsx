import { useState, useEffect } from "react";
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
      <div className="header header_ow">
        <h1 className="ownerWrapper">
          {/* <Link to="/">Home</Link> */}
          <Link to="/" reloadDocument>
            <img
              src="../images/decafelogo.png"
              className="logo"
              alt="logo"
            ></img>
            {/* src="../../../public/images/decafelogo.png" */}
          </Link>
        </h1>
        <div>
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
      </div>
    </header>
  );
};

export default Header;
