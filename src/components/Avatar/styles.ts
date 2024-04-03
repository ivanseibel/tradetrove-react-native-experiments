import { PencilSimple } from 'phosphor-react-native'
import { TouchableOpacity, Image } from 'react-native'
import styled from 'styled-components/native'

export const MainContainer = styled(TouchableOpacity).attrs({
  activeOpacity: 0.9,
})`
  width: 88px;
  height: 88px;
`

export const AvatarContainer = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 44px;
  border-color: ${({ theme }) => theme.colors.bluelight};
  border-width: 3px;
  position: relative;
`

export const AvatarImage = styled(Image).attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 100%;
  border-radius: 44px;
`

export const EditButton = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.bluelight};
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: -8px;
`

export const EditIcon = styled(PencilSimple).attrs({
  size: 16,
  color: '#fff',
})``
