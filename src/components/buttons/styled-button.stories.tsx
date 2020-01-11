import React from 'react';

import { action } from '@storybook/addon-actions';

import StyledButton from './styled-button';

export default {
    title: 'Styled Button',
};

export const Default = () => (
    <StyledButton onClick={action('Styled button clicked')}>
        Styled Button
    </StyledButton>
);