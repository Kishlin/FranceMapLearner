import { useState } from 'react';

function useRegionSelectionState(): [ RegionSelection, RegionSelectionToggler ] {
    const [regionSelection, setRegionSelection] = useState<RegionSelection>({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
    });

    const toggleRegion = (id: number, checked: boolean) => setRegionSelection({ ...regionSelection, [id]: checked });

    return [regionSelection, toggleRegion];
}

export default useRegionSelectionState;
