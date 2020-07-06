import React from "react";
import PropTypes from "prop-types";

import LinkButton from "./LinkButton";

function HomeButton(props) {
    return <LinkButton url={'/'} text={props.text} color={props.color} />;
}

HomeButton.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

HomeButton.defaultProps = {
    text: 'Back to home',
    color: 'secondary',
};

export default HomeButton;
