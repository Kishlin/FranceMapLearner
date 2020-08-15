import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

function PrimaryButton(props) {
    return (<Button variant="contained" color="primary" onClick={props.handler} disabled={props.disabled}>{props.text}</Button>);
}

PrimaryButton.propTypes = {
    handler: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
};

PrimaryButton.defaultProps = {
    disabled: false,
    text: 'GO',
};

export default PrimaryButton;
