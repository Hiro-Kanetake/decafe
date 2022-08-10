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

  // This is just for mock-up to show ALL shops no matter what owner ID
  // let displayShops = allShops.map((shop) => {
  //   return (
  //     <div className="shopInfo">
  //       <div className="shopInfoText">
  //         <label className="shopName" htmlFor={shop.id + "accordion"}>
  //           {shop.name}
  //         </label>
  //         <br></br>
  //         Address: <span className="shopAddress">{shop.address}</span>
  //         <div className="imageWrapper">
  //           <img
  //             src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  //             alt="cute coffee"
  //           />
  //         </div>
  //         <div className="mapmenuwrapper">
  //           <input
  //             type="checkbox"
  //             name=""
  //             id={shop.id + "accordion"}
  //             className="check"
  //           />
  //           <MenuMapWrapper shopInfo={shop} />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // });

  // This is for when we manage to implement shop create feature [Lines 58~93]
  useEffect(() => {
    // (async () => {
    const filteredShops = allShops.filter((shop) => {
      if (shop.owner_id == ownerId) return true;
    });
    setOwnerShops(filteredShops);
    // })
  }, [allShops]);

  let displayShops = ownerShops.map((shop) => {
    return (
      <div className="shopInfo">
        <div className="shopInfoText">
          <label className="shopName" htmlFor={shop.id + "accordion"}>
            {shop.name}
          </label>
          <br></br>
          Address: <span className="shopAddress">{shop.address}</span>
          <div className="imageWrapper">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="cute coffee"
            />
          </div>
          <div className="mapmenuwrapper">
            <input
              type="checkbox"
              name=""
              id={shop.id + "accordion"}
              className="check"
            />
            <MenuMapWrapper shopInfo={shop} />
          </div>
        </div>
      </div>
    );
  });

  if (ownerShops) {
    return (
      <>
        <OwnerPortalHeader />

        <div className="shopListWrapper">
          <div className="shopListWrapperIn">
            <p className="addButton_owPortal">
              <Link to="/shops/new">Add Shop</Link>
            </p>
            <h2>
              My Shops <span className="stationName" />
            </h2>
            <div className="shopInfoWrapper">{displayShops}</div>
            <div className="cafeShopPicWrapper"></div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <OwnerPortalHeader />
        <div className="shopListWrapper">
          <h2>
            My Shops <span className="stationName" />
          </h2>
          <p className="addButton_owPortal">
            <Link to="/shops/new">Add Shop</Link>
          </p>
        </div>
      </>
    );
  }
};

export default Owner;
