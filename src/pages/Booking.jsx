import React from "react";
import { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";

import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../api";

const Booking = (props) => {
  const [date, setDate] = useState(new Date());

  function initializeTimes(date) {
    return fetchAPI(date);
  }

  function updateTimes(date) {
    const updatedDate = new Date(date);
    return fetchAPI(updatedDate);
  }

  const confirmationPage = useNavigate();

  function submitForm(formData) {
    const isSubmitted = submitAPI(formData);
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
    <>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </>
  );
};

export default Booking;
