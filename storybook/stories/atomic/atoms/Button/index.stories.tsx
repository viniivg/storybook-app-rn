import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';

import { Button } from "~/atomic"
import Preview from '../../../decorators';
import { buttonMap } from '../../../data';

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('Button', () => (
        <Preview>
            <Button
                title={text("title", 'My button')}
                type={select('type', buttonMap, buttonMap.secundaryLarge )}
                disabled={boolean("disable", false)}
                onPress={() => { }} />
        </Preview>
    ))