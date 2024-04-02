import theme from '@theme/index'
import { Eye, EyeClosed } from 'phosphor-react-native'
import styled from 'styled-components/native'

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
