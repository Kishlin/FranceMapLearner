import React, { createContext, ReactNode } from 'react';

import DEPARTMENTS from './departments';

const contextValue: DepartmentsContextType = {
    departments: DEPARTMENTS,
    findDepartmentById: (id: string|number) => contextValue
        .departments
        .find(
            (department: Department) => id === department.id,
        ),
};

export const DepartmentsContext = createContext<DepartmentsContextType>(contextValue);

export function DepartmentsProvider({ children }: { children: ReactNode }) {
    return (
        <DepartmentsContext.Provider value={contextValue}>
            {children}
        </DepartmentsContext.Provider>
    );
}
