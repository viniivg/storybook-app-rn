import styled from "styled-components/native";

import { TextProps } from "./Models";

export const TextRegular = styled.Text<TextProps>`
  width: ${({ width }) => width ? width > 0 ? `${width}px` : width : "auto"};
  height: ${({ height }) => height ? height > 0 ? `${height}px` : height : "auto"};
  font-size: ${({ theme, type }) => type?.fontSize ? type.fontSize : theme.styleText.paragraph.xl.fontSize}px;
  color: ${({ color, theme }) => color ? color : theme.colors.PRYMARY_BASE_02};
  text-align: ${({ align }) => (align ? align : 'left')};
  font-family: ${({ theme, type }) => type?.font}; 
  text-decoration: ${({ type, color, underline }) => underline ? `underline ${color}` : type?.textDecoration ? `${type?.textDecoration} ${color}` : "none"};
  `