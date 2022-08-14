import React from "react";
import { Grid } from "@material-ui/core";

import DepartmentInsights from "../../components/Department/DepartmentInsights";
import MapDepartments from "../../components/Maps/MapDepartments";

function DepartmentsMap() {
    const [departmentId, onDepartmentClick] = React.useState('');

    return (
        <Grid>
            <header><p>Click on a department for more insights.</p></header>
            <MapDepartments onDepartmentClick={onDepartmentClick} />
            <DepartmentInsights id={departmentId.toString()} />
        </Grid>
    );
}

export default DepartmentsMap;
