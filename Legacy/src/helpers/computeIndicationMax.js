export function computeIndicationMax(regions, regionSelect) {
    return regions
        .filter((region) => regionSelect[region.id])
        .reduce((total, region) => total + region.departmentCount, 0)
    ;
}
