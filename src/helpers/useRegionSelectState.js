import { useObjectState } from "./useObjectState";

export function useRegionSelectState(regions) {
    const baseRegionSelect = {};
    regions.forEach(region => baseRegionSelect[region.id] = false);

    return useObjectState(baseRegionSelect);
}
