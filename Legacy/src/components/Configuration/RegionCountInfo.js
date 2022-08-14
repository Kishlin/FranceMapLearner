import React from "react";
import PropTypes from 'prop-types';

function RegionCountInfo(props) {
    return (
        <section>
            <p>There are {props.regionsCount} regions.</p>
        </section>
    );
}

RegionCountInfo.propTypes = {
    regionsCount: PropTypes.number.isRequired,
};

export default RegionCountInfo;
