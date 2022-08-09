import { useEffect, useState } from "react";
import modelType from "../model.type";
import Menu from "./Menu";
import Map from "./Map";
import { findShopAndMenuById } from "../api";

interface ShopInfoProps {
  shopInfo: modelType.ShopInfo;
}

const MenuMapWrapper: React.FC<ShopInfoProps> = ({ shopInfo }) => {
  const id = shopInfo.id;
  const [shopDetail, setShopDetail] = useState<modelType.ShopAndMenu>();

  useEffect(() => {
    (async () => {
      const shop: modelType.ShopAndMenu = await findShopAndMenuById(id);
      setShopDetail(shop);
    })();
  }, [id]);

  return (
    <div className="shopInfo_ow">
      <Menu shopDetail={shopDetail} />
      <Map shopDetail={shopDetail} />
    </div>
  );
};

export default MenuMapWrapper;
