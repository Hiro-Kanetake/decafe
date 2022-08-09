import React, { useEffect, useState } from "react";
import "../styles/ShopInfo.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { findAllShops } from "../api";

interface AllShopsInfo {
  id: number;
  name: string;
  address: string;
}

const Owner: React.FC = () => {
  const [allShops, setAllShops] = useState<AllShopsInfo[]>([]);

  let displayShops = allShops.map((shop) => {
    return (
      <div className="shopInfo">
        <Link to={"/shops/" + shop.id}>
          <div className="shopInfoText">
            <span className="shopName">{shop.name}</span>
            <br></br>
            Address: <span className="shopAddress">{shop.address}</span>
            <div className="imageWrapper">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="cute coffee"
              />
            </div>
          </div>
        </Link>
      </div>
    );
  });

  useEffect(() => {
    (async () => {
      const result = await findAllShops();
      console.log(result);
    })();
  }, [allShops, setAllShops]);

  return (
    <>
      <p>
        <Link to="/owners/logout">Logout</Link>
      </p>
      <div className="owner">
        <p>
          <Link to="/shops/new">Create Shop</Link>
        </p>
        <div className="shopInfo_ow">
          <div className="shopInfoPhoto_ow">
            <img src="" alt="" />
          </div>
          <div className="shopInfoText_ow">
            <h2>shop name</h2>
            <p>〒166-0003 東京都杉並区高円寺南4丁目9-6 第三矢島ビル 2F</p>
            <label className="open" htmlFor="pop-up">
              Menu
            </label>
            <input type="checkbox" id="pop-up" />
            <div className="overlay">
              <div className="window">
                <label className="close" htmlFor="pop-up">
                  x
                </label>
                <ul>
                  <li>Hot coffee</li>
                  <li>Ice coffee</li>
                  <li>Jam Toast</li>
                  <li>Pizza Toast</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Owner;
