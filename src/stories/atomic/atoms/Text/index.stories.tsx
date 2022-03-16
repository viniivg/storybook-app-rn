import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

import { Text } from "~/atomic"

storiesOf('Text', module)
    .addDecorator(withKnobs)
    .add('Text', () => (
        <Text>Hello World</Text>
    ))