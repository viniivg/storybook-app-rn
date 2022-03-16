import * as colors from "./colors";

export const lightColors = {
    ...colors
};

const font = {
    principal: 'Roboto',
    light: 'Roboto-Light',
    regular: 'Roboto-Regular',
    medium: 'Roboto-Medium',
    bold: 'Roboto-Bold'
}

const styleText = {
    heading: {
        xl: {
            font: font.bold,
            fontSize: 30,
            fontWeight: 700,
        }
    },
    subtitle: {
        xl: {
            font: font.medium,
            fontSize: 24,
            fontWeight: 400,
        }
    },
    paragraph: {
        xl: {
            font: font.regular,
            fontSize: 16,
            fontWeight: 400,
        }
    }
}

const styleButton = {
    buttonPrimaryLarge: {
        width: 328,
        height: 50,
        padding: 8,
        color: "PRYMARY_BASE_02",
        colorDisabled: "LIGHT_BASE_03",
        borderRadius: 4,
        text: {
            type: "paragraphXL",
            textColor: "LIGHT_BASE_01",
            textColorDisabled: "DARK_BASE_02",
        },

    },
    buttonSecundaryLarge: {
        width: 328,
        height: 50,
        spacing: 8,
        color: "LIGHT_BASE_01",
        colorDisabled: "LIGHT_BASE_01",
        borderColor: "PRYMARY_BASE_02",
        borderColorDisabled: "LIGHT_BASE_05",
        borderWidth: 1,
        borderRadius: 4,
        text: {
            type: "paragraphXL",
            textColor: "PRYMARY_BASE_02",
            textColorDisabled: "DARK_BASE_01",
        },
    },
}

export default {
    styleButton,
    styleText,
    font
}
