import theme from '@theme/index'
import { TextInput as NativeTextInput } from 'react-native'
import styled from 'styled-components/native'

export type StyledInputProps = {
  error?: boolean
  isFocused?: boolean
  isFilled?: boolean
}

export const InputController = styled.View`
  width: 100%;
  gap: 4px
`

export const InputErrorLabel = styled.Text`
  color: ${theme.colors.redlight}
`

export const TextInput = styled(NativeTextInput).attrs({
  placeholderTextColor: theme.colors.gray4,
})<StyledInputProps>`
  height: 45px;
  width: 100%;

  padding: 12px 16px;

  align-items: center;

  background-color: ${theme.colors.gray7};
  border-radius: 6px;
  border-width: ${({ error, isFocused, isFilled }) =>
    error || isFocused || isFilled ? '1px' : '0px'};
  border-color: ${({ error, isFocused, isFilled }) =>
    error
      ? theme.colors.redlight
      : isFocused || isFilled
        ? theme.colors.gray3
        : 'transparent'};
`
