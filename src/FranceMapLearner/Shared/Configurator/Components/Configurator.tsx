import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

import './Configurator.css';

type ConfiguratorPropsType = {
    children: ReactNode;
};

function Configurator({ children }: ConfiguratorPropsType) {
    return (
        <Box className="configurator">
            {children}
        </Box>
    );
}

export default Configurator;
