import styled from 'styled-components/native'

type TextProps = {
  type: 'dark' | 'light'
  centered?: boolean
}

export const ContentText = styled.Text<TextProps>`
  color: ${({ theme, type }) =>
    type === 'dark' ? theme.colors.gray2 : theme.colors.gray4};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  line-height: ${({ theme }) => theme.lineHeight.md}px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};
`
