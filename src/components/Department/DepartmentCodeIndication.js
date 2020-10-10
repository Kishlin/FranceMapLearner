import React from "react";
import PropTypes from "prop-types";

import DepartmentCodeBox from "./DepartmentCodeBox";
import Department from "../../lib/Department";

function DepartmentCodeIndication(props) {
    return (
        <DepartmentCodeBox
            upper={<p>{props.current.id}</p>}
            lower={<p>{props.current.name}</p>}
        />
    );
}

DepartmentCodeIndication.propTypes = {
    current: PropTypes.instanceOf(Department).isRequired,
};

export default DepartmentCodeIndication;
