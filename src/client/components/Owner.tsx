import React, { useEffect, useState } from "react";
import "../styles/ShopInfo.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { findAllShops } from "../api";
import { decodeOwnerId } from "../api";
import { ShopInfo } from "../../share/model.type";
import MenuMapWrapper from "./MenuMapWrapper";
import OwnerPortalHeader from "./OwnerPortalHeader";

const Owner: React.FC = () => {
  const [allShops, setAllShops] = useState<ShopInfo[]>([]);
  const [ownerId, setOwnerId] = useState<number>();
  const [ownerShops, setOwnerShops] = useState<ShopInfo[]>([]);

  useEffect(() => {
    (async () => {
      const id = await decodeOwnerId();
      setOwnerId(id);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const result = await findAllShops();
      setAllShops(result);
    })();
  }, [ownerId]);

  let displayShops = allShops.map((shop) => {
    return (
      <div className="shopInfo">
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
            <div className="mapmenuwrapper">
              <MenuMapWrapper shopInfo={shop} />
            </div>
          </div>
      </div>
    );
  });

  return (
    <div className="shopListWrapper">
      <OwnerPortalHeader />
      <h2>
        Shops in <span className="stationName"/>
      </h2>
      <div className="shopInfoWrapper">{displayShops}</div>
      <div className="cafeShopPicWrapper"></div>
    </div>
  );
};

export default Owner;
