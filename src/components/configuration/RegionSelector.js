import React from "react";
import PropTypes from 'prop-types';

import { Checkbox, FormControlLabel, Grid } from "@material-ui/core";
import Region from "../../lib/Region";

function RegionSelector(props) {
    const regionCheckboxList = props.regions.map(region => {
        const label = `${region.name} (${region.departmentCount})`;
        const checkbox = <Checkbox checked={props.regionSelect[region.id]} onChange={props.handleRegionSelectChange}
                                   name={region.id.toString()} color="primary" />;

        return (<Grid key={region.id} item xs><FormControlLabel label={label} control={checkbox} /></Grid>);
    });

    return (
        <section>
            <p>Pick regions which should be included (at least one).</p>
            <Grid container spacing={2} direction="row">{regionCheckboxList}</Grid>
        </section>
    );
}

RegionSelector.propTypes = {
    regions: PropTypes.arrayOf(PropTypes.instanceOf(Region)).isRequired,
    handleRegionSelectChange: PropTypes.func.isRequired,
    regionSelect: PropTypes.object.isRequired,
}

export default RegionSelector;
