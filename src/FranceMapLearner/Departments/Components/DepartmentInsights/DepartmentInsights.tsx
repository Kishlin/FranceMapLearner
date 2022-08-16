import React, { useContext } from 'react';
import { Typography } from '@mui/material';

import { DepartmentsContext } from '../../Context/DepartmentsContext';

type MapDepartmentsProps = {
    departmentId: null|number|string;
};

function DepartmentInsights({ departmentId }: MapDepartmentsProps) {
    const { findDepartmentById } = useContext<DepartmentsContextType>(DepartmentsContext);

    if (null === departmentId) {
        return <noscript />;
    }

    const department = findDepartmentById(departmentId);

    return (
        <Typography>
            {`Code: ${department.id} ; Name: ${department.name} ; Prefecture: ${department.hometown}.`}
        </Typography>
    );
}

export default DepartmentInsights;
