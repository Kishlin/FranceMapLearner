import React from 'react';
import { Typography } from '@mui/material';

type ConfiguratorTitleProps = {
    text: string,
};

function ConfiguratorTitle({ text }: ConfiguratorTitleProps) {
    return <Typography variant="h4" color="primary">{text}</Typography>;
}

export default ConfiguratorTitle;
