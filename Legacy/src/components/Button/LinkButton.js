import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

function LinkButton(props) {
    return (
        <Button component={Link} variant="contained" color={props.color} to={props.url}>{props.text}</Button>
    );
}

LinkButton.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

LinkButton.defaultProps = {
    color: 'primary',
};

export default LinkButton;
