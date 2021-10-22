import React, { Fragment } from "react";
import "./styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
// import Confirm from './Confirm'
// import Status from './Status'
// import Error from './Error'
//import Form from './Form'

export default function Appointment(props) {
  return (
    <article className="appointment">
      <Header time={props.time}></Header>
      {props.interview ? (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        ></Show>
      ) : (
        <Empty></Empty>
      )}
    </article>
  );
}
