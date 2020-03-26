// Checkbox.stories.js
import React from 'react';
import Checkbox from '../src/components/Checkbox/Checkbox';


export default {
    title: 'Checkbox',
};
//eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const empty = () => <Checkbox label="empty" onChange={action('onChange')} />;
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const checked = () => <Checkbox label="checked" onChange={action('onChange')} checked />;
