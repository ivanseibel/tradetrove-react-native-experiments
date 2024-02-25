import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

type TextProps = {
  type: 'black' | 'gray'
}

type VerticalSpaceProps = {
  height: number
}

export const TopContainer = styled(SafeAreaView).attrs({
  edges: ['top'],
})`
  flex: 0.77;
  padding: 0 46px;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray6};
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`

export const BottomContainer = styled(SafeAreaView).attrs({
  edges: ['bottom'],
})`
  flex: 0.23;
  gap: 10px;
  padding: 0 46px;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray1};
  font-size: ${({ theme }) => theme.fontSize['4xl']}px;
  line-height: ${({ theme }) => theme.lineHeight['4xl']}px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
`

export const Text = styled.Text<TextProps>`
  color: ${({ theme, type }) =>
    type === 'black' ? theme.colors.gray2 : theme.colors.gray4};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  line-height: ${({ theme }) => theme.lineHeight.md}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
`

export const VerticalSpace = styled.View<VerticalSpaceProps>`
  height: ${({ height }) => height}px;
  width: '100%';
`

export const Logo = styled.Image``
