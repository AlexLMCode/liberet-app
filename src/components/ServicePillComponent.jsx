import { GiForkKnifeSpoon } from "react-icons/gi";
import "../styles/PillComponent.css";

export const ServicePillComponent = ({ categories, setSelected }) => {
  return (
    <div className="pill-container">
      <GiForkKnifeSpoon color="#fcab3f" size={20} />
      <select
        className="pill-container-select"
        placeholder="Elige un servicio"
        onChange={(e) => setSelected(e.target.value)}
        onSubmit={(e) => e.preventDefault()}
      >
        {categories.length !== 0 &&
          categories.map((category) => (
            <option value={category.strCategory} key={category.idCategory}>
              {category.strCategory}
            </option>
          ))}
      </select>
    </div>
  );
};
