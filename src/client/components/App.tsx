import Home from "./Home";
import OwnerLogin from "./OwnerLogin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShopDetail from "./ShopDetail";
import OwnerSignUp from "./OwnerSignUp";
import ShopCreate from "./ShopCreate";
// import { PrivateRoute } from "../AuthRouter";
import OwnerLogout from "./OwnerLogout";
import Owner from "./Owner";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/owners/login" element={<OwnerLogin />}></Route>
          <Route path="/owners/logout" element={<OwnerLogout />}></Route>
          <Route path="/owners/access" element={<OwnerSignUp />}></Route>
          <Route path="/shops/new" element={<ShopCreate />}></Route>
          <Route path="/shops/:id" element={<ShopDetail />}></Route>
          <Route path="/owners" element={<Owner />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
