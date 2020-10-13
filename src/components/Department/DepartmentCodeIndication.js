import React from "react";
import PropTypes from "prop-types";

import DepartmentBox from "./DepartmentBox";
import Department from "../../lib/Department";

function DepartmentCodeIndication(props) {
    return (
        <DepartmentBox
            upper={<p>{props.current.id}</p>}
            lower={<p>{props.current.name}</p>}
        />
    );
}

DepartmentCodeIndication.propTypes = {
    current: PropTypes.instanceOf(Department).isRequired,
};

export default DepartmentCodeIndication;
