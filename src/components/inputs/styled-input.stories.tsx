import React from 'react';

import { action } from '@storybook/addon-actions';

import TextField from './styled-input';
import { withKnobs, object, boolean, text, color } from '@storybook/addon-knobs/react';

export default {
    title: 'Styled Input',
    decorators: [withKnobs]
};

const defaultValue = '#ff00ff';

export const Default = () => (
    <TextField
        autoComplete={text("Auto Complete", "none")}
        autoFocus={boolean("Auto Focus", true)}
        color={color("Color", defaultValue)}
        inputProps={object("autoCapitalize", "none")}
        fullWidth={boolean("Full Width", false)}
        disabled={boolean("Disabled", false)}
        error={boolean("Error", false)}
        placeholder={text("PlaceHolder", "text")}
        onClick={action('Styled Textfield clicked')}>
        {text("Label", "Hello Storybook")}
    </TextField>
);
