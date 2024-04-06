import theme from '@theme/index'
import { Eye, EyeClosed } from 'phosphor-react-native'
import { TextInput as NativeTextInput } from 'react-native'
import styled from 'styled-components/native'

type InputContainerProps = {
  error?: boolean
  isFocused?: boolean
  isFilled?: boolean
  multiline?: boolean
}

export const InputController = styled.View`
  width: 100%;
  gap: 4px;
`

export const InputErrorLabel = styled.Text`
  color: ${theme.colors.redlight}
`

export const InputContainer = styled.View<InputContainerProps>`
   width: 100%;

   flex-direction: row;
   align-items: center;
   gap: 8px;
   padding: 0 16px;

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
