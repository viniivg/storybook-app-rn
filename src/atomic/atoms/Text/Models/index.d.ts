type PropsTypeText = "headingXL" | "subtitleXL" | "paragraphXL"

export interface TextProps {
    width?: string | number | any
    height?: string | number | any
    type?: propsText
    underline?: boolean
    color?: string
    align?: 'left' | 'center' | 'right'
}

export interface TextPropsComponent {
    width?: string | number | any
    height?: string | number | any
    children?: any
    type?: PropsTypeText
    underline?: boolean
    color?: string
    align?: 'left' | 'center' | 'right'
    onPress?: () => void
}

interface propsText {
    font?: string
    fontSize?: number | any
    fontWeight?: number
    textDecoration?: string
}