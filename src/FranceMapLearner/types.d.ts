declare interface Department {
    id: number|string,
    name: string,
    nameSlug: string,
    hometown: string,
    hometownSlug: string,
    region: number,
}

declare interface Region {
    id: number,
    name: string,
    slug: string,
    departmentsCount: number,
}

declare type DepartmentsContextType = {
    departments: Departments[],
    findDepartmentById: (id: string|number) => Department,
};

declare type RegionsContextType = {
    regions: Region[],
}

declare interface RegionSelection {
    [key: number]: boolean;
}

declare type RegionSelectionToggler = (id: number, checked: boolean) => void;

declare type SliderSetter = (event: ChangeEvent, value: number|number[]) => void;

declare type InputSetter = (event: ChangeEvent) => void;

declare interface Configuration {
}

declare interface DepartmentsLessonConfiguration extends Configuration {
}
