//... returns an array of appointments for that day
export function getAppointmentsForDay(state, day) {
  let result = [];
  if (state.days.length === 0) return result;

  // find the day Object
  const filteredDayObject = state.days.find(d => d.name === day);

  // find the appointment Object
  filteredDayObject &&
    filteredDayObject.appointments.forEach(appointmentID => {
      result.push(state.appointments[appointmentID]);
    });

  return result;
}

// return an Interview with detailed interviewer info
export function getInterview(state, interview) {
  if (interview) {
    const interviewer = state.interviewers[interview.interviewer];
    const student = interview.student;
    return {student, interviewer};
  } else {
    return null;
  }
}

// return interviewers with details array for a day
export function getInterviewersForDay(state, day){
  let result = [];
  const aDay = state.days.filter(d => d.name === day);
  const interviewersTheDay = aDay[0].interviewers;
  interviewersTheDay && interviewersTheDay.forEach((anInterviewer) =>{
    if(interviewersTheDay.includes(state.interviewers[anInterviewer].id)){
      result.push(state.interviewers[anInterviewer]);
    }
  })
  return result;
}
