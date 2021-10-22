import React from "react";
import "./InterviewerListItem.scss";

var classNames = require("classnames");

export default function InterviewerListItem(props) {
  // props:
  // id:number - the id of the interviewer
  // name:string - the name of the interviewer
  // avatar:url - a url to an image of the interviewer
  // selected:boolean - to determine if an interview is selected or not
  // setInterviewer:function - sets the interviewer upon selection
  const interviewerClass = classNames({
    interviewers__item: true,
    "interviewers__item--selected": props.selected
  });

  const imgClass = classNames({
    "interviewers__item-image": true,
    "interviewers__item-image--selected": props.selected
  });

  return (
    <li
      className={interviewerClass}
      key={props.id}
      onClick={props.setInterviewer}
    >
      <img className={imgClass} src={props.avatar} alt={props.name} />
      {props.selected && props.name}
    </li>
  );
}
