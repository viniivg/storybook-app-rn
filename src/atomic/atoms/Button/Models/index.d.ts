export interface PropsButton {
    type?: "primaryLarge" | "secundaryLarge" 
    title: string
    onPress: () => void
    disabled?: boolean
}

export interface propsTouchableOpacity {
    type: propsTypeButton
    color?: any
}

interface propsTypeButton {
    width?: number | string
    height?: number
    color?: string
    colorDisabled?: string
    borderColor?: string
    borderColorDisabled?: string
    borderWidth?: number
    borderRadius?: number
    spacing?: string
    text: {
        type: {
            font?: string
            fontSize?: number | any
            fontWeight?: number
            lineHeight?: number
            letterSpacing?: number
        },
        textColor: string,
        textColorDisabled?: string,
    },
}