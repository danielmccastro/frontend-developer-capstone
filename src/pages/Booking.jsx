import React from "react";
import { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";

import BookingForm from "../components/BookingForm";
import { fetchData, submitData } from "../api";

const Booking = (props) => {
  const [date, setDate] = useState(new Date());

  function initializeTimes(date) {
    return fetchData(date);
  }

  function updateTimes(date) {
    const updatedDate = new Date(date);
    return fetchData(updatedDate);
  }

  const confirmationPage = useNavigate();

  function submitForm(formData) {
    const isSubmitted = submitData(formData);
    if (isSubmitted) {
      confirmationPage("/confirmation");
    }
  }

  function reducer(state, action) {
    let newState;
    switch (action.type) {
      case "UPDATE_TIMES":
        const newDate = new Date(action.payload);
        newState = updateTimes(newDate);
        break;

      default:
        throw new Error();
    }
    return newState;
  }

  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(date));

  return (
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
      submitForm={submitForm}
    />
  );
};

export default Booking;
