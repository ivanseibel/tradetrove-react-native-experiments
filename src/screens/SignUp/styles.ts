import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const MainContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray6};
  padding: 0 46px;
`

export const Logo = styled.Image``

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray1};
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  line-height: ${({ theme }) => theme.lineHeight.xl}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
`
