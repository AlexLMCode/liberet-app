import { BsClock } from "react-icons/bs";
import "../styles/PlatilloComponent.css";

export const PlatilloComponent = ({ image, title, price, category, tag }) => {
  return (
    <div className="platillo-component">
      <div className="platillo-component-info">
        <img src={image} alt={category} className="platillo-component-image" />
        <div className="platillo-info">
          <div className="platillo-tag">
            <p>{tag}</p>
          </div>
          <div className="platillo-titles">
            <p className="platillo-title">{title}</p>
            <p>{category}</p>
          </div>
        </div>
      </div>
      <div className="platillo-component-price">
        <BsClock color="#fcab3f" size={20} />
        <p>${price}</p>
      </div>
    </div>
  );
};
