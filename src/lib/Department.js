import Entity from "./Entity";

export default class Department extends Entity {
    constructor(id, name, hometown, region) {
        super(id, name, hometown);

        this.region = region;
    }
}
