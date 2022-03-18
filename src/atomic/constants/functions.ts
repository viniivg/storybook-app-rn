import theme from "~/styles/theme"

type MapOptions = {
  [key: string]: any
}

const buttonMap: MapOptions = {
  "primaryLarge": theme.styleButton.buttonPrimaryLarge,
  "secundaryLarge": theme.styleButton.buttonSecundaryLarge,
  "undefined": theme.styleButton.buttonPrimaryLarge,
}

export const buttonOptions = (margin?: string) => {
  if (margin) {
    return buttonMap.hasOwnProperty(margin) ? buttonMap[margin] : buttonMap["undefined"]
  }

  return buttonMap["undefined"]
}

export const colorsMap = (token: any, colors: any) => {
  const data: MapOptions = {
    "PRYMARY_BASE_01": colors.PRYMARY_BASE_01,
    "PRYMARY_BASE_02": colors.PRYMARY_BASE_02,
    "SECONDARY_BASE_01": colors.SECONDARY_BASE_01,
    "SECONDARY_BASE_02": colors.SECONDARY_BASE_02,
    "SECONDARY_BASE_03": colors.SECONDARY_BASE_03,
    "LIGHT_BASE_01": colors.LIGHT_BASE_01,
    "LIGHT_BASE_02": colors.LIGHT_BASE_02,
    "DARK_BASE_01": colors.DARK_BASE_01,
    "transparent": "transparent",
    "undefined": colors.PRYMARY_BASE_01,
  }

  return data[token]
}

const textMap: MapOptions = {
  "headingXL": theme.styleText.heading.xl,
  "subtitleXL": theme.styleText.subtitle.xl,
  "paragraphXL": theme.styleText.paragraph.xl,
  "undefined": theme.styleText.paragraph.xl
}

export const textOptions = (type?: string) => {
  if (type) {
    return textMap.hasOwnProperty(type) ? textMap[type] : textMap["undefined"]
  }

  return textMap["undefined"]
}