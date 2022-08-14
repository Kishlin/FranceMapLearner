import React from "react";
import PropTypes from "prop-types";

import DepartmentBox from "./DepartmentBox";
import Department from "../../lib/Department";

function DepartmentPrefectureIndication(props) {
    return (
        <DepartmentBox
            upper={<p>{props.current.hometown}</p>}
            lower={<p>{props.current.name}</p>}
        />
    );
}

DepartmentPrefectureIndication.propTypes = {
    current: PropTypes.instanceOf(Department).isRequired,
};

export default DepartmentPrefectureIndication;
