import React from "react";

function Button(props) {
    return (
        <button className="btn-reserve my-2 mt-md-5">
                  {props.content}
                </button>
    )
}

export default Button;