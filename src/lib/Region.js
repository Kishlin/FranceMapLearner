import Entity from "./Entity";

export default class Region extends Entity {
    constructor(id, name, hometown, departments) {
        super(id, name, hometown);

        this.departments = departments;
    }
}
