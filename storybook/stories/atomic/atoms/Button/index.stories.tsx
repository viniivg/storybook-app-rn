import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Button } from "~/atomic"
import Preview from 'storybook/stories/decorators';

storiesOf('Button', module)
    .add('Button', () => (
        <Preview>
            <Button title='My button' onPress={() => { }} />
        </Preview>
    ))