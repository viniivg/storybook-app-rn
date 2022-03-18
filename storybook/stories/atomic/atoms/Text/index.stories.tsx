import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';

import { Text } from "~/atomic"
import Preview from '../../../decorators';
import theme from "../../../../../src/styles/theme"
import { textAlign } from '../../../data';

storiesOf('Text', module)
    .addDecorator(withKnobs)
    .add('Text', () => (
        <Preview>
            <Text
                width={'100%'}
                align={select('align', textAlign, textAlign.center)}
                color={select('color', theme.colors, theme.colors.PRYMARY_BASE_01)}
                onPress={() => { }}
                underline={boolean('underline', false)}>
                Hello World
            </Text>
        </Preview>
    ))