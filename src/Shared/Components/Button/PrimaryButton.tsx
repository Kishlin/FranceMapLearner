import React from 'react';
import { Button } from '@mui/material';

const defaultProps = {
    autofocus: false,
    disabled: false,
    text: 'GO',
};

type PrimaryButtonProps = {
    handler: () => void,
    autofocus?: boolean,
    disabled?: boolean,
    text?: string,
} & typeof defaultProps;

function PrimaryButton({
    autofocus,
    disabled,
    handler,
    text,
}: PrimaryButtonProps) {
    return (
        <Button
            color="primary"
            variant="contained"
            onClick={handler}
            disabled={disabled}
            autoFocus={autofocus}
        >
            {text}
        </Button>
    );
}

PrimaryButton.defaultProps = defaultProps;

export default PrimaryButton;
