import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test(`Renders the BookingForm heading`, () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
})

test(`initializeTimes() returns an array of strings like: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00",]`, () => {
    expect.assertions(3);

    const result = initializeTimes();

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    const isStringArray = (arr) =>
      arr.every((item) => typeof item === "string");
    expect(isStringArray(result)).toBe(true);
  });

  test(`updateTimes(state, action) returns an array of strings like: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00",] when called with an argument action = {type: "update-times", payload: "2023-01-20"}`, () => {
    expect.assertions(3);

    const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const action = { type: "update-times", payload: "2023-01-20" };
    const result = updateTimes(state, action);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    const isStringArray = (arr) =>
      arr.every((item) => typeof item === "string");
    expect(isStringArray(result)).toBe(true);
  });