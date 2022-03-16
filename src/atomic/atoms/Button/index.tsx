import React from "react"
import { useTheme } from "styled-components"

import theme from "../../../styles/theme"
import Text from "../Text"
import { PropsButton } from "./Models"
import { TouchableOpacity } from "./styles"
import { buttonOptions, colorsMap, textOptions } from "../../constants/functions"

const Button: React.FC<PropsButton> = ({
    children,
    type = "primaryLarge",
    title,
    onPress,
    disabled
}) => {
    const {
        colors
    } = useTheme() || theme

    const colorsOptions = (margin?: string) => {
        if (margin) {
            return colorsMap(margin, colors)
        }

        return colorsMap("undefined", colors)
    }

    return (
        <TouchableOpacity
            type={buttonOptions(type)}
            color={colors}
            onPress={() => onPress()}
            disabled={disabled}>
            <Text
                type={textOptions(buttonOptions(type)?.text?.type)}
                align="center"
                color={disabled ? colorsOptions(buttonOptions(type)?.text.textColorDisabled) : colorsOptions(buttonOptions(type)?.text.textColor)}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button
