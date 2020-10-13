import Entity from "./Entity";

export default class Department extends Entity {
    constructor(id, name, hometown, slug, region) {
        super(id, name, hometown);

        this.region = region;
        this.slug = slug;
    }
}
