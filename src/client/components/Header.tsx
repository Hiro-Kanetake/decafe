import {
  BrowserRouter as Router,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  const navigate = useNavigate();
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
          <button onClick={() => navigate("./owners/new")}>Owner Portal</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
