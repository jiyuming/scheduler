import { useState, useEffect } from "react";
import axios from "axios";

export function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    const GET_DAYS = "/api/days";
    const GET_APPOINTMENTS = "/api/appointments";
    const GET_INTERVIEWERS = "/api/interviewers";

    Promise.all([
      axios.get(GET_DAYS),
      axios.get(GET_APPOINTMENTS),
      axios.get(GET_INTERVIEWERS)
    ]).then(all => {
      setState(prev => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data
      }));
    });
  }, []);

  function getSpots(appointments, days, day) {
    let spots = 0;
    let theDay = days.find(d => d.name === day);

    theDay.appointments.forEach(id => {
      if (!appointments[id].interview) spots++;
    });

    return spots;
  }

  function updateDays(appointments) {
    const spots = getSpots(appointments, state.days, state.day);
    const theDayId = state.days.findIndex(obj => obj.name === state.day);
    const day = {
      ...state.days[theDayId],
      spots
    };

    state.days[theDayId] = day;
    const days = [...state.days];
    return days;
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = updateDays(appointments);

    return axios.put(`/api/appointments/${id}`, appointment).then(() => {
      setState(prev => ({
        ...prev,
        appointments,
        days
      }));
    });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = updateDays(appointments);

    return axios.delete(`/api/appointments/${id}`, appointment).then(() => {
      setState(prev => ({ ...prev, appointments, days }));
    });
  }

  return {
    state,
    bookInterview,
    cancelInterview,
    setDay
  };
}
