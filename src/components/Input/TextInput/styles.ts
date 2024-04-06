import theme from '@theme/index'
import styled from 'styled-components/native'
import { TextInput as NativeTextInput } from 'react-native'

type InputProps = {
  multilineHeight?: number
}

export const TextInput = styled(NativeTextInput).attrs({
  placeholderTextColor: theme.colors.gray4,
})<InputProps>`
  flex: 1;
  min-width: 200px;
  padding: 12px 0;
  color: ${theme.colors.gray2};
  font-size: ${theme.fontSize.md}px;
  font-family: ${theme.fontFamily.regular};
  line-height: ${theme.lineHeight.md}px;
  
  ${({ multiline }) =>
    multiline &&
    `
    height: 160px;
    text-align-vertical: top;
  `}
`
