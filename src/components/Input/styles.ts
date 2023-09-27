import theme from '@theme/index'
import { Eye, EyeClosed } from 'phosphor-react-native'
import { TextInput as NativeTextInput } from 'react-native'
import styled from 'styled-components/native'

type InputContainerProps = {
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

export const TextInputContainer = styled.View<InputContainerProps>`
  width: 100%;
  height: 45px;

  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding-right: 16px;

  background-color: ${theme.colors.gray7};
  border-width: ${({ error, isFocused, isFilled }) =>
    error || isFocused || isFilled ? '1px' : '0px'};
    border-radius: 6px;
    border-color: ${({ error, isFocused, isFilled }) =>
      error
        ? theme.colors.redlight
        : isFocused || isFilled
          ? theme.colors.gray3
          : 'transparent'};
`

export const TextInput = styled(NativeTextInput).attrs({
  placeholderTextColor: theme.colors.gray4,
})`
  height: 100%;
  flex: 1;

  padding: 12px 0 12px 16px;

  align-items: center;

  border-radius: 6px;

  color: ${theme.colors.gray2};
  font-size: ${theme.fontSize.md}px;
  font-family: ${theme.fontFamily.regular};
  line-height: ${theme.lineHeight.md}px;
`

export const EyeOpenIcon = styled(Eye).attrs({
  size: 20,
  color: theme.colors.gray3,
})``

export const PasswordVisibilityButton = styled.Pressable`
  width: 20px;
  height: 45px;
  justify-content: center;
  align-items: center;
`

export const EyeClosedIcon = styled(EyeClosed).attrs({
  size: 20,
  color: theme.colors.gray3,
})``
