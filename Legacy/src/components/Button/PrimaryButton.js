import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

function PrimaryButton(props) {
    return (
        <Button
            color="primary"
            variant="contained"
            onClick={props.handler}
            disabled={props.disabled}
            autoFocus={props.autofocus}
        >
            {props.text}
        </Button>
    );
}

PrimaryButton.propTypes = {
    autofocus: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    handler: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

PrimaryButton.defaultProps = {
    autofocus: false,
    disabled: false,
    text: 'GO',
};

export default PrimaryButton;
