export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
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
