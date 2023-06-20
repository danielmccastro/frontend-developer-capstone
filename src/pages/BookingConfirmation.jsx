import React from "react";
import Button from "../components/Button";
import { CheckCircle } from "react-bootstrap-icons";

function BookingConfirmation() {
  return (
    <div className="containter">
      <div className="row">
        <div className="col-4 mx-auto">
          <h1 className="mt-4 text-h1 text-center">Your table has been reserved!</h1>
          <h3 className="h4">You will receive a confirmation email shortly. </h3>
          <CheckCircle className="confirmation-icon" size={250} color={"#495E57"}/>
          <Button route={"/"} content={"Return to Home"} />
        </div>
      </div>
    </div>
  );
}

export default BookingConfirmation;
