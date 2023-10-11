import { ArrowRight, Tag } from 'phosphor-react-native'
import styled from 'styled-components/native'

export const Main = styled.View`
  width: 100%;
  gap: 12px;
`

export const Title = styled.Text`
  width: 100%;

  font-size: ${({ theme }) => theme.fontSize.sm}px;
  line-height: ${({ theme }) => theme.lineHeight.sm}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.gray3};
`

export const Content = styled.View`
  flex-direction: row;
  display: flex;
  padding: 12px 20px 12px 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-radius: 6px;
  background: rgba(100, 122, 199, 0.10);
`

export const AdsContainer = styled.View`
  flex-direction: row;
  display: flex;
  align-items: center;
  gap: 16px;
`

export const TagIcon = styled(Tag).attrs({
  size: 22,
})``

export const AdsCountContainer = styled.View`
  align-items: flex-start;
`

export const AdsCount = styled.Text`
  color: ${({ theme }) => theme.colors.gray2};
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  line-height: ${({ theme }) => theme.lineHeight.xl}px;
`

export const AdsCountText = styled.Text`
  color: ${({ theme }) => theme.colors.gray2};
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  line-height: ${({ theme }) => theme.lineHeight.sm}px;
`

export const MyAdsLink = styled.TouchableOpacity`
  align-items: center;
  gap: 8px;
  flex-direction: row;
`

export const MyAdsLinkText = styled.Text`
  color: ${({ theme }) => theme.colors.blue};
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.md}px;
  line-height: ${({ theme }) => theme.lineHeight.md}px;
`

export const MyAdsLinkIcon = styled(ArrowRight).attrs(({ theme }) => ({
  size: 20,
  color: theme.colors.blue,
}))`

`
