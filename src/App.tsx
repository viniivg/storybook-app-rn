
import React from 'react';
import { View } from 'react-native';

import { Text, Button } from "~/atomic"
import theme from "~/styles/theme"

const App = () => {
    const {
        colors
    } = theme

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Text type='headingXL' color={colors.PRYMARY_BASE_01}>Hello</Text>
            <Button type='primaryLarge' title='My button' onPress={() => { }} />
        </View>
    );
};

export default App


