import './fonts';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withTheme } from '../addons/theme/provider';
import StorybookTheme from './theme';
import { themes } from '@naturacosmeticos/natds-styles';

addParameters({
  options: {
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'bottom',
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
    theme: StorybookTheme
  },
  docs: {
    container: DocsContainer,
    page: DocsPage
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
  theme: {
    themes
  },
});

addDecorator(withTheme);
addDecorator(withA11y);
addDecorator(withKnobs);

const tokens = require.context('../src/tokens', true, /\.story.(ts|md)x?$/);
const documentation = require.context('../src/documentation', true, /\.story.(ts|md)x?$/);
const web = require.context('../src/web', true, /\.story.(ts|md)x?$/);
const mobile = require.context('../src/mobile', true, /\.story.(ts|md)x?$/);
const icons = require.context('../src/icons', true, /\.story.(ts|md)x?$/);

configure([tokens, documentation, icons, web, mobile], module);
