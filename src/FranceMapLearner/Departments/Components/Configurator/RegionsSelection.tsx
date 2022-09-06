import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import RegionsSelectionCheckbox from './RegionsSelectionCheckbox';

type SelectionGridProps = {
    toggleRegion: (id: number, checked: boolean) => void,
    regionSelection: RegionSelection,
    regions: Region[],
};

function RegionsSelection({ regions, regionSelection, toggleRegion }: SelectionGridProps) {
    const mapRegionToCheckbox = (region: Region) => (
        <RegionsSelectionCheckbox region={region} regionSelection={regionSelection} toggleRegion={toggleRegion} />
    );

    return (
        <Box className="configurator-section">
            <Typography>Pick regions which should be included (at least one).</Typography>
            <Grid container spacing={2} direction="row">
                {regions.map(mapRegionToCheckbox)}
            </Grid>
        </Box>
    );
}

export default RegionsSelection;
