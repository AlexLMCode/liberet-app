import "../styles/DatesComponent.css";
import { DayComponent } from "./DayComponent";

export const DatesComponent = () => {

  return (
    <div className="dates_container">
      {["Lun","Mar","Mie","Jue","Vie","Sab","Dom"].map((i,index) => (
        <div key={index}>
          <DayComponent number={index+1} day={i}/>
        </div>
      ))}
    </div>
  );
};
