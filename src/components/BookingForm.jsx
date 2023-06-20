import React, { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const [errors, setErrors] = useState({});

  const handleFormChange = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const handleDateChange = async (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    dispatch({ type: "UPDATE_TIMES", payload: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      submitForm(form);
    }
  };

  const validateForm = () => {
    const { name, email, date, time, guests, occasion } = form;
    const newErrors = {};
    if (name === "" || date === "" || time === "" || occasion === "") {
      newErrors.required = "Required.";
    } else if (email === "") {
      newErrors.email = "Please enter a valid email address";
    } else if (guests === "") {
      newErrors.guests = "Must be min 1 and max 10 guests";
    }
    return newErrors;
  };

  const currentDate = new Date().toISOString().split("T")[0];
  const options = availableTimes.map((time) => (
    <option key={time}>{time}</option>
  ));

  return (
    <main className="container">
      <div className="row">
        <div className="col-4 mx-auto">
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
                className="form-control bg-gray"
                value={form.name}
                onChange={(e) => handleFormChange("name", e.target.value)}
                required
                isInvaliid={!!errors.name}
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
                className="form-control bg-gray"
                value={form.email}
                onChange={(e) => handleFormChange("email", e.target.value)}
                required
                isInvaliid={!!errors.email}
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
                className="form-control bg-gray"
                value={form.date}
                onChange={(e) => handleDateChange("date", e.target.value)}
                min={currentDate}
                isInvaliid={!!errors.date}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="res-time">Choose time</label>
              <select
                className="form-select bg-gray"
                id="res-time"
                name="time"
                value={form.availableTimes}
                onChange={(e) => handleFormChange("time", e.target.value)}
                isInvaliid={!!errors.time}
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
                className="form-control bg-gray"
                value={form.guests}
                onChange={(e) => handleFormChange("guests", e.target.value)}
                isInvaliid={!!errors.guests}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="occasion" className="form-label">
                Occasion
              </label>
              <select
                id="occasion"
                name="occasion"
                className="form-select bg-gray"
                key={form.occasion}
                value={form.occasion}
                onChange={(e) => handleFormChange("occasion", e.target.value)}
                isInvaliid={!!errors.occasion}
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
                className="btn-reserve mx-auto"
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default BookingForm;
