import React from "react";
import { TextPropsComponent } from "./Models";
import theme from "../../../styles/theme"

import { TextRegular } from "./styles"
import { textOptions } from "../../constants/functions";

const Text: React.FC<TextPropsComponent> = ({
    width,
    height,
    children,
    type = "headingXXL",
    underline,
    color = theme.colors.PRYMARY_BASE_02,
    align,
    onPress,
}) => {
    return (
        <TextRegular
            width={width}
            height={height}
            type={textOptions(type)}
            underline={underline}
            color={color}
            align={align}
            onPress={onPress}
            accessibilityLabel={children}>
            {children}
        </TextRegular>
    )
}

export default Text