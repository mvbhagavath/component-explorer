import React, { PropTypes } from "react";

const Button = (props) => (
    <button
        type="button"
        style={props.buttonStyle}
    >
        {props.children}
    </button>
);

Button.propTypes = {
    buttonStyle: PropTypes.object
}

export default Button;