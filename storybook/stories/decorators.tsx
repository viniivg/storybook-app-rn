import React, { ReactElement } from 'react';
import { View } from 'react-native';


const Preview = ({ children }: { children: ReactElement }) => {
    return (
        <View style={{ width: 390, height: '100%', justifyContent: 'center', alignItems: 'center', padding: 16 }}>
            {children}
        </View>
    )
}

export default Preview
