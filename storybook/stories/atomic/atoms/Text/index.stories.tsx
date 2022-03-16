import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Text } from "~/atomic"
import Preview from 'storybook/stories/decorators';

storiesOf('Text', module)
    .add('Text', () => (
        <Preview>
            <Text>Hello World</Text>
        </Preview>
    ))