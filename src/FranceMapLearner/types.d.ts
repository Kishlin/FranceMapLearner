declare interface Department {
    id: number|string,
    name: string,
    nameSlug: string,
    hometown: string,
    hometownSlug: string,
    region: number,
}

declare type DepartmentsContextType = {
    departments: Departments[],
    findDepartmentById: (id: string|number) => Department,
};
