import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  //days: id, name, spots; day: String; setDay: function
  const { days, day, setDay } = props;
  return (
    <ul>
      {days.map(d => {
        return (
          <DayListItem
            key={d.id}
            name={d.name}
            spots={d.spots}
            selected={d.name === day}
            setDay={setDay}
          />
        );
      })}
    </ul>
  );
}
