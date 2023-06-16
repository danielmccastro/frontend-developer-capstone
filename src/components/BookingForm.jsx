import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

function BookingForm({ availableTimes, dispatch, submitForm }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
    occasion: "Select an Option",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = async (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    dispatch({ type: "UPDATE_TIMES", payload: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  };

  const currentDate = new Date().toISOString().split("T")[0];
  const options = availableTimes.map((time) => (
    <option key={time}>{time}</option>
  ));

  return (
    <main className="container">
      <div className="row">
        <h1 className="mt-4 text-h1">Reserve a table</h1>
        <form className="mb-4 text-karla" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="res-name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="res-name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="res-email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="res-email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="res-date" className="form-label">
              Choose date
            </label>
            <input
              type="date"
              id="res-date"
              name="date"
              className="form-control"
              value={formData.date}
              onChange={handleDateChange}
              min={currentDate}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time"
              name="time"
              value={formData.availableTimes}
              onChange={handleFormChange}
              required
            >
              {options}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="guests" className="form-label">
              Number of guests
            </label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              name="guests"
              className="form-control"
              value={formData.guests}
              onChange={handleFormChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="occasion" className="form-label">
              Occasion
            </label>
            <select
              id="occasion"
              name="occasion"
              className="form-select"
              key={formData.occasion}
              value={formData.occasion}
              onChange={handleFormChange}
              required
            >
              <option value="">Select an Option</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>
          <div>
            <input
              aria-label="On Click"
              type="submit"
              value={"Make Your Reservation"}
              className="btn-reserve"
            />
          </div>
        </form>
      </div>
    </main>
  );
}

export default BookingForm;
