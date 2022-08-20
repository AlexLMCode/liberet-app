import { useState } from "react";
import "../styles/DayComponent.css";

export const DayComponent = ({ number, day }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="day-component">
      <p>{day}</p>
      <div
        className={`day-number ${isSelected ? "selected" : ""}`}
        onClick={() => setIsSelected(!isSelected)}
      >
        {number}
      </div>
    </div>
  );
};
