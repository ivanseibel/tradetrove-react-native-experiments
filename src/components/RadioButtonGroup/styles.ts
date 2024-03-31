import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

type CircleProps = {
  selected: boolean
}

export const Container = styled.View`
  flex-direction: row;
  align-self: stretch;
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: flex-start;
  gap: 24px;
`

export const Button = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.gray2};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  line-height: 20.8px;
  margin-left: 10px;
`

export const Circle = styled.View<CircleProps>`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${({ theme, selected }) =>
    selected ? theme.colors.bluelight : theme.colors.gray2};
  align-items: center;
  justify-content: center;
`

export const FilledCircle = styled.View`
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.bluelight};
`
