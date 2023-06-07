import React from "react";

function Testimonials(props) {
let loremText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum pariatur eius quia doloribus numquam vero vitae laborum consequuntur voluptatum."

    return (
        <div className="card-testimonials border col-12 col-md mx-4">
                <h4 className="testimonials-title">★ {props.ranking}</h4>
                <img
                  src={props.src}
                  alt={props.alt}
                  className="img-fluid testimonials-img"
                />
                <p className="card-content">
                  {loremText}
                </p>
              </div>
    )
}

export default Testimonials;