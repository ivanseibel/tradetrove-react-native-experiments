import { Plus } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Main = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray6};
  padding: 10px 24px
`

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  gap: 8px;
`

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.gray1};
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: 20px;
  line-height: 26px;
  flex: 1;
  margin-left: 32px;
`

export const AddButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`

export const AddIcon = styled(Plus).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.gray2,
  weight: 'bold',
}))``
