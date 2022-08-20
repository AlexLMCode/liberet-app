import { BsClock } from "react-icons/bs";
import "../styles/PillComponent.css";

export const TimePillComponent = () => {
  return (
    <div className="pill-container">
      <BsClock color="#fcab3f" size={20}/>
      <select className="pill-container-select" onSubmit={(e)=>e.preventDefault()}>
        <option value="1">11:00 am - 12:00 am</option>
        <option value="2">1:00 pm - 2:00 pm</option>
        <option value="3">2:00 pm - 3:00 pm</option>
      </select>
    </div>
  );
};
