import React from 'react';

import LinkButton from './LinkButton';

const defaultProps = {
    text: 'Back to home',
    color: 'secondary',
};

type HomeButtonProps = {
    color?: 'secondary';
    text?: string;
} & typeof defaultProps;

function HomeButton({ text, color }: HomeButtonProps) {
    return <LinkButton url="/" text={text} color={color} />;
}

HomeButton.defaultProps = defaultProps;

export default HomeButton;
