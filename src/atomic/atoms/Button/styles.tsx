import styled from "styled-components/native";
import { colorsMap } from "../../constants/functions";

import { propsTouchableOpacity } from "./Models";

export const TouchableOpacity = styled.TouchableOpacity<propsTouchableOpacity>`
  width: ${({ type, theme }) => type?.width ? type.width > 1 ? `${type.width}px` : type.width : `${theme.styleButton.buttonPrimaryLarge.width}px`};
  height: ${({ type, theme }) => type?.height ? type.height : theme.styleButton.buttonPrimaryLarge.height}px;
  border-top-width: ${({ type }) => type?.borderWidth ? type.borderWidth : 0}px;
  border-left-width: ${({ type }) => type?.borderWidth ? type.borderWidth : 0}px;
  border-right-width: ${({ type }) => type?.borderWidth ? type.borderWidth : 0}px;
  border-bottom-width: ${({ type }) => type?.borderWidth ? type.borderWidth : 0}px;
  border-top-color: ${({ type, disabled }) => disabled ? type?.borderColorDisabled : type?.borderColor ? type?.borderColor : "none"};
  border-left-color: ${({ type, disabled }) => disabled ? type?.borderColorDisabled : type?.borderColor ? type?.borderColor : "none"};
  border-right-color: ${({ type, disabled }) => disabled ? type?.borderColorDisabled : type?.borderColor ? type?.borderColor : "none"};
  border-bottom-color: ${({ type, disabled }) => disabled ? type?.borderColorDisabled : type?.borderColor ? type?.borderColor : "none"};
  background-color: ${({ type, theme, disabled, color }) => disabled ? colorsMap(type?.colorDisabled, color) : colorsMap(type?.color, color) ? colorsMap(type.color, color) : theme.colors.PRYMARY_BASE_01};
  border-radius: ${({ type, theme }) => type?.borderRadius ? type.borderRadius : theme.styleButton.buttonPrimaryLarge.borderRadius}px;
  align-items: center;
  justify-content: center
`