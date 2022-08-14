import Entity from "./Entity";

export default class Department extends Entity {
    constructor(id, name, nameSlug, hometown, hometownSlug, region) {
        super(id, name, nameSlug, hometown, hometownSlug);

        this.region = region;
    }
}
