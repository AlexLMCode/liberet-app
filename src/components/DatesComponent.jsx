import { useState } from "react";
import "../styles/DatesComponent.css";
import { DayComponent } from "./DayComponent";

export const DatesComponent = () => {
  const [days, setDays] = useState([
    { name: "Lun", isOn: false },
    { name: "Mar", isOn: false },
    { name: "Mie", isOn: false },
    { name: "Jue", isOn: false },
    { name: "Vie", isOn: false },
    { name: "Sab", isOn: false },
    { name: "Dom", isOn: false },
  ]);

  const onClickAny = (dayIndex) => {
    let newDays = [];
    for (let index = 0; index < days.length; index++) {

      const element = days[index];

      if (index == dayIndex) {
        element.isOn = !element.isOn; //Si el index del for y el del elemento click es igual, pondra on en lo contrario del valor que tenga
      } else {
        element.isOn = false; //Todos en false
      }

      //se crea de nuevo el array con uno de los objetos dentro del array positivo
      newDays.push(element);
    }

    setDays(newDays);
  };

  return (
    <div className="dates_container">
      {days.map((i, index) => (
        <div key={index}>
          <DayComponent
            number={index + 1}
            day={i.name}
            isSelected={i.isOn}
            onClick={() => onClickAny(index)}
          />
        </div>
      ))}
    </div>
  );
};
