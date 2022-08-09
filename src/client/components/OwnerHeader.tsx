import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../styles/header.css";
import React, { useEffect, useState } from "react";
// import logo from "../images/decafelogo.png";

const OwnerHeader = () => {
  return (
    <div className="header">
      <h1 className="ownerWrapper">
        {/* <Link to="/">Home</Link> */}
        <Link to="/" reloadDocument>
          <img src="../images/decafelogo.png" className="logo" alt="logo"></img>
          {/* src="../../../public/images/decafelogo.png" */}
        </Link>
      </h1>
    </div>
  );
};

export default OwnerHeader;
