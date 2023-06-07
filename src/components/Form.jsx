import React from "react";
import Button from "./Button";

function Form() {
  return (
    <main className="container">
        <div className="row">
            <h1 className="text-h1">Book a table</h1>
        <div className="col-6">
      <div className="row">
        <form action="POST">
          <div className="row">
            <div class="form-group col-6 mb-4">
              <label for="exampleFormControlInput1">Name</label>
              <input
                type="name"
                class="form-control"
                id="nameInput"
                placeholder="Name"
              />
            </div>
            <div class="form-group col-6 mb-4">
              <label for="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
          </div>
          <div className="row">
            <div class="form-group col-6 mb-4">
              <label for="exampleFormControlInput1">Phone number</label>
              <input
                type="name"
                class="form-control"
                id="nameInput"
                placeholder="Phone number"
              />
            </div>
          <div class="form-group col-6 mb-4">
            <label for="exampleFormControlSelect1">Dinners</label>
            <select class="form-control" id="exampleFormControlSelect1">
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
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Indoor
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Outdoor
            </label>
          </div>
          </fieldset>
          <div class="mb-4">
            <label for="exampleFormControlTextarea1" class="form-label">
              Special requests
            </label>
            <textarea
              class="form-control"
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
    </main>
  );
}

export default Form;
