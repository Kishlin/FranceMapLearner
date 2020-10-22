import Entity from "./Entity";

export default class Region extends Entity {
    constructor(id, name, nameSlug, hometown, hometownSlug, departmentCount) {
        super(id, name, nameSlug, hometown, hometownSlug);

        this.departmentCount = departmentCount;
    }
}
