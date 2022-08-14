import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const defaultProps = {
    color: 'primary',
};

type LinkButtonProps = {
    color?: 'primary';
    text: string;
    url: string;
} & typeof defaultProps;

function LinkButton({ color, text, url }: LinkButtonProps) {
  return <Button component={Link} variant="contained" color={color} to={url}>{text}</Button>;
}

LinkButton.defaultProps = defaultProps;

export default LinkButton;
