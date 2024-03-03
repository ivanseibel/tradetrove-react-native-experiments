import { Check as PhosphorCheck } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

type CheckBoxProps = {
  value: boolean
}

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const CheckBox = styled.View<CheckBoxProps>`
  width: 20px;
  height: 20px;
  border-width: ${({ theme, value }) => (value ? 0 : 1)}px;
  border-radius: 3px;
  border-color: ${({ theme }) => theme.colors.gray2};
  background-color: ${({ theme, value }) =>
    value ? theme.colors.bluelight : 'transparent'};
  align-items: center;
  justify-content: center;
`

export const Check = styled(PhosphorCheck).attrs(({ theme }) => ({
  size: 16,
  color: theme.colors.white,
  weight: 'bold',
}))<CheckBoxProps>`
  display: ${({ value }) => (value ? 'flex' : 'none')}
`

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.gray2};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  line-height: ${({ theme }) => theme.lineHeight.md}px;
`
