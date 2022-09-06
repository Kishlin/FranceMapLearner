import React, { ChangeEvent } from 'react';
import { Checkbox, FormControlLabel, Grid } from '@mui/material';

type RegionsSelectionCheckboxProps = {
    toggleRegion: RegionSelectionToggler,
    regionSelection: RegionSelection,
    region: Region,
}

function RegionsSelectionCheckbox({ region, regionSelection, toggleRegion }: RegionsSelectionCheckboxProps) {
    const toggleRegionOnCheckboxChange = ({ target: { name } }: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        toggleRegion(+name, checked);
    };

    const checkbox = (
        <Checkbox
            color="primary"
            key={region.id}
            name={region.id.toString()}
            checked={regionSelection[region.id]}
            onChange={toggleRegionOnCheckboxChange}
        />
    );

    const label = `${region.name} (${region.departmentsCount})`;

    return (
        <Grid key={region.id} item xs>
            <FormControlLabel control={checkbox} label={label} />
        </Grid>
    );
}

export default RegionsSelectionCheckbox;
