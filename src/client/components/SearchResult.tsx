import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { findAllShops } from "../api";
import { SearchbarOptions } from "./Home";
import "../styles/searchResult.css";
import MenuMapWrapper from "./MenuMapWrapper";
import modelType from "../model.type";
import { ShopInfo } from "../../share/model.type";

interface SearchResultProps {
  selectedOption: SearchbarOptions | null;
}

const SearchResult: React.FC<SearchResultProps> = ({ selectedOption }) => {
  const [allShops, setAllShops] = useState<ShopInfo[]>([]);

  let displayShops = allShops.map((shop) => {
    return (
      <div className="shopInfo">
        <div className="shopInfoText">
          <label className="shopName" htmlFor="accordion">
            {shop.name}
          </label>
          <p>
            Address: <span className="shopAddress">{shop.address}</span>
          </p>
          <div className="imageWrapper">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="cute coffee"
            />
          </div>
        </div>
        <div className="mapmenuwrapper">
          <input type="checkbox" name="" id="accordion" className="check" />
          <MenuMapWrapper shopInfo={shop} />
        </div>
      </div>
    );
  });

  //filter shops by station
  useEffect(() => {
    (async () => {
      const result = await findAllShops();
      const filteredShops: ShopInfo[] = result.filter((e) => {
        return e.station === selectedOption?.value;
      });
      setAllShops(filteredShops);
    })();
  }, [allShops, selectedOption]);

  return (
    <div className="shopListWrapper">
      <h2>
        Shops in <span className="stationName">{selectedOption?.label}</span>
      </h2>
      <div className="shopInfoWrapper">{displayShops}</div>
      <div className="cafeShopPicWrapper"></div>
    </div>
  );
};

export default SearchResult;
