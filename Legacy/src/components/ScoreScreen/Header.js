import React from "react";
import PropTypes from "prop-types";

function Header(props) {
    return (
        <h1>Score: {props.stats.score}/{props.stats.max} ({props.stats.percentage}%)</h1>
    )
}

Header.propType = {
    stats: PropTypes.array.isRequired,
};

export default Header;
