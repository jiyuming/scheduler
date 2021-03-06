import React from "react";
import "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
// import PropTypes from 'prop-types';

export default function InterviewerList(props) {
  // props:
  // interviewers:array - an array of objects containing the information of each interviewer
  // interviewer:number - the id of an interviewer
  // setInterviewer:function - a function that accepts an interviewer id
  
  const interviewers = props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        // selected={interviewer.id === props.interviewer}
        selected={interviewer.id === props.value}
        // setInterviewer={e => props.setInterviewer(interviewer.id)}
        setInterviewer={e => props.onChange(interviewer.id)}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  );
}

// InterviewerList.propTypes = {
//   interviewers: PropTypes.array.isRequired
// };