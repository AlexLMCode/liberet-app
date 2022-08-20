import { BsFillPlusCircleFill } from "react-icons/bs";
import "../styles/PillComponent.css";

export const PlatillosPillComponent = () => {
  return (
    <div
      className="pill-container"
      onClick={() => alert("Alerta de platillo")}
      onSubmit={(e) => e.preventDefault()}
    >
      <BsFillPlusCircleFill color="#fcab3f" size={20} />
      <select className="pill-container-select">
        <option value="1">Platillos</option>
      </select>
    </div>
  );
};
