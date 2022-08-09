import modelType from "../model.type";
import "../styles/Menu.css";

interface ShopInfoProps {
  shopDetail: modelType.ShopAndMenu;
}

const Menu: React.FC<ShopInfoProps> = ({ shopDetail }) => {
  const menu = shopDetail?.menus;
  return (
    <div className="menutable">
      <h3 className="menuTop">Menu</h3>
      <ul className="menuTitle_ow">
        <li>Drink</li>
        <li>Price</li>
      </ul>
      <ul className="menu">
        {menu?.map((singleMenu) => {
          return (
            <li className="list">
              <span>{singleMenu.name}</span>
              <span className="drinkprice">¥{singleMenu.price}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
