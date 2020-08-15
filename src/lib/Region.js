import Entity from "./Entity";

export default class Region extends Entity {
    constructor(id, name, hometown, departmentCount) {
        super(id, name, hometown);

        this.departmentCount = departmentCount;
    }
}
