import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Main = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray6};
  padding: 10px 24px
`

export const Content = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`
