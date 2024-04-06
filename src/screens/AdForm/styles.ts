import { ArrowLeft } from 'phosphor-react-native'
import { Platform, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Main = styled(SafeAreaView).attrs({
  edges: ['top'],
})`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray6};
  padding: 10px 0 0;
`

export const Header = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  gap: 8px;
  padding: 0 24px;
`

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.gray1};
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: 20px;
  line-height: 26px;
  flex: 1;
  margin-right: 32px;
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

export const ImageContainer = styled.Pressable`
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  margin-top: 20px;
  padding: 0 24px;
`

export const SectionTitle = styled.Text`
  align-self: stretch;
  color: ${({ theme }) => theme.colors.gray2};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  line-height: 20.8px;
`

export const SectionDescription = styled.Text`
  align-self: stretch;
  color: ${({ theme }) => theme.colors.gray3};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  line-height: 18.2px;
`

export const SectionContainer = styled.Pressable`
  gap: 16px;
  align-self: stretch;
  align-items: flex-start;
  padding: 0 24px;
`

export const Footer = styled(SafeAreaView).attrs({
  edges: ['bottom'],
})`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${Platform.OS === 'ios' ? '24px 24px 6px' : '24px'};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
