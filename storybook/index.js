import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { loadStories } from './storyLoader';

import './rn-addons';

configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({});

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
