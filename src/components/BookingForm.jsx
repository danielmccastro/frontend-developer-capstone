import React, { useState } from "react";
import Button from "./Button";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Your booking is confirmed! A confirmation has been sent to your e-mail!"
    );
    clearForm();
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setDate("");
    setGuests("");
    setOccasion("");
  };

  console.log(occasion);

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
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="res-email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="res-email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="res-date" className="form-label">
              Choose date
            </label>
            <input
              type="date"
              id="res-date"
              className="form-control"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="res-time" className="form-label">
              Choose time
            </label>
            <select id="res-time" className="form-select">
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
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
              className="form-control"
              value={guests}
              onChange={(e) => {
                setGuests(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="occasion" className="form-label">
              Occasion
            </label>
            <select
              id="occasion"
              className="form-select"
              key={occasion}
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
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

export default Form;
