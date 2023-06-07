import React from "react";
import Button from "./Button";

function Card(props){
let loremText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos fuga similique obcaecati labore cum quibusdam necessitatibus,veritatis corrupti at earum?"

    return (
        <div className="col-12 col-md  mb-4">
        <div className="card h-100">
          <img
            src={props.src}
            alt={props.alt}
            className="card-img-top"
          />
          <div className="card-body">
            <div className="card-flex">
            <p className="card-title">{props.title}</p>
            <p className="card-price">{props.price}</p>
            </div>
            <p className="card-text">
            {loremText}
          </p>
          </div>
          <Button content={
            "Order now"} />
        </div>
      </div>
    );
}

export default Card;