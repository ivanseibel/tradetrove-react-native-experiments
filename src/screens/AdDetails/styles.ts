import { ArrowLeft } from 'phosphor-react-native'
import { TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Main = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray6};
`

export const Content = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
`

export const NavigationHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  padding: 0 24px 10px;
`

export const NavigationButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  width: 30px;
  height: 30px;
  align-items: center;
`

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.gray2,
}))``
