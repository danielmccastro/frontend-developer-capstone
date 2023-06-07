import React from "react";
import Button from "./Button";

function Form() {
  return (
    <main>
        <div className="container">
        <div className="row">
            <h1 className="text-h1 mt-4">Book a table</h1>
        <div className="col-6">
      <div className="row">
        <form action="POST">
          <div className="row">
            <div className="form-group col-6 mb-4">
              <label for="exampleFormControlInput1">Name</label>
              <input
                type="name"
                className="form-control"
                id="nameInput"
                placeholder="Name"
              />
            </div>
            <div className="form-group col-6 mb-4">
              <label for="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-6 mb-4">
              <label for="exampleFormControlInput1">Phone number</label>
              <input
                type="name"
                className="form-control"
                id="nameInput"
                placeholder="Phone number"
              />
            </div>
          <div className="form-group col-6 mb-4">
            <label for="exampleFormControlSelect1">Dinners</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>
          </div>
          </div>
          <fieldset className="mb-4">
            <label htmlFor="">Local da mesa</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked
            />
            <label className="form-check-label" for="flexRadioDefault1">
              Indoor
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" for="flexRadioDefault2">
              Outdoor
            </label>
          </div>
          </fieldset>
          <div className="mb-4">
            <label for="exampleFormControlTextarea1" className="form-label">
              Special requests
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <Button content={"Checkout"} />
        </form>
      </div>
      </div>
      <div className="col-6">
        <h4>img e texto</h4>
      </div>
      </div>
      </div>
    </main>
  );
}

export default Form;
