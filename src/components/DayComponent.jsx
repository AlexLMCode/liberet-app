import "../styles/DayComponent.css";

export const DayComponent = ({ number, day, isSelected, onClick }) => {

  return (
    <div className="day-component">
      <p>{day}</p>
      <div
        className={`day-number ${isSelected ? "selected" : ""}`}
        onClick={onClick}
      >
        {number}
      </div>
    </div>
  );
};
