import "../styles/Map.css";
import modelType from "../model.type";

interface ShopInfoProps {
  shopDetail: modelType.ShopAndMenu;
}

const Map: React.FC<ShopInfoProps> = ({ shopDetail }) => {
  const shoploc = {
    lat: shopDetail?.shop?.latitude,
    lng: shopDetail?.shop?.longitude,
    address: shopDetail?.shop?.address,
  };
  return (
    <div className="mapwrapper">
      <span className="location">Location</span>
      <div className="map">
        <iframe
          src={`https://maps.google.com/maps?q=${shoploc.lat}, ${shoploc.lng}&z=15&output=embed`}
          loading="lazy"
        ></iframe>
      </div>
      <div className="address">{shoploc.address}</div>
    </div>
  );
};

export default Map;
