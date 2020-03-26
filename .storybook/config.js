// .storybook/config.js

import { configure, addDecorator } from '@storybook/react';
import ThemeDecorator from './themeDecorator';
// automatically import all files ending in *.stories.tsx
configure(require.context('../stories', true, /\.stories\.tsx?$/), module);
addDecorator(ThemeDecorator);