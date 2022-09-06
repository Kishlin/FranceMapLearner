import React from 'react';
import { Grid } from '@mui/material';

import PrimaryButton from '../../../../Shared/Components/Button/PrimaryButton';
import HomeButton from '../../../../Shared/Components/Button/HomeButton';

type GoButtonBoxProps = {
    onGoButtonClick: () => void,
    disabled: boolean,
};

function GoButtonBox({ disabled, onGoButtonClick }: GoButtonBoxProps) {
    return (
        <section>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <PrimaryButton autofocus disabled={disabled} handler={onGoButtonClick} />
                </Grid>
                <Grid item>
                    <HomeButton />
                </Grid>
            </Grid>
        </section>
    );
}

export default GoButtonBox;
