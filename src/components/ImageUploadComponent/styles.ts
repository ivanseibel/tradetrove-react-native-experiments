// For ImageContainer gets the device dimensions to set the width and height
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const { width } = Dimensions.get('window')

export const Main = styled.View`
  flex-direction: row;
  gap: 10px;
  align-items: center;
  align-self: flex-start;
`

export const ImageContainer = styled.View`
  position: relative;
  width: ${width / 3 - 20}px;
  height: ${width / 3 - 20}px;  
  border-radius: 6px;
`

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 6px;
`

export const RemoveButton = styled.TouchableOpacity`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: ${({ theme }) => theme.colors.gray1};
  padding: 4px;
  border-radius: 50px;
`

export const Placeholder = styled.TouchableOpacity`
  width: ${width / 3 - 20}px;
  height: ${width / 3 - 20}px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.gray5};
  justify-content: center;
  align-items: center;
`
