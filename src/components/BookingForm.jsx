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
    submitForm(form);
    };

  const options = availableTimes.map((time) => (
    <option key={time}>{time}</option>
  ));

console.log(form)

  return (
    <main className="container">
      <div className="row">
        <div className="col-10 col-md-5 mx-auto">
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
                min={new Date().toISOString().split("T")[0]}
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
