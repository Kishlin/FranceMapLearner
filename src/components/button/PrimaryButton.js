import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

function PrimaryButton(props) {
    return (<Button variant="contained" color="primary" onClick={props.handler}>{props.text}</Button>);
}

PrimaryButton.propTypes = {
    handler: PropTypes.func.isRequired,
    text: PropTypes.string,
};

PrimaryButton.defaultProps = {
    text: 'GO',
};

export default PrimaryButton;
