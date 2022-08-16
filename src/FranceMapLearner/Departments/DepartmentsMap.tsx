import React from 'react';
import { Grid } from '@mui/material';

import DepartmentInsights from './Components/DepartmentInsights/DepartmentInsights';
import MapDepartments from './Components/Map/MapDepartments';

function DepartmentsMap() {
    const [departmentId, setDepartmentId] = React.useState<null|number|string>(null);

    const onDepartmentClick = (code: number|string) => setDepartmentId(code);

    return (
        <Grid>
            <header><p>Click on a department for more insights.</p></header>
            <MapDepartments onDepartmentClick={onDepartmentClick} />
            <DepartmentInsights departmentId={departmentId} />
        </Grid>
    );
}

export default DepartmentsMap;
