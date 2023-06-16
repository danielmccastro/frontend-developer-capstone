import React from "react";

function Button(props) {
  return (
    <a href={props.route}>
      <button className="btn-reserve my-2 mt-md-3 mb-md-4">
        {props.content}
      </button>
    </a>
  );
}

export default Button;
